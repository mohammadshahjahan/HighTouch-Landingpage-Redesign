import Image from "next/image";
import React from "react";
import soc2 from "../public/soc2.svg";
import gdpr from "../public/gdpr.svg";
import hippa from "../public/hipaa.svg";
import ccpa from "../public/ccpa.webp";

const SecurityCertifications = () => {
  return (
    <div>
      <h1 className="text-white text-3xl lg:text-5xl text-center m-10 ">
        Your data is always secure
      </h1>
      <div className="m-10 flex justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-white text-xl lg:text-3xl">
          <div className="flex justify-center items-center h-48 w-48 mb-5">
            <Image className="h-full w-full" alt="no-image" src={soc2} />
          </div>

          <div className="flex justify-center items-center h-48 w-48 mb-5">
            <Image className="h-full w-full" alt="no-image" src={gdpr} />
          </div>

          <div className="flex justify-center items-center h-48 w-48 mb-5">
            <Image className="h-full w-full" alt="no-image" src={hippa} />
          </div>

          <div className="flex justify-center items-center h-48 w-48 mb-5">
            <Image className="h-full w-full" alt="no-image" src={ccpa} />
          </div>
        </div>
      </div>
      <div className="m-7">
        <div className="p-10 flex flex-col lg:flex-row justify-center align-middle bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 rounded-3xl ">
          <div className="mt-3 lg:m-16 grid grid-cols-1 gap-7 ">
            <h1 className="text-white text-3xl md:text-5xl lg:text-7xl">
              Activate your data in less than 5 minutes
            </h1>
            <button className="text-black m-2 md:text-2xl rounded-lg shadow-lg bg-[#C5EA41] hover:bg-[#C5EA41e3] w-auto md:w-[200px] md:h-[50px]">
              Book Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCertifications;
