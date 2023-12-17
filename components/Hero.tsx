import Link from "next/link";

const Hero = () => {
  return (
    <div className="m-7">
      <div className="p-10 flex flex-col lg:flex-row justify-center align-middle bg-gradient-to-r from-teal-900 via-teal-600 to-teal-300 rounded-3xl ">
        <div className="mt-3 lg:m-16 grid grid-cols-1 gap-7 ">
          <p className="text-[#C5EA41] text-lg">#1 IN REVERSE ETL</p>
          <h1 className="text-white text-3xl md:text-5xl lg:text-7xl">
            Get fresh, accurate customer data in all your tools - fast
          </h1>
          <div className="text-white text-base md:text-lg lg:text-xl ">
            Hightouch syncs your data to CRM, e-mail, advertising tools and
            more. No engineering, manual work, or costly CDP required.
          </div>

          <div>
            <input
              className="pl-3 border-none outline-none text-black w-full md:hidden"
              placeholder="Work Email"
            ></input>
          </div>

          <div className="flex gap-4 ">
            <button className="text-black p-2 rounded-md shadow-sm  bg-[#C5EA41] hover:bg-[#C5EA41e3] w-full sm:w-auto">
              Book Demo
            </button>
            <div className="text-white grid grid-cols-2 gap-1 hover:gap-2 items-center">
              <span className="text-lg hidden lg:block">
                <Link href="" className="hover:underline" color={"white"}>
                  {"Getting Started"}
                </Link>
              </span>

              <span className="text-lg hidden lg:block">{">"}</span>
            </div>
          </div>
        </div>
        <video
          src={require("../public/heroFilm.webm")}
          autoPlay
          muted
          loop
          className="responsive-video "
        />
      </div>
    </div>
  );
};

export default Hero;
