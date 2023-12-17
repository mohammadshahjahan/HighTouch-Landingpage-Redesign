import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { NavbarLinks } from "@/data/navLinks";

import logo from "@/public/logo1.jpeg";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`flex h-14 items-center justify-center   transition-all duration-200`}
    >
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link href={""}>
          <Image src={logo} alt="Logo" width={160} height={32} loading="lazy" />
        </Link>
        {/* Navigation links */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {
                  <Link href={link.path}>
                    <p className={`hover:underline`}>{link.title}</p>
                  </Link>
                }
              </li>
            ))}
          </ul>
        </nav>
        {/* Login / Signup / Dashboard */}
        <div className="hidden items-center gap-x-1 md:flex">
          <Link href={"/"}>
            <button className="rounded-[8px] border border-[#262c28] bg-black px-[12px] py-[8px] text-white">
              Log in
            </button>
          </Link>
          <Link href={"/"}>
            <button className="rounded-[8px] border border-[#262c28] bg-white px-[12px] py-[8px] text-black ">
              Get Demo
            </button>
          </Link>
        </div>

        <button className="mr-4 md:hidden flex" onClick={() => setOpen(!open)}>
          {open && (
            <div
              className={` group relative z-10  cursor-pointer items-center gap-1
            " bg-[#fff;] p-2 m-2 mt-44 bottom-0 rounded-2xl border-t-2 border-l-2 border-r-2 border-b-2"
             `}
            >
              {NavbarLinks.map((link) => (
                <>
                  <div className="text-[#28322b] hover:text-[#fff] hover:bg-[#28322b] p-1 ">
                    <p>{link.title}</p>
                  </div>
                </>
              ))}
            </div>
          )}
          {!open && <AiOutlineMenu fontSize={24} fill="#AFB2BF" />}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
