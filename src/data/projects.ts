import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Virtual Interview Suite",
    description: "A next-gen coding interview hub, integrating live video calls, screen sharing, and a multi-language editor",
    image: "../../assets/virtualInterviewSuite.png",
    technologies: ["WebDev", "NextJS", "React"],
    githubUrl: "https://github.com/guytesting85/virtual-interview-suite",
    liveUrl: "https://virtual-interview-suite.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A website that showcases my projects and work, enabling companies and individuals to evaluate me accordingly.",
    image: "../../assets/portfolioWebsite.png",
    technologies: ["WebDev", "JS", "React"],
    githubUrl: "http://localhost:5173/",
    liveUrl: "http://localhost:5173/"
  },
];