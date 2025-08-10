"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Header from "./Header";

export default function Hero() {
  // const [infoProfile, setInfoProfile] = useState<string | null>(null);
  const faces = [":)", ":D", ":P"];
  const [faceIndex, setFaceIndex] = useState(0);

  // useEffect(() => {
  //   async function fetchProfile() {
  //     const response = await fetch("https://api.github.com/users/Guerraaaa");
  //     const data = await response.json();
  //     setInfoProfile(data.avatar_url);
  //   }
  //   fetchProfile();
  // }, []);

  // Alterna a carinha a cada 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setFaceIndex((prev) => (prev + 1) % faces.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Função para download do currículo
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/img/curriculo.pdf';
    link.download = 'Mario-Guerra-Curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 bg-gradient-to-br from-[#18191a] via-[#232526] to-[#0f1011]">
      {/* Header */}
      <Header />

      {/* Efeito de brilho metálico central */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full bg-gradient-radial from-white/10 via-white/0 to-transparent blur-2xl opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-8 md:gap-16 mt-24">
        {/* Nome e logos à esquerda */}
        <div className="flex flex-col items-start md:items-start md:w-1/2 w-full max-w-xl">
          <h2 className="text-2xl md:text-3xl text-gray-300 font-medium">
            Olá, eu sou o
          </h2>
          <div className="flex flex-row items-center gap-3">
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight text-left"
              style={{ lineHeight: 1.1 }}
            >
              <span className="text-white">Mario </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7f5af0] via-[#38bdf8] to-[#7f5af0]">
                Guerra
              </span>
              <span className="ml-2 text-[#7f5af0] animate-pulse">
                {faces[faceIndex]}
              </span>
            </motion.h1>
          </div>
          <div className="flex justify-center items-center align-middle">
            <div>
              <p className="text-lg md:text-xl text-gray-400 font-normal">
                Desenvolvedor Full Stack
              </p>
            </div>
            <div className="flex items-center ml-4 mb-4 gap-2">
             {/* Logos animadas */}
              <motion.div
                transition={{ duration: 1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
                  width={50}
                  height={50}
                  alt="Csharp Logo"
                />
              </motion.div>
              <motion.div
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
                  width={32}
                  height={32}
                  alt="TypeScript Logo"
                />
              </motion.div>
              <motion.div
                transition={{ duration: 0.5, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 8 }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  width={32}
                  height={32}
                  alt="Python Logo"
                />
              </motion.div>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleDownload}
              className="px-6 py-2 cursor-pointer rounded-lg bg-[#232526] text-white font-semibold hover:bg-[#7f5af0] transition"
            >
              Download CV
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          whileHover={{
            scale: 1.04,
            rotate: 2,
            boxShadow: "0 0 32px #7f5af0aa",
          }}
          className="relative flex justify-center items-center w-56 h-56 md:w-80 md:h-80 rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden z-10 bg-gradient-to-br from-[#232526] via-[#7f5af0] to-[#232526] shadow-2xl shadow-black/40"
        >
          <Link href={"https://github.com/Guerraaaa"} target="_blank">
            <Image
              src="/img/profile-animation.png"
              alt="Profile Picture"
              fill
              sizes="(min-width: 768px) 20rem, 14rem"
              className="object-cover"
              priority
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}