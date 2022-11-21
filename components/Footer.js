import React from "react";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

function Footer() {
  const Mobile = useMediaQuery({ maxWidth: 640 });

  function sendEmail() {
    window.location = "mailto:junaidrasheed300@gmail.com";
  }
  return (
    <div>
      {" "}
      <section class="text-gray-600 body-font relative">
        <div class="container px-5 pt-24 mx-auto">
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <span className={Mobile ? " " : "flex justify-between "}>
                  <a
                    class="text-md font-medium text-gray-600 dark:hover:text-teal-500 dark:text-gray-300 2xl:text-2xl cursor-pointer"
                    onClick={sendEmail}
                  >
                    junaidrasheed300@gmail.com
                  </a>
                  <p
                    class={
                      Mobile
                        ? " my-4 leading-normal  text-gray-600 dark:text-gray-400"
                        : "leading-normal  text-gray-600 dark:text-gray-400"
                    }
                  >
                    +92 300 8085087
                  </p>
                </span>
                <div className="flex text-3xl justify-center gap-10 my-4 text-gray-500  dark:text-gray-300 py-3">
                  <Link
                    href={"https://twitter.com/jaaay_aar"}
                    target={"_blank"}
                  >
                    <AiFillTwitterCircle className="cursor-pointer hover:text-gray-600" />
                  </Link>
                  <Link
                    href={"https://github.com/Junaid-Rasheed"}
                    target={"_blank"}
                  >
                    <AiFillGithub className="cursor-pointer hover:text-gray-600" />
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/junaid-rasheed-a546501b1"
                    }
                    target={"_blank"}
                  >
                    <AiFillLinkedin className="cursor-pointer hover:text-gray-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
