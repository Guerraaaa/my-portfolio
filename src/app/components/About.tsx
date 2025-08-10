import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [idade, setIdade] = useState<number | null>(null);

  useEffect(() => {
    // Calcula a idade automaticamente ao montar o componente
    const calcularIdade = (dataNascimento: string) => {
      const hoje = new Date();
      const nascimento = new Date(dataNascimento);
      let idadeCalculada = hoje.getFullYear() - nascimento.getFullYear();
      const mes = hoje.getMonth() - nascimento.getMonth();
      if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idadeCalculada--;
      }
      setIdade(idadeCalculada);
    };
    calcularIdade("2005-09-05"); // Altere para sua data de nascimento real
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-[#18191a] via-[#232526] to-[#0f1011] text-white flex items-center justify-center px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -60 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, type: "spring" }}
          whileHover={{
            scale: 1.04,
            rotate: 2,
            boxShadow: "0 0 32px #7f5af0aa",
          }}
          className="relative flex justify-center items-center w-64 h-64 md:w-[28rem] md:h-[28rem] rounded-[40%_60%_60%_40%/60%_40%_60%_40%] overflow-hidden shadow-2xl shadow-black/40"
        >
          <Image
            src="/img/about-animation.png"
            alt="Profile Picture"
            fill
            sizes="(min-width: 768px) 28rem, 16rem"
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full max-w-md bg-[#232526]/80 rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-4"
        >
          <motion.h2
            className="text-xl md:text-2xl font-bold mb-1 text-[#7f5af0]"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Sobre mim
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Olá! Sou{" "}
            <span className="font-semibold text-[#38bdf8]">Mario Guerra</span>,{" "}
            {idade} anos, estudante de Ciência da Computação na UNIP.
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            Tenho experiência com{" "}
            <span className="font-semibold text-[#7f5af0]">C#</span>,{" "}
            <span className="font-semibold text-[#38bdf8]">TypeScript</span> e{" "}
            <span className="font-semibold text-yellow-400">Python</span>, atuando
            em aplicações web, automações e APIs.
          </motion.p>
          <motion.p
            className="text-base md:text-lg text-gray-300 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
          >
            Busco sempre evoluir, aprendendo novas tecnologias e participando de
            projetos desafiadores.
          </motion.p>
          <motion.div
            className="mt-2 flex flex-col gap-1 text-right"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <span className="text-gray-400 text-sm">Contato:</span>
            <a
              href="mailto:mariolsguerraa@gmail.com"
              className="text-[#38bdf8] hover:underline text-sm"
            >
              mariolsguerraa@gmail.com
            </a>
            <a
              href="https://github.com/Guerraaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#7f5af0] hover:underline text-sm"
            >
              github.com/Guerraaaa
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;