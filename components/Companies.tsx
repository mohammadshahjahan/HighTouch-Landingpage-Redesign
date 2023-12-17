import Image from "next/image";
import { companyNames } from "@/public/companyNamesList";
import Link from "next/link";

const Companies = () => {
  return (
    <div className="m-7 bg-white rounded-3xl">
      <div className="p-10 flex text-2xl text-black gap-4">
        <span>
          Your favorite companies use Hightouch to sync data securely at scale.
        </span>
        <span className="text-white grid grid-cols-2 gap-1 hover:gap-2 items-center">
          <span className="text-lg hidden lg:block">
            <Link
              href="#"
              className="hover:underline text-lime-500"
              color={"lightgreen"}
            >
              {"Our Customers"}
            </Link>
          </span>
          <span className="text-lime-600 text-lg hidden lg:block">{">"}</span>
        </span>
      </div>
      <div className="p-10 lg:mt-5 lg:mb-10 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 ">
        {companyNames.map((company) => (
          <div key={company} className="w-100 lg:w-110">
            <Image
              src={`/${company}`}
              width={110}
              height={14}
              alt="Picture of the author"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
