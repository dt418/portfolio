"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/classname";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HeroContent() {
  const router = useRouter();
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={cn("flex flex-row items-center px-20 mt-40 w-full z-[20]")}
    >
      <div
        className={cn(
          "h-full w-full flex flex-col gap-5 justify-center m-auto text-start"
        )}
      >
        <motion.div
          variants={slideInFromTop()}
          className={cn(
            "welcome-box py-3 px-4 border border-[#7024f88b] opacity-[0.85] gap-2 flex-wrap"
          )}
        >
          <SparklesIcon className={cn("text-[#b49bff] h-5 w-5")} />
          <h1 className={cn("welcome-text text-[14px] capitalize flex-wrap")}>
            Fullstack Developer Portfolio
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className={cn(
            "flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          )}
        >
          <span>
            Providing
            <span
              className={cn(
                "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              )}
            >
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>
        <motion.p
          variants={slideInFromLeft(0.8)}
          className={cn("text-lg text-gray-400 my-5 max-w-[600px]")}
        >
          I&apos;m a Fullstack Software Engineer with experience in website and
          software development. Check out my projects and skills
        </motion.p>
        <motion.a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            router.push("/");
          }}
          variants={slideInFromLeft(0, 1.3)}
          className={cn(
            "py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] capitalize"
          )}
        >
          Learn more!
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className={cn("w-full h-full flex justify-center items-center")}
      >
        <Image
          alt="works icon"
          src="/assets/mainIconsdark.svg"
          width={650}
          height={650}
        />
      </motion.div>
    </motion.div>
  );
}
