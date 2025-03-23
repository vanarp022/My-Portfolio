import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false, delay = 0 }) => {
  const animationDelay = `${delay * 0.1}s`;

  return (
    <div 
      className={`
        bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden 
        animate-scale-in opacity-0
        hover:shadow-2xl dark:shadow-gray-900/30
        transform transition-all duration-300 ease-out
        ${featured ? 'hover:-translate-y-2' : 'hover:scale-105'}
      `}
      style={{ animationDelay }}
    >
      <a href={project.liveUrl} target="_blank">
      <div className="relative overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}

          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
        </a>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-3 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-100 
                       rounded-md text-sm font-medium transform transition-transform duration-200 
                       hover:scale-105"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 
                     hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span>Code</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 
                       hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;