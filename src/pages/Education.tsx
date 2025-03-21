import React from 'react';
import { Download } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "National Institute of Technology Patna",
      duration: "2023 - 2027",
      // description: "CGPA: 8.54",
      courses: [
        // "Data Structures and Algorithms",
        // "Object-Oriented Programming",
        // "Database Management Systems",
        // "Computer Networks",
        // "Operating Systems",
        // "Web Development"
      ]
    },

    {
      degree: "12th/ Intermediate",
      institution: "Modern School",
      duration: "2022",
      // description: "Percentage: 87.77%",
      courses: [
      ]
    },

    {
      degree: "10th/ Matriculation",
      institution: "St. Karen's High School",
      duration: "2020",
      // description: "Percentage: 90.40%",
      courses: [
      ]
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
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header with CV Download */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
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
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-gray-800">Academic Journey</h2>
            {education.map((edu, index) => (
              <div key={index} className="bg-white rounded-xl p-5 shadow-lg mb-6 hover:shadow-xl transition">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <h3 className="text-xl font-bold text-blue-600">{edu.degree}</h3>
                  <span className="text-gray-600">{edu.duration}</span>
                </div>
                <p className="text-gray-700">{edu.institution}</p>
                {/* <p className="text-gray-600 mb-6">{edu.description}</p> */}
                {/* <h4 className="font-semibold mb-3">Key Courses:</h4> */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.courses.map((course, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Courses Taken</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.platform} • {cert.date}</p>
                  {/* <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
                  >
                    <span className="mr-2">View Certificate</span>
                    <ExternalLink className="h-4 w-4" />
                  </a> */}
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