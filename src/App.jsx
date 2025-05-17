function App() {
  return (
    <div className="bg-green min-h-screen w-full">
      <header>
        <nav className="flex justify-between bg-yello items-center max-w-full ">
          <h2 className=" md:hidden flex pl-3 ">Pongharit</h2>
          <h1 className="hidden md:flex sm:hidden pl-3">pongharit</h1>
          <ul className="flex justify-end gap-3  p-4 ">
            <li>
              <h3>Home</h3>
            </li>
            <li>
              <h3>About</h3>
            </li>
            <li>
              <h3>Skills</h3>
            </li>
            <li>
              <h3>Contact</h3>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="pt-5 px-4 md:px-8 max-w-screen-xl mx-auto">
          {/* About Me */}
          <div className="flex flex-col items-center mt-10">
            <div className="flex items-center gap-2">
              <h2 className=" md:text-3xl flex">Hello, my name is Tiger</h2>
              <img
                src="../src/assets/art/icons8-tiger-100.png"
                className="w-10"
              />
            </div>

            <h2 className=" text-lg md:text-xl">
              I'm a Junior Software Developer.
            </h2>
          </div>
          <div className="flex flex-col mt-10  items-center">
            <h2 className=" bg-orange rounded-[5px] mt-5 px-2 mb-4 max-w-max text-lg md:text-xl">
              About Me
            </h2>
            <p className=" text-base md:text-lg max-w-prose py-1 leading-relaxed mb-10">
              Former chef turned Junior Software Developer with a passion for
              building and problem-solving. Recently completed the Generation
              Bootcamp, gaining hands-on experience in front-end and back-end
              development. Built a MERN stack e-commerce website as a key
              project. Always eager to learn, grow, and contribute to a
              collaborative team.
            </p>
          </div>

          {/* Technologies and Tools */}
          <div className=" flex-col mt-8 justify-center">
            <h2 className=" bg-orange rounded-[5px] pb-1 px-2 mb-4 max-w-max text-lg md:text-xl">
              Technologies and Tools
            </h2>
            <div className="grid  grid-cols-3  lg:grid-cols-5 xl:grid-cols-6 lg:w-[600px] gap-4 py-4 w-fit">
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-white rounded-[5px]  ">
                <img src="../src/assets/art/react.svg" alt="React" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-orange-300 rounded-[5px]">
                <img src="../src/assets/art/html.svg" alt="HTML" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-pink-300 rounded-[5px]">
                <img src="../src/assets/art/css.svg" alt="CSS" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-yellow-500 rounded-[5px]">
                <img src="../src/assets/art/js.svg" alt="JavaScript" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-green-200 rounded-[5px]">
                <img
                  src="../src/assets/art/nodejs.svg"
                  alt="Node.js"
                  className="w-[70px]"
                />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] rounded-[5px]">
                <img
                  src="../src/assets/art/mongodb.png"
                  alt="MongoDB"
                  className="rounded-[5px]"
                />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-blue-200 rounded-[5px]">
                <img
                  src="../src/assets/art/sql-server.png"
                  alt="SQL Server"
                  className="w-[70px]"
                />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-white rounded-[5px]">
                <img src="../src/assets/art/git.svg" alt="Git" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-blue-50 rounded-[5px]">
                <img src="../src/assets/art/tailwind.svg" alt="Tailwind CSS" />
              </div>
              <div className="flex justify-center items-center w-[80px] h-[80px] bg-orange-200 rounded-[5px]">
                <img src="../src/assets/art/figma.svg" alt="Figma" />
              </div>
            </div>
          </div>

          {/* Projects */}

          <h2 className=" bg-orange rounded-[5px] pb-1 px-2 mb-4 max-w-max text-lg md:text-xl mt-8">
            My Project
          </h2>
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* ใส่โปรเจกต์ตรงนี้ */}
            <div className="w-[250px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg ">
              <img src="../src/assets/art/colmar.gif" />

              <div className="mt-2">
                <h4>Colmar Academy</h4>
                <h4 className=" flex items-center">
                  Stack:
                  <span className="text-[10px] text-blue-800 ">HTML,CSS</span>
                </h4>
                <h4 className=" flex items-center">
                  Responsive:
                  <span className="text-[10px] text-blue-800 ">
                    Desktop,Mobile
                  </span>
                </h4>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://20-sua-colmar.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/20-sua-colmar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg ">
              <img src="../src/assets/art/dragon.gif" />

              <div className="mt-2">
                <h4>Dragon Ball</h4>
                <h4 className=" flex items-center">
                  Stack:
                  <span className="text-[10px] text-blue-800 ">React,API,Tailwind</span>
                </h4>
                <h4 className=" flex items-center">
                  Responsive:
                  <span className="text-[10px] text-blue-800 ">Desktop</span>
                </h4>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://dragonball-six.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/dragonball"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg ">
              <img src="../src/assets/art/mini.gif" />

              <div className="mt-2">
                <h4>Note App</h4>
                <h4 className=" flex items-center">
                  Stack:
                  <span className="text-[10px] text-blue-800 ">ReactJS,API,Tailwind,Mongodb</span>
                </h4>
                <h4 className=" flex items-center">
                  Responsive:
                  <span className="text-[10px] text-blue-800 ">
                    Desktop
                  </span>
                </h4>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://mini-project-frontend-sage.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/miniProjectFrontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg ">
              <img src="../src/assets/art/reactAssessment.gif" />

              <div className="mt-2">
                <h4>React Assessment</h4>
                <h4 className=" flex items-center">
                  Stack:
                  <span className="text-[10px] text-blue-800 ">React,API,Tailwind</span>
                </h4>
                <h4 className=" flex items-center">
                  Responsive:
                  <span className="text-[10px] text-blue-800 ">
                    Desktop
                  </span>
                </h4>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://react-assessment-20.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/react-app-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/git.svg"
                        alt="GitHub"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[250px] h-auto bg-yellow-100 rounded-md flex flex-col justify-center items-center mx-auto p-[1rem] shadow-lg ">
              <img src="../src/assets/art/Spicy-Cobra.gif" />

              <div className="mt-2">
                <h4>Spicy Cobra</h4>
                <h4 className=" flex items-center">
                  Stack:
                  <span className="text-[10px] text-blue-800 ">ReactJS,API,Tailwind,Mongodb</span>
                </h4>
                <h4 className=" flex items-center">
                  Responsive:
                  <span className="text-[10px] text-blue-800 ">
                    Desktop,Mobile
                  </span>
                </h4>
                <div className="flex gap-4 justify-center items-center">
                  <a
                    href="https://jsd9-spicy-cobra-frontend.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/link.svg"
                        alt="link"
                        className="w-5 h-5"
                      />
                    </span>
                  </a>
                  <a
                    href="https://github.com/SsuaA1911/jsd9-spicy-cobra-frontend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yello rounded-md px-[1.5rem] max-w-[5rem] h-[1.5rem] flex items-center mt-2"
                  >
                    <span className="gap-2 flex justify-center items-center">
                      Link
                      <img
                        src="../src/assets/art/git.svg"
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

      <footer className="bg-orange h-[100px] mt-8"></footer>
    </div>
  );
}

export default App;
