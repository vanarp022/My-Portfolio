import React from 'react';
import { Download } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "National Institute of Technology Patna",
      duration: "2023 - 2027",
    },
    {
      degree: "12th/ Intermediate",
      institution: "Modern School",
      duration: "2022",
    },
    {
      degree: "10th/ Matriculation",
      institution: "St. Karen's High School",
      duration: "2020",
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Specialization",
      platform: "Coursera",
      date: "2023",
      link: "https://coursera.org/verify/specialization/ML"
    },
    {
      name: "Full Stack Development",
      platform: "freeCodeCamp",
      date: "2023",
      link: "https://freecodecamp.org/certification/user/full-stack"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with CV Download */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold mb-4 md:mb-0">Education & Skills</h1>
            <a
              href="/assets/resumeCV.pdf"
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Download className="h-5 w-5 mr-2" />
              Download CV
            </a>
          </div>

          {/* Education Timeline */}
          <div className="mb-16 animate-slide-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-8 text-gray-800 dark:text-gray-300">Academic Journey</h2>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg mb-6 hover:shadow-xl transition transform hover:scale-105"
              >
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{edu.degree}</h3>
                  <span className="text-gray-600 dark:text-gray-400">{edu.duration}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-300">Courses Taken</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition transform hover:scale-105"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 mb-2">{cert.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.platform} • {cert.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
