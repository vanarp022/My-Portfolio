import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Virtual Interview Suite",
    description: "A next-gen coding interview hub, integrating live video calls, screen sharing, and a multi-language editor",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["WebDev", "NextJS", "React"],
    githubUrl: "https://github.com/guytesting85/virtual-interview-suite",
    liveUrl: "https://virtual-interview-suite.vercel.app/"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A website that showcases my projects and work, enabling companies and individuals to evaluate me accordingly.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    technologies: ["WebDev", "JS", "React"],
    githubUrl: "http://localhost:5173/",
    liveUrl: "http://localhost:5173/"
  },
];