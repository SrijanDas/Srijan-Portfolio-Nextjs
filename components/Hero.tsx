import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import { urlFor } from "../config/sanity";
import Image from "next/image";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    // Srijan Das
    words: [
      pageInfo?.name ? `Hi, The Name's ${pageInfo.name}` : "Hi",
      "Guy-who-loves-to-Code.tsx",
    ],
    loop: true, // Infinit
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="my-image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-2">{text}</span>
          <Cursor cursorColor="#0073ff" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroBtn">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroBtn">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroBtn">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroBtn">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
