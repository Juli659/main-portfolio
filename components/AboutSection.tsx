"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#faf8f5] text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Animated Image / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center relative"
        >
          <div className="relative w-[300px] h-[380px] sm:w-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/profile.jpg" // Replace with your image path
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Background Accent */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-black rounded-2xl -z-10 hidden sm:block" />
        </motion.div>

        {/* Right Side: Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col gap-4 text-left"
        >
          <div className="flex items-center gap-2">
            <span className="w-8 h-[2px] bg-black"></span>
            <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">
              Get To Know Me
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            About Me
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            I am a passionate UI/UX Designer and Web Developer specializing in building modern, responsive, and performant web applications using React, Next.js, TypeScript, and Tailwind CSS.
          </p>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            My goal is to translate complex user requirements into clean, functional code paired with elegant, user-centric interfaces.
          </p>

          {/* Key Skill Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {["UI/UX Design", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-700 shadow-sm"
                >
                  {skill}
                </motion.span>
              )
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}