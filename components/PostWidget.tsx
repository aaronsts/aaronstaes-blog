import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../services";
import moment from "moment";
import Link from "next/link";

type Props = {
  slug: string | undefined;
  categories: Array | undefined;
};

const PostWidget = (props: Props) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (props.slug) {
      getSimilarPosts(props.categories, props.slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [props.slug]);

  return (
    <div className="bg-white shadow-lg rounded p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {props.slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center mb-4">
          <div className=" flex-none">
            <img
              src={post.featuredImage.url}
              alt={post.title}
              width="60px"
              height="60px"
              className=" rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} className="text-md">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
