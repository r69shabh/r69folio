import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const projects = [
  { name: "AI Drawing App", year: 2024, tech: "React, Node.js, Python", client: "NST" , link: "https://github.com/r69shabh/SketchdetectAI-FE"},
  { name: "_search", year: 2024, tech: "HTML, CSS", client: "Personal" , link:"https://github.com/r69shabh/_earch"},
  { name: "Cleartrip Clone", year: 2024, tech: "React, Node.js", client: "NST" , link:"https://github.com/r69shabh/ClearTrip-Clone"},
];

const awards = [
  { name: "Best Web App", year: 2023, org: "TechAwards" },
  { name: "Innovation Prize", year: 2022, org: "StartupSummit" },
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'} transition-colors duration-500 ease-in-out`}>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <header className="mb-16 opacity-0 animate-fade-in">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-bold tracking-tighter">R</h1>
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
            </button>
          </div>
          <div className="text-3xl md:text-4xl mb-8 leading-relaxed space-y-2 font-light">
            <p className="animate-slide-up" style={{animationDelay: '100ms'}}>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-normal">Hello,</span> I'm Rishabh,
            </p>
            <p className="animate-slide-up" style={{animationDelay: '200ms'}}>
              a <span className="text-blue-500 font-normal">Full-stack Developer</span> and
            </p>
            <p className="animate-slide-up" style={{animationDelay: '300ms'}}>
              your designer's favorite programmer.
            </p>
            <p className="animate-slide-up" style={{animationDelay: '400ms'}}>
              A world traveler, but calling <span className="text-blue-500 font-normal">India</span> my home.
            </p>
            <p className="animate-slide-up" style={{animationDelay: '500ms'}}>
              Loves the fast pace of the tech landscape,
            </p>
            <p className="animate-slide-up" style={{animationDelay: '600ms'}}>
              UX, AI, and creating meaningful products.
            </p>
            <p className="animate-slide-up" style={{animationDelay: '700ms'}}>
            Currently studying Computer Science
            </p>
            <p className="animate-slide-up" style={{animationDelay: '800ms'}}>
              and working on <span className="text-blue-500 font-normal">life</span>.
            </p>
          </div>
          <div className="flex space-x-6 animate-fade-in" style={{animationDelay: '1s'}}>
            <a href="https://github.com/r69shabh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <GithubIcon size={28} />
            </a>
            <a href="https://linkedin.com/in/rishabh--gusain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors duration-300">
              <LinkedinIcon size={28} />
            </a>
            <a href="mailto:rishabhgusain.6@gmail.com" className="hover:text-blue-500 transition-colors duration-300">
              <MailIcon size={28} />
            </a>
          </div>
        </header>

        <main className="space-y-16">
            <section className="opacity-0 animate-fade-in" style={{animationDelay: '1.2s'}}>
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">FEATURED PROJECTS</h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
              <div key={index} className="group">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-blue-500 group-hover:text-blue-400 transition-colors duration-300">
                {project.name} <span className="text-gray-400 dark:text-gray-500">◦ {project.year}</span>
                </a>
                <p className="text-gray-600 dark:text-gray-400">{project.tech} ◦ {project.client}</p>
              </div>
              ))}
            </div>
            </section>

          {/* <section className="opacity-0 animate-fade-in" style={{animationDelay: '1.4s'}}>
            <h3 className="text-2xl font-semibold mb-6 tracking-wide">AWARDS AND RECOGNITIONS</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="group">
                  <h4 className="text-xl font-medium group-hover:text-blue-500 transition-colors duration-300">
                    {award.name} <span className="text-gray-400 dark:text-gray-500">◦ {award.year}</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">{award.org}</p>
                </div>
              ))}
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
}

export default App;