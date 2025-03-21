import React from 'react';
import { Github, Linkedin, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
            <div className="flex space-x-4">
              <a href="https://leetcode.com/u/vanarp022/" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Code2 className="h-6 w-6" />
              </a>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/lifeispranav" target="_blank" rel="noopener noreferrer"
                className="hover:text-blue-400 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="/projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="/education" className="hover:text-blue-400 transition">Education</a></li>
            </ul>
          </div>
          
          <div>

            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-white-400">
            <a href="https://maps.app.goo.gl/8m3N6PNd1GXHuE7TA" target='_blank' className="hover:text-blue-400 transition">Patna, Bihar</a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-5 pt-3 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">Thanks for Visiting my Portfolio</p>
          <p className="flex items-center text-sm text-gray-400 mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by Pranav
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;