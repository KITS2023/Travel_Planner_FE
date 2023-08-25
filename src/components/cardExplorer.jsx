import React from "react";
import Image from "next/image";

function cardExplorer(props) {
  const { url, title, content, data } = props;
  return (
    <>
      <div className="w-full border h-[300px] shadow-2xl">
        <Image
          src={url}
          width="auto"
          height="auto"
          alt="img trips"
          className="aspect-video"
        />
        <div className="p-5">
          <p className="font-bold mt-2">{title}</p>
          <p className="my-3">{content}</p>
          <div className="flex">
            <Image
              src={url}
              width={26}
              height={26}
              alt="user profile"
              className="w-[26px] h-[26px] rounded-full justify-center overflow-hidden object-cover"
            />
            <p className="text-current ml-5">longtv</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default cardExplorer;
