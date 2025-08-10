"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-4 w-full">
        <div className="flex flex-col items-center w-full max-w-3xl">
          <motion.div
            className="flex flex-row items-center justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold leading-none text-center"
              whileHover={{ scale: 1.08, color: "#38bdf8" }} // azul claro ao passar o mouse
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mario
            </motion.h1>
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                  width={80}
                  height={80}
                  alt="Csharp Logo"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  width={40}
                  height={40}
                  alt="TypeScript Logo"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  width={40}
                  height={40}
                  alt="Python Logo"
                />
              </motion.div>
            </div>
          </motion.div>
          <motion.h1
            className="text-6xl md:text-[6.5rem] font-bold tracking-[.2em] text-center mt-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.08, color: "#38bdf8" }}
          >
            Guerra
          </motion.h1>
        </div>
      </section>
    </>
  );
}