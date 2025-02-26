import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Serendale</h1>

        <button className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <nav className={`${isOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Smart Contracts
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Solutions
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Roadmap
              </a>
            </li>
            <li>
              <a href="#" className="relative hover:after:w-full after:w-0 after:h-1 after:bg-purple-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                Whitepaper
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
