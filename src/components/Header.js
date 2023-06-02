import { React, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.svg";
import menuOpen from "../public/menuOpen.svg";
import menuClose from "../public/menuClose.svg";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="shadow-md w-full top-0 left-0">
      <div className="md:flex py-4 md:px-10 px-7 items-center justify-between">
        <div className="cursor-pointer flex items-center">
          <Link href="/">
            <Image
              src={logo}
              width={70}
              height={70}
              alt="Logo"
              className="hover:opacity-70 duration-500"
            />
          </Link>
        </div>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="absolute right-8 top-6 cursor-pointer md:hidden "
        >
          <Image
            src={openMenu ? menuClose : menuOpen}
            width="55"
            height="55"
            alt="Menu"
          />
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:bg-white rounded-md bg-violet-700 md:static md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 trasition-all duration-500 easy-in ${
            openMenu ? "top-24" : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className="duration-500 text-white font-bold md:text-violet-700 hover:border-violet-700 border-b-2  border-white hover:opacity-70"
              href="/clima"
            >
              CLIMA
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className=" duration-500 text-white font-bold md:text-violet-700 hover:border-violet-700 border-b-2  border-white hover:opacity-70"
              href="/cep"
            >
              CEP
            </Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link
              className=" duration-500 text-white font-bold md:text-violet-700 hover:border-violet-700 border-b-2  border-white hover:opacity-70"
              href="/contato"
            >
              CONTATO
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
