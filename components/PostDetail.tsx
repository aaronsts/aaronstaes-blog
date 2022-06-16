import React from "react";

import moment from "moment";

interface IProps {
  post: {
    createdAt: string;
    featuredImage: {
      url: string;
    };
    title: string;
    author: {
      profilePicture: {
        url: string;
      };
      name: string;
    };
    content: {
      raw: {
        children: any;
      };
    };
  };
}

const PostDetail = ({ post }: IProps) => {
  const getContentFragment = (index: any, text: any, obj: any, type: any) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item: any, i: any) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t"
        />
      </div>
      <div className="px-4 lg:px-8">
        <div className="flex items-center mb-8 w-full">
          <img
            src={post.author.profilePicture.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded"
          />
          <div className="flex flex-col ml-4 items-start text-sm">
            <p>{post.author.name}</p>
            <span>{moment(post.createdAt).format("MMM DD YYYY")}</span>
          </div>
        </div>
        <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
        {post.content.raw.children.map((typeObj: any, index: BigInteger) => {
          const children = typeObj.children.map(
            (item: any, itemIndex: BigInteger) => {
              return getContentFragment(itemIndex, item.text, item);
            }
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
