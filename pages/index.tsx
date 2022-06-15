import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { getPosts } from "../services";
type Props = {
  posts: Array;
};

import { PostCard, PostWidget, Categories } from "../components";

const Home: NextPage = ({ posts }: Props) => {
  return (
    <div className="container mx-auto px-10 mb-8 bg-gray-200">
      <Head>
        <title>Aaron Staes Blog</title>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: any, index: number) => (
            <PostCard post={post.node} key={index} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8"></div>
          <PostWidget />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

export default Home;
