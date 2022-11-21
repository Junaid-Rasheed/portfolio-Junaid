import React from "react";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Link from "next/link";

function Navbar({ setDrakMode, darkMode }) {
  return (
    <div>
      {" "}
      <section className=" h-2/3">
        <nav className="p-10  flex justify-between">
          <h1 className="text-2xl font-semibold 2xl:font-bold 2xl:text-5xl tracking-wide">
            portfolio.
          </h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl 2xl:text-4xl">
              <BsFillMoonStarsFill onClick={() => setDrakMode(!darkMode)} />
            </li>
            <Link
              href={"https://www.upwork.com/freelancers/~0126f972634c9ed7d8"}
              target={"_blank"}
            >
              <li className="cursor-pointer font-bold border-2 border-teal-600  dark:border-white  bg-teal-100 dark:bg-teal-700 px-4 ml-8 py-2 2xl:font-bold 2xl:text-4xl rounded-lg tracking-wider">
                Lets connect
              </li>
            </Link>
          </ul>
        </nav>

        <div className="p-10 text-center">
          <h2 className="text-teal-600 dark:text-teal-400 text-5xl 2xl:text-6xl  font-semibold">
            Junaid Rasheed
          </h2>
          <h3 className="py-2 2xl:py-3 text-xl 2xl:text-4xl font-semibold tracking-widest">
            software engineer.
          </h3>
          <p className="text-xl font-medium text-gray-500 dark:text-gray-300 2xl:text-2xl 2xl:tracking-wider tracking-wider max-w-md mx-auto">
            frontend developer who focuses on writing clean, elegant and
            efficient code.{" "}
          </p>
        </div>
        <div className="flex text-5xl justify-center gap-8 text-gray-500  dark:text-gray-300 py-3">
          <Link href={"https://twitter.com/jaaay_aar"} target={"_blank"}>
            <AiFillTwitterCircle className="cursor-pointer hover:text-gray-600" />
          </Link>
          <Link href={"https://github.com/Junaid-Rasheed"} target={"_blank"}>
            <AiFillGithub className="cursor-pointer hover:text-gray-600" />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/junaid-rasheed-a546501b1"}
            target={"_blank"}
          >
            <AiFillLinkedin className="cursor-pointer hover:text-gray-600" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
