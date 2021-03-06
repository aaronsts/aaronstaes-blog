import React from "react";
import Image from "next/image";

interface IProps {
  author: any;
}

const Author = ({ author }: IProps) => {
  return (
    <div className=" relative text-center mt-20 mb-8 p-12  rounded  bg-black bg-opacity-20">
      <div className="absolute left-0 right-2 -top-14">
        <Image
          src={author.profilePicture.url}
          alt={author.name}
          unoptimized
          height="100px"
          width="100px"
          className="align-middle rounded-full align-middle"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
