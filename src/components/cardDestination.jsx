import React from "react";
import Image from "next/image";
import { Button, Rate } from "antd";

function CardDestination(props) {
    const {urlImage, rateValue, data} = props;
  return (
    <div className="w-full h-full">
      <Image
        src={urlImage}
        width="auto"
        height="auto"
        alt="image"
        className="aspect-video mb-3"
      />
      <div>
        <div className="my-2">
          <Button type="primary" className="!mr-[15px]">
            Europe
          </Button>
          <Rate allowHalf defaultValue={rateValue} disabled />
        </div>
        <div className="gap-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </div>
      </div>
    </div>
  );
}

export default CardDestination;
