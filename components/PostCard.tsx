import React from "react";
import Link from "next/link";
import moment from "moment";

type Post = {
  title: string;
  featuredImage: {
    url: string;
  };
  slug: string;
  excerpt: string;

  author: {
    profilePicture: {
      url: string;
    };
    name: string;
  };
  createdAt: string;
};

const PostCard = (props: { post: Post }) => {
  console.log(props.post);

  return (
    <div className="bg-white shadow-md rounded p-0 lg:p-8 mb-8">
      <div className="relative overflow-hidden shadow-sm pb-80 mb-6">
        <img
          src={props.post.featuredImage.url}
          alt={props.post.title}
          className="object-top absolute h-80 w-full object-cover shadow-md rounded"
        />
      </div>
      <h1 className="transition duration-500 text-center mb-4 cursor-pointer hover:text-red-500 text-2xl font-bold ">
        <Link href={`/post/${props.post.slug}`}>{props.post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center pb-8 w-full">
        <p className="mb-8 text-gray-700 font-normal px-4 lg:p-20">
          {props.post.excerpt}
        </p>
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 text-xs font-light italic">
          <img
            src={props.post.author.profilePicture.url}
            alt={props.post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded"
          />
          <div className="flex flex-col ml-4 items-start">
            <p className=" text-sm">{props.post.author.name}</p>
            <span>{moment(props.post.createdAt).format("MMM DD YYYY")}</span>
          </div>
        </div>
        <div>
          <Link href={`/post/${props.post.slug}`}>
            <span className="text-gray-500 hover:text-gray-900 cursor-pointer">
              Continue Reading
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
