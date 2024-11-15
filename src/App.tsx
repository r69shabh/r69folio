import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, GithubIcon, LinkedinIcon, MailIcon, CodeIcon, BrainCircuitIcon, GlobeIcon } from 'lucide-react';

interface Project {
  name: string;
  year: number;
  tech: string;
  client: string;
  link: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    name: "AI Drawing App",
    year: 2024,
    tech: "React, Node.js, Python",
    client: "NST",
    link: "https://github.com/r69shabh/SketchdetectAI-FE",
    description: "An AI-powered drawing application that recognizes and enhances hand-drawn sketches in real-time.",
    image: "https://images.unsplash.com/photo-1579403124614-197f69d8187b?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "_search",
    year: 2024,
    tech: "HTML, CSS",
    client: "Personal",
    link: "https://github.com/r69shabh/_earch",
    description: "A minimalist search interface with advanced filtering capabilities and instant results.",
    image: "https://images.unsplash.com/photo-1555952517-2e8e729e0b44?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Cleartrip Clone",
    year: 2024,
    tech: "React, Node.js",
    client: "NST",
    link: "https://github.com/r69shabh/ClearTrip-Clone",
    description: "A full-featured travel booking platform with real-time pricing and availability.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=500"
  }
];

const skills = [
  { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { name: "Backend", items: ["Node.js", "Python", "Express", "MongoDB"] },
  { name: "Tools", items: ["Git", "Docker", "AWS", "Firebase"] }
];

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('projects');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : 'light'} transition-colors duration-500 ease-in-out`}>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <header className="mb-16 opacity-0 animate-fade-in">
          <nav className="flex justify-between items-center mb-12">
            <h1 className="text-5xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">R</span>
            </h1>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveSection('projects')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === 'projects' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Projects
              </button>
              <button
                onClick={() => setActiveSection('skills')}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  activeSection === 'skills' ? 'bg-blue-500 text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                Skills
              </button>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {isDarkMode ? <SunIcon size={24} /> : <MoonIcon size={24} />}
              </button>
            </div>
          </nav>

          <div className="text-3xl md:text-4xl mb-12 leading-relaxed space-y-2 font-light">
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
              Currently studying Computer Science
            </p>
            <p className="animate-slide-up" style={{animationDelay: '600ms'}}>
              and working on <span className="text-blue-500 font-normal">life</span>.
            </p>
          </div>

          <div className="flex space-x-6 animate-fade-in" style={{animationDelay: '700ms'}}>
            <a href="https://github.com/r69shabh" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
              <GithubIcon size={28} />
            </a>
            <a href="https://linkedin.com/in/rishabh--gusain" target="_blank" rel="noopener noreferrer" 
               className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
              <LinkedinIcon size={28} />
            </a>
            <a href="mailto:rishabhgusain.6@gmail.com" 
               className="hover:text-blue-500 transition-colors duration-300 transform hover:scale-110">
              <MailIcon size={28} />
            </a>
          </div>
        </header>

        <main className="space-y-16">
          {activeSection === 'projects' && (
            <section className="opacity-0 animate-fade-in grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 p-6 text-white">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" 
                         className="text-xl font-medium hover:text-blue-400 transition-colors duration-300">
                        {project.name}
                      </a>
                      <p className="text-sm text-gray-300 mt-2">{project.description}</p>
                      <div className="flex items-center mt-4 space-x-2">
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
                          {project.tech}
                        </span>
                        <span className="text-gray-400">◦</span>
                        <span className="text-gray-300">{project.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {activeSection === 'skills' && (
            <section className="opacity-0 animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((category, index) => (
                  <div key={index} className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition-colors duration-300">
                    <div className="flex items-center space-x-3 mb-4">
                      {index === 0 && <CodeIcon className="text-blue-500" />}
                      {index === 1 && <BrainCircuitIcon className="text-purple-500" />}
                      {index === 2 && <GlobeIcon className="text-green-500" />}
                      <h3 className="text-xl font-semibold">{category.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-sm rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
