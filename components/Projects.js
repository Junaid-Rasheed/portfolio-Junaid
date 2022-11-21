import Image from "next/image";
import React from "react";

function Projects() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto ">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-teal-600 dark:text-teal-400 text-4xl 2xl:text-5xl  font-semibold tracking-wide">
              Projects
            </h1>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative ">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full h-56 object-cover object-center dark:brightness-90"
                  src="/projects/medflow.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400">
                  <h2 class="tracking-widest  title-font text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    Medflow
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    nextjs, tailwindcss, sendgrid, stripe
                  </h1>
                  <p class="leading-relaxed dark:text-gray-300 tracking-wide">
                    A blog site powered by nextJs/tailwindcss where data is
                    coming from headless cms and for email, sendgrid is used.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full h-56 object-cover object-center dark:brightness-90 "
                  src="/projects/islam247.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400">
                  <h2 class="tracking-widest text-lg font-semibold title-font text-teal-600 dark:text-teal-400 mb-1">
                    Islam 24-7
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    mern stack
                  </h1>
                  <p class="leading-relaxed dark:text-gray-300 tracking-wide">
                    Islamic website that contains Quran, Hadees, Tafseer,
                    magazines and chat feature built in mern stack.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full h-56 object-cover object-center dark:brightness-90"
                  src="/projects/kunz.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400">
                  <h2 class="tracking-widest  title-font text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    KUNZ
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    wordpress, elementor-pro
                  </h1>
                  <p class="leading-relaxed dark:text-gray-300 tracking-wide">
                    A blog site for german starter business mainly build in
                    wordpress powered by elementor pro and deployed at bluehost.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4 ">
              <div class="flex relative ">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full h-56 object-cover object-center dark:brightness-90"
                  src="/projects/react-ecommerce.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400">
                  <h2 class="tracking-widest  title-font text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    Ecommerce Ui clone
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    reactjs, mui, firebase
                  </h1>
                  <p class="leading-relaxed dark:text-gray-300 tracking-wide">
                    An ecommerce clone website that mainly focus on styling
                    built in reactjs, styled by mui and deployed at firebase.
                  </p>
                </div>
              </div>
            </div>

            <div class="lg:w-1/3 sm:w-1/2 p-4">
              <div class="flex relative">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full h-56 object-cover object-center dark:brightness-90 "
                  src="/projects/9a-shopping basket.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400 ">
                  <h2 class="tracking-widest    title-font text-lg font-semibold text-teal-600 dark:text-teal-400 mb-1">
                    Cart demo
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    react, typescript, mui, redux
                  </h1>
                  <p class="leading-relaxed dark:text-gray-300 tracking-wide">
                    Self learning demo project mainly perfom add to cart and
                    update items feature built using typescript and redux.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:w-1/3 sm:w-1/2 p-4 ">
              <div class="flex relative ">
                <Image
                  height={"400"}
                  width={"400"}
                  alt="gallery"
                  class="absolute inset-0 w-full  h-56 object-cover object-center dark:brightness-90  "
                  src="/projects/recipe.png"
                />
                <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 dark:bg-slate-700 dark:border-slate-400">
                  <h2 class="tracking-widest text-lg font-semibold title-font  text-teal-600 dark:text-teal-400 mb-1">
                    Recipe website
                  </h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3 dark:text-white tracking-wide">
                    nextjs, mui, contentful cms
                  </h1>
                  <p class="leading-relaxed  dark:text-gray-300 tracking-wide">
                    Website that shows recipe of different food items build in
                    nextjs powered by mui and contentful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects;
