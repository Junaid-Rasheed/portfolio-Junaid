import React from "react";
import Link from "next/link";

function Aboutme() {
  return (
    <div>
      {" "}
      <section>
        <div class="flex flex-col text-center w-full">
          <h1 class="text-teal-600 dark:text-teal-400 text-4xl 2xl:text-5xl  py-10 font-semibold tracking-wide">
            About me
          </h1>
          <p className="text-xl px-4 lg:px-0 font-medium text-gray-500 dark:text-gray-300 2xl:text-2xl 2xl:tracking-wider tracking-wider max-w-3xl mx-auto">
            Hello! My name is Junaid Rasheed and I enjoy creating things that
            live on the internet. I completed my graduation in computer sciene.
            My interest in web development started back in 2020, after building
            efficient projects both for clients and to enhance my skillset, I
            feel more confident to build full scale applications and to solve
            business problems. I am doing freelancing at
            <Link
              className="text-teal-600 px-2 underline font-semibold dark:text-teal-400"
              href={"https://www.fiverr.com/share/g53Ayo"}
              target={"_blank"}
            >
              fiverr
            </Link>
            and
            <Link
              className="text-teal-600 pl-2 font-semibold underline dark:text-teal-400"
              href={"https://www.upwork.com/freelancers/~0126f972634c9ed7d8"}
              target={"_blank"}
            >
              upwork
            </Link>
            . My main focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for a variety of
            clients.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Aboutme;
