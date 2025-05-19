import MobileMenu from "./components/Mobilemenu.jsx";
import TigerGroup from "./components/MotionTigerJump.jsx";
import Hero from "./components/Typed.jsx";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-green min-h-screen w-full">
      <header className="sticky top-0 bg-white shadow-md z-1000">
        <nav className="flex justify-between bg-yello items-center h-16 max-w-full lg:h-30 z-10">
          <h2 className=" md:hidden flex pl-3 hover:text-blue-900 ">
            Pongharit
          </h2>
          <MobileMenu />
          <span className="hidden md:flex sm:hidden md:text-3xl pl-3 2xl:text-6xl xl:text-4xl font-black hover:text-blue-900 ">
            pongharit
          </span>
          <ul className="hidden lg:flex sm:hidden justify-end items-center gap-10  p-4 ">
            <li>
              <span
                onClick={() => scrollToSection("home")}
                className="inline-block text-3xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300"
              >
                Home
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("about")}
                className="inline-block text-3xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300"
              >
                About
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("skills")}
                className="inline-block text-3xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300"
              >
                Skills
              </span>
            </li>
            <li>
              <span
                onClick={() => scrollToSection("projects")}
                className="inline-block text-3xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300 "
              >
                Project
              </span>
            </li>
            <li>
              <div
                className="flex items-center gap-6 bg-blue-400 hover:bg-pink-200 rounded-3xl px-3 "
                onClick={() => scrollToSection("contact")}
              >
                <img
                  src="/art/icon-email.png"
                  alt="email"
                  className="inline-block w-[50px] font-extrabold hover:scale-110 transition-transform duration-300 "
                />
                <span className="text-2xl underline pr-2">Say hi</span>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className=" sticky top-80 left-0  z-100">
          <div className="hidden lg:flex sm:hidden ">
            <div className=" w-[300px] ml-[-185px] hover:ml-0 hover:transition-all duration-300  ">
              <span className="ml-5 text-4xl font-bold  rounded-[5px] px-2">
                Nice to <br />{" "}
                <span className=" inline-block ml-6 text-4xl">meet you.</span>
              </span>
              <img
                src="/art/tiger-sleep.png"
                alt="tigerSayhi"
                className="ml-[-20px]"
              />
              <div className="flex flex-col justify-center gap-4 ">
                <a
                  href="https://www.linkedin.com/in/pongharit-kitudom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[250px] h-[70px] bg-blue-200 rounded-[40px] flex  items-center ml-[-30px] justify-end gap-5">
                    <h2>Linkedin</h2>
                    <img
                      src="/art/linkedin.svg"
                      alt=""
                      className="w-[55px] mr-3"
                    />
                  </div>
                </a>
                <a
                  href="https://github.com/SsuaA1911"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[250px] h-[70px] bg-emerald-300 rounded-[40px] flex  items-center ml-[-30px] justify-end gap-7">
                    <h2>Github</h2>
                    <img src="/art/git.svg" alt="" className="w-[70px]" />
                  </div>
                </a>
                <a
                  href="https://www.canva.com/design/DAGjSTJCpLU/9iC3AcvhfrN7Mh__9RaHTA/edit?utm_content=DAGjSTJCpLU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[250px] h-[70px] bg-purple-300 rounded-[40px] flex  items-center ml-[-30px] justify-end gap-7">
                    <h2>Resume</h2>
                    <img
                      src="/art/icon-tiger.png"
                      alt=""
                      className="w-[65px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="home"
          className="lg:mt-[-500px] px-4 md:px-8 max-w-screen-xl mx-auto"
        >
          {/* About Me */}
          <div className="flex flex-col items-center mt-10">
            <Hero />
          </div>

          <div
            id="about"
            className=" hidden lg:flex justify-center items-center gap-2 mt-4 lg:mt-20 sm:hidden"
          >
            <a
              href="https://www.youtube.com/watch?v=6td_lXTEvfk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TigerGroup />
            </a>
          </div>
          <div className="flex flex-col mt-10  items-center lg:pt-20">
            <h2 className=" sm:hidden  bg-orange rounded-[5px]  px-2 mb-4 max-w-max text-lg md:text-xl">
              About Me
            </h2>
            <h1 className=" hidden md:flex sm:hidden   bg-orange rounded-[5px] my-10  px-2  max-w-max text-lg ">
              About Me
            </h1>
            <span
              id="skills"
              className=" indent-8 text-base font-bold  lg:text-4xl   max-w-prose py-1 leading-relaxed lg:mb-10 "
            >
              Former chef turned Junior Software Developer with a passion for
              building and problem-solving. Recently completed the Generation
              Bootcamp, gaining hands-on experience in front-end and back-end
              development. Built a MERN stack e-commerce website as a key
              project. Always eager to learn, grow and contribute to a
              collaborative team.
            </span>
          </div>

          {/* Technologies and Tools */}
          <div className=" flex-col my-8   ">
            <h2 className="sm:hidden  bg-orange rounded-[5px] pb-1 px-2 mb-4 max-w-max mx-auto">
              Technologies and Tools
            </h2>
            <h1 className=" hidden md:flex sm:hidden  bg-orange rounded-[5px] my-10 mt-20 mb-4 max-w-max   ">
              Technologies and Tools
            </h1>

            <div
              id="projects"
              className="grid  grid-cols-3  mx-auto xl:grid-cols-6 lg:w-[600px] gap-4 lg:gap-x-[200px] lg:gap-y-10 py-4 w-fit md:ml-15 "
            >
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md w-[80px] h-[80px] bg-white rounded-[5px] hover:scale-110 transition-transform duration-400 ">
                <img src="/art/react.svg" alt="React" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-orange-300 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/html.svg" alt="HTML" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-pink-300 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/css.svg" alt="CSS" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-yellow-500 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/js.svg" alt="JavaScript" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-green-200 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/nodejs.svg" alt="Node.js" className="w-[70px]" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img
                  src="/art/mongodb.png"
                  alt="MongoDB"
                  className="rounded-[5px]"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-blue-200 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img
                  src="/art/sql-server.png"
                  alt="SQL Server"
                  className="w-[70px]"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-white rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/git.svg" alt="Git" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md   w-[80px] h-[80px] bg-blue-50 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/tailwind.svg" alt="Tailwind CSS" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] shadow-md  w-[80px] h-[80px] bg-orange-200 rounded-[5px] hover:scale-110 transition-transform duration-400">
                <img src="/art/figma.svg" alt="Figma" />
              </div>
            </div>
          </div>

          {/* Projects --------------------------------------------------------------------------------------------------------------*/}

          <h2 className=" sm:hidden  bg-orange rounded-[5px] pb-1 px-2 mb-4 max-w-max text-lg  mt-8 mx-auto">
            My Project
          </h2>
          <h1 className=" hidden md:flex sm:hidden  bg-orange rounded-[5px] pb-1 px-2 max-w-max text-lg  my-10 mt-20 mx-auto">
            My Project
          </h1>
          <div className="mt-10 w-max-full grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-10 gap-y-10">
            <div className=" w-[300px] h-auto  bg-yellow-100 rounded-md flex  flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[350px]  hover:scale-110 transition-transform duration-400">
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/art/colmar.mp4" type="video/mp4" />
              </video>

              <div className="mt-2 w-full">
                <h2>Colmar Academy</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px]  text-blue-800 ">
                    HTML,CSS
                  </span>
                </h2>
                <h2 className=" flex items-center ">
                  Responsive:
                  <span className=" text-blue-800 lg:text-[20px] text-[18px]  ">
                    Desktop,Mobile
                  </span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://20-sua-colmar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello  hover:bg-amber-600 rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Link</h3>
                      <img src="/art/link.svg" alt="link" className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/20-sua-colmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600   rounded-md px-[1.5rem] max-w-[10rem] h-[2rem] lg:h-[3rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Github</h3>
                      <img
                        src="/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-[300px] h-auto bg-yellow-100 rounded-md flex  flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[350px] hover:scale-110 transition-transform duration-400">
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/art/dragon-ball.mp4" type="video/mp4" />
              </video>

              <div className="mt-2 w-full">
                <h2>Dragon Ball</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    React,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    Desktop
                  </span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://dragonball-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Link</h3>
                      <img src="/art/link.svg" alt="link" className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/dragonball"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>
                        <h3>Github</h3>
                      </h3>
                      <img
                        src="/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[350px] hover:scale-110 transition-transform duration-400">
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/art/miniproject.mp4" type="video/mp4" />
              </video>

              <div className="mt-2 w-full">
                <h2>Note App</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    ReactJS,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    Desktop
                  </span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://mini-project-frontend-sage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Link</h3>
                      <img src="/art/link.svg" alt="link" className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/miniProjectFrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Github</h3>
                      <img
                        src="/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[350px]  hover:scale-110 transition-transform duration-400">
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/art/React-Assessment.mp4" type="video/mp4" />
              </video>

              <div className="mt-2 w-full">
                <h2>React Assessment</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    React,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    Desktop
                  </span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://react-assessment-20.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello   hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Link</h3>
                      <img src="/art/link.svg" alt="link" className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/react-app-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Github</h3>
                      <img
                        src="/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className=" w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[350px] hover:scale-110 transition-transform duration-400">
              <video
                className="w-full h-auto rounded-md"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/art/Spicy-Cobra.mp4" type="video/mp4" />
              </video>

              <div className="mt-2 w-full">
                <h2>Spicy Cobra</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    ReactJS,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    Desktop,Mobile
                  </span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://jsd9-spicy-cobra-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Link</h3>
                      <img src="/art/link.svg" alt="link" className="w-5 h-5" />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/jsd9-spicy-cobra-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello hover:bg-amber-600  rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3>Github</h3>
                      <img
                        src="/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className=" h-auto bg-orange mt-10 lg:mt-30">
        <div className=" pt-5 px-4 md:px-8 max-w-screen-xl mx-auto">
          <form action="https://getform.io/f/axowdkvb" method="POST">
            <div
              id="contact"
              className="flex justify-center items-center gap-2"
            >
              <h2 className=" sm:hidden">Contact Me</h2>
              <h1 className=" hidden md:flex sm:hidden md:text-3xl  ">
                Contact Me
              </h1>
              <img src="/art/icons8-tiger-100.png" className="w-10 lg:w-20" />
            </div>
            <div className="flex  justify-center gap-4 my-6 sm:hidden ">
                <a
                  href="https://www.linkedin.com/in/pongharit-kitudom/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[108px] h-[30px] bg-blue-200  hover:bg-blue-400 rounded-[40px] flex  items-center  justify-center gap-1">
                    <span className="text-[14px]">Linkedin</span>
                    <img
                      src="/art/linkedin.svg"
                      alt="linkedin"
                      className="w-[30px] mr-3"
                    />
                  </div>
                </a>
                <a
                  href="https://github.com/SsuaA1911"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[108px] h-[30px] bg-emerald-300 hover:bg-emerald-500 rounded-[40px] flex  items-center justify-center gap-2">
                    <span className=" text-[14px]">Github</span>
                    <img src="/art/git.svg" alt="" className="w-[34px]" />
                  </div>
                </a>
                <a
                  href="https://www.canva.com/design/DAGjSTJCpLU/9iC3AcvhfrN7Mh__9RaHTA/edit?utm_content=DAGjSTJCpLU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className=" w-[108px] h-[30px] bg-purple-300   hover:bg-purple-500 rounded-[40px] flex  items-center justify-center gap-2">
                    <span className="text-[14px]">Resume</span>
                    <img
                      src="/art/icon-tiger.png"
                      alt=""
                      className="w-[31px]"
                    />
                  </div>
                </a>
              </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 w-[150px] lg:w-[450px] lg:h-[80px] bg-yellow-100 lg:text-2xl"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 w-[150px] lg:w-[450px] lg:h-[80px] bg-yellow-100 lg:text-2xl"
              />
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <textarea
                placeholder="Your Message"
                name="message"
                className="border border-gray-300 rounded-md p-2 w-[300px] lg:w-[900px] h-[100px] lg:h-[200px] bg-yellow-100 lg:text-2xl"
              ></textarea>
            </div>
            <div className="flex justify-center items-center ">
              <button
                type="submit"
                className="bg-green text-black text-[20px] font-bold rounded-md px-4 py-2  mt-4 w-[200px] lg:w-[400px] lg:h-[70px] lg:text-3xl mb-10 hover:bg-blue-800 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;
