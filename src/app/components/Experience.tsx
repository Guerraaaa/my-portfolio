import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const [timeExperience, setTimeExperience] = useState(0);  
  useEffect(() => {
    const startDate = new Date("2024-03-01");
    const now = new Date();
    const diffInYears = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    setTimeExperience(Math.floor(diffInYears));
  }, []);

return (
    <section
      id="experience"
      className="min-h-screen bg-gradient-to-br from-[#18191a] via-[#232526] to-[#0f1011] text-white flex items-center justify-center px-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 md:gap-16">
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
            Experiência
          </motion.h2>
          <motion.p
            className="text-base md:text- gap-2 text-gray-200 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            >
            Com {timeExperience} anos de experiência em desenvolvimento de software, tenho atuado principalmente com C# e tecnologias web, além de trabalhar frequentemente com SQL Server para gestão de bancos de dados.
            <br />
            Também me interesso por automação de processos, explorando ferramentas como Power Automate e n8n para otimizar fluxos de trabalho.
          </motion.p>
        </motion.div>

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
            src="/img/experience-animation.png"
            alt="Profile Picture"
            fill
            sizes="(min-width: 768px) 28rem, 16rem"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
      
    </section>
);
}
export default Experience;