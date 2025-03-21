import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Code2, ChevronRight, Download } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.slice(0, 6);

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'MongoDB', 'SQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'VS Code', 'Figma']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm Pranav
                <span className="block text-blue-400 mt-2">A CS Undergrad.</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300">
              Aspiring software developer with a passion for DSA and mathematics. Enthusiastic about solving complex problems and building innovative solutions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="/public/resumeCV.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </a>
                <Link
                  to="/projects"
                  className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition transform hover:-translate-y-1"
                >
                  View Projects
                </Link>
              </div>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/vanarp022"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition transform hover:-translate-y-1"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/lifeispranav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400 transition transform hover:-translate-y-1"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://leetcode.com/u/vanarp022/"
                  target='_blank'
                  className="text-white hover:text-blue-400 transition transform hover:-translate-y-1"
                >
                  <Code2 className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white animate-fade-in">
              Recent Projects
            </h2>
            <Link
              to="/projects"
              className="group flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
            >
              View All Projects
              <ChevronRight className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                featured 
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white animate-fade-in">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-lg 
                         hover:shadow-xl transition-all duration-300 transform 
                         hover:scale-105 animate-scale-in opacity-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-5">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 
                               dark:text-blue-100 rounded-md text-sm font-semibold
                               transform transition-all duration-300
                               hover:scale-110 hover:shadow-md"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;