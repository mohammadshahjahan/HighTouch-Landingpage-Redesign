import Image from "next/image";
import React from "react";

interface StoryProps {
  quotation: String;
  body: String;
  imagePath: String;
  designation: String;
}

const Story: React.FC<StoryProps> = ({
  quotation,
  body,
  imagePath,
  designation,
}) => {
  return (
    <div className="p-9 flex flex-col gap-4 col-span-2 text-black justify-center align-middle bg-[#fff] rounded-xl">
      <div className="flex flex-row justify-evenly gap-15">
        <div className="w-36 h-36 md:w-44 md:h-44 lg:w-[240px] lg:h-[240px] rounded-[50%]">
          <Image
            src={`/${imagePath}`}
            width={240}
            height={240}
            alt="Picture of the author"
            className="rounded-[50%]"
          />
        </div>
        <div className="flex justify-center align-middle h-full font-medium text-xl md:text-3xl lg:text-5xl">
          <div className="">
            <p>{quotation}</p>
            <p className="opacity-50 text-sm md:text-lg lg:text-xl mt-1">
              {designation}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="lg:text-2xl">
          {" "}
          <span className="sm:text-lg md:text-2xl lg:text-4xl">❝</span>
          {body}{" "}
        </p>
      </div>
    </div>
  );
};

export default Story;
