import { useState } from "react";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Icon เปิดเมนู */}
      <button
        className="fixed top-0 right-4  text-white text-3xl md:hidden"
        onClick={() => setIsOpen(true)}
      >
        <img src="/art/burger.png" alt="burgericon" />
      </button>

      {/* Fullscreen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-teal-600 z-40 flex flex-col items-center justify-center space-y-6 text-white text-2xl font-bold">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setIsOpen(false)}
          >
            <img src="/art/xicon.svg" alt="xicon" />
          </button>

          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={() => scrollToSection("skills")}>Skills</button>
          <button onClick={() => scrollToSection("projects")}>Projects</button>
          <button onClick={() => scrollToSection("contact")}>Contact</button>
        </div>
      )}
    </>
  );
};

export default MobileMenu;