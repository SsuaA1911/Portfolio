function App() {
  return (
    <div className="bg-green min-h-screen w-full">
      <header>
        <nav className="flex justify-between bg-yello items-center max-w-full lg:h-30">
          <h2 className=" md:hidden flex pl-3 ">Pongharit</h2>
          <span className="hidden md:flex sm:hidden pl-3 2xl:text-6xl xl:text-4xl font-black ">pongharit</span>
          <ul className="hidden lg:flex sm:hidden justify-end gap-3  p-4 ">
            <li>
              <span className="inline-block text-4xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300">Home</span>
            </li>
            <li>
              <span className="inline-block text-4xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300">About</span>
            </li>
            <li>
              <span className="inline-block text-4xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300">Skills</span>
            </li>
            <li>
              <span className="inline-block text-4xl font-extrabold hover:text-blue-700 hover:scale-110 transition-transform duration-300 ">Contact</span>
            </li>
          </ul>

        </nav>
      </header>

      <main >
        <div className="pt-5 px-4 md:px-8 max-w-screen-xl mx-auto">
          {/* About Me */}
          <div className="flex flex-col items-center mt-10">
            <div className="flex items-center gap-2">
              <h2 className=" sm:hidden">Hello, my name is Tiger</h2>
              <h1 className=" hidden md:flex sm:hidden my-10 mt-20  ">Hello, my name is Tiger</h1>
              <img src="/art/icons8-tiger-100.png" className=" w-10 lg:w-20 lg:my-10 lg:mt-20" />
            </div>
              <h1 className=" hidden md:flex sm:hidden   ">I'm a Junior Software Developer.</h1>
            <h2 className="  sm:hidden ml-7 ">
              I'm a Junior Software Developer.
            </h2>
          </div>
          <div className="flex flex-col items-center mt-10">
            <img src="/art/" alt="" />
          </div>
          <div className="flex flex-col mt-10  items-center">
            <h2 className=" sm:hidden  bg-orange rounded-[5px]  px-2 mb-4 max-w-max text-lg md:text-xl">
              About Me
            </h2>
            <h1 className=" hidden md:flex sm:hidden   bg-orange rounded-[5px] my-10 mt-20 px-2  max-w-max text-lg ">
              About Me
            </h1>
            <span className=" indent-8 text-base font-bold  lg:text-4xl   max-w-prose py-1 leading-relaxed lg:mb-10 "> 
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
            
            <div className="grid  grid-cols-3  mx-auto xl:grid-cols-6 lg:w-[600px] gap-4 lg:gap-x-[200px] lg:gap-y-10 py-4 w-fit md:ml-15 ">
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px] w-[80px] h-[80px] bg-white rounded-[5px]  ">
                <img src="/art/react.svg" alt="React" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-orange-300 rounded-[5px]">
                <img src="/art/html.svg" alt="HTML" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-pink-300 rounded-[5px]">
                <img src="/art/css.svg" alt="CSS" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-yellow-500 rounded-[5px]">
                <img src="/art/js.svg" alt="JavaScript" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-green-200 rounded-[5px]">
                <img src="/art/nodejs.svg" alt="Node.js" className="w-[70px]" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] rounded-[5px]">
                <img
                  src="/art/mongodb.png"
                  alt="MongoDB"
                  className="rounded-[5px]"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-blue-200 rounded-[5px]">
                <img
                  src="/art/sql-server.png"
                  alt="SQL Server"
                  className="w-[70px]"
                />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-white rounded-[5px]">
                <img src="/art/git.svg" alt="Git" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-blue-50 rounded-[5px]">
                <img src="/art/tailwind.svg" alt="Tailwind CSS" />
              </div>
              <div className="flex justify-center items-center lg:w-[150px] lg:h-[150px]  w-[80px] h-[80px] bg-orange-200 rounded-[5px]">
                <img src="/art/figma.svg" alt="Figma" />
              </div>
            </div>
          </div>

          {/* Projects */}

          <h2 className=" sm:hidden  bg-orange rounded-[5px] pb-1 px-2 mb-4 max-w-max text-lg  mt-8 mx-auto">
            My Project
          </h2>
          <h1 className=" hidden md:flex sm:hidden  bg-orange rounded-[5px] pb-1 px-2 max-w-max text-lg  my-10 mt-20 mx-auto">
            My Project
          </h1>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 lg:gap-x-20 lg:gap-y-10">
            <div className="w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[400px]  ">
              <img src="/art/colmar.gif" />

              <div className="mt-2">
                <h2 >Colmar Academy</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px]  text-blue-800 ">HTML,CSS</span>
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem] flex items-center mt-2"
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
                    className="bg-yello rounded-md px-[1.5rem] max-w-[10rem] h-[2rem] lg:h-[3rem] flex items-center mt-2"
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
            <div className="w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[400px] ">
              <img src="/art/dragon.gif" />

              <div className="mt-2">
                <h2>Dragon Ball</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    React,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">Desktop</span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://dragonball-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      <h3><h3>Github</h3></h3>
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
            <div className="w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[400px]">
              <img src="/art/mini.gif" />

              <div className="mt-2">
                <h2>Note App</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    ReactJS,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">Desktop</span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://mini-project-frontend-sage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
            <div className="w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[400px] ">
              <img src="/art/reactAssessment.gif" />

              <div className="mt-2">
                <h2>React Assessment</h2>
                <h2 className=" flex items-center">
                  Stack:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">
                    React,API,Tailwind
                  </span>
                </h2>
                <h2 className=" flex items-center">
                  Responsive:
                  <span className="lg:text-[20px] text-[18px] text-blue-800 ">Desktop</span>
                </h2>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://react-assessment-20.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
            <div className="w-[300px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg lg:w-[400px]">
              <img src="/art/Spicy-Cobra.gif" />

              <div className="mt-2">
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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
                    className="bg-yello rounded-md px-[1.5rem]   max-w-[10rem] h-[2rem] lg:h-[3rem]  flex items-center mt-2"
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

      <footer className=" h-auto bg-orange mt-30">
        <div className=" pt-5 px-4 md:px-8 max-w-screen-xl mx-auto" >
          <form action="https://getform.io/f/axowdkvb" method="POST">
            <div className="flex justify-center items-center gap-2">
              <h2 className=" sm:hidden">Contact Me</h2>
              <h1 className=" hidden md:flex sm:hidden md:text-3xl  ">Contact Me</h1>
              <img src="/art/icons8-tiger-100.png" className="w-10 lg:w-20" />
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 w-[150px] lg:w-[450px] lg:h-[80px] bg-yellow-100 lg:text-2xl"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 w-[150px] lg:w-[450px] lg:h-[80px] bg-yellow-100 lg:text-2xl"
              />
            </div>
            <div className="flex justify-center items-center gap-2 mt-4">
              <textarea
                placeholder="Your Message"
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
