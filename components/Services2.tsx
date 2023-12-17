import Link from "next/link";
import React from "react";

interface ServicesProps {
  blockQuote: String;
  heading: String;
  content: string;
  linkText: String;
  videoSrc: string;
}

const Services2: React.FC<ServicesProps> = ({
  blockQuote,
  heading,
  content,
  linkText,
  videoSrc,
}) => {
  return (
    <div className="m-7">
      <div
        className={`p-10 flex flex-col lg:flex-row justify-center align-middle bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 rounded-3xl`}
      >
        <div className="mt-3 mb-3 lg:m-16 grid grid-cols-1 gap-7 ">
          <p className="text-[#C5EA41] text-lg">{blockQuote}</p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl">
            {heading}
          </h1>
          <div className="text-white text-base md:text-lg lg:text-xl ">
            {content}
          </div>

          <div className="text-white grid grid-cols-2 gap-1 hover:gap-2 items-center ">
            <span className="text-xl ">
              <Link href="" className="hover:underline" color={"black"}>
                {linkText}
              </Link>
              {">"}
            </span>
          </div>
        </div>
        <video
          src={require(`../public/${videoSrc}`)}
          autoPlay
          muted
          loop
          className="responsive-video"
        />
      </div>
    </div>
  );
};

export default Services2;
