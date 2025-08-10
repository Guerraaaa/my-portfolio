const Project = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-[#18191a] via-[#232526] to-[#0f1011] text-white flex flex-col items-center px-4 pt-16"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#7f5af0] text-center w-full mb-10">
        Projetos
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10 md:gap-16">
        <div className="w-full max-w-md bg-[#232526]/80 rounded-xl shadow-md p-6 md:p-8 flex flex-col gap-4">
          {/* Conteúdo dos projetos futuramente */}
        </div>
      </div>
    </section>
  );
};

export default Project;