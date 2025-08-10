import Link from "next/link";

const Header = () => {
return (
      <header className="fixed top-0 left-0 w-full z-30 bg-gradient-to-r from-[#232526]/90 via-[#18191a]/80 to-[#232526]/90 shadow-lg backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-white tracking-widest drop-shadow">
          <Link href="/">
            MG
          </Link>  
          </span>
          <nav className="flex gap-6">
            <Link
              href="#about"
              className="text-gray-300 hover:text-white transition"
            >
              Sobre
            </Link>

            <Link
              href="#experience"
              className="text-gray-300 hover:text-white transition"
            >
              Experiência
            </Link>

            <Link
              href="#projects"
              className="text-gray-300 hover:text-white transition"
            >
              Projetos
            </Link>
          </nav>
        </div>
      </header>
);
}
export default Header;