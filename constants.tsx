import React from 'react';
import { Project, Skill, SocialLink } from './types';
import { 
  Github, Linkedin, Mail, 
  Code2, Terminal, Globe, Cpu, Database, Layout, 
  Server, Brain, Cloud, Smartphone, Bot, Zap, Search, Briefcase, GraduationCap
} from 'lucide-react';

export const HERO_CONTENT = {
  name: "Divya V",
  title: "Web Developer",
  tagline: "Building practical solutions with AI and software.",
  description: "I’m an engineer who builds practical solutions using AI and software development. I focus on creating systems that are clear, efficient, and genuinely useful.",
};

export const ABOUT_CONTENT = {
  bio: "I enjoy working on projects that push me to think differently, whether it is building scalable web applications, designing ML based IoT systems, or exploring reasoning tasks with Generative AI.\n\nMy experience comes from internships, hackathons, and engineering projects that taught me to learn fast and approach problems from different angles. I believe technology becomes meaningful when it is created with empathy, clarity, and a clear purpose.\n\nMy goal is to grow into an engineer who does more than write code, someone who builds solutions that are thoughtful, reliable, and truly impactful.",
  interests: ["Machine Learning Systems", "Generative AI & RAG", "Full Stack Web Development", "Robotics & Drones", "Japanese Language Learning"],
  philosophy: "Technology should simplify lives — not complicate them.",
};

export const EXPERIENCE = {
  education: {
    title: "B.E Computer Science and Engineering",
    institution: "KPR Institute of Engineering and Technology",
    year: "2020 - 2024"
  },
  internships: [
    {
      role: "Generative AI Intern",
      company: "Navigate Labs",
      duration: "Present"
    },
    {
      role: "Web Technology Intern",
      company: "Techvolt Software Pvt Ltd",
      duration: "Past"
    }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Garuda — AI Drone Surveillance',
    description: 'A real-time surveillance system utilizing YOLOv8 to detect weapons and unusual activity. Optimized for edge hardware to ensure low-latency alerts in resource-limited environments.',
    tags: ['YOLOv8', 'Python', 'Edge AI', 'Computer Vision'],
    githubUrl: 'https://github.com/DIVYA-V-K/Garuda---Drone-Surveillance-System',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'BuyNest',
    description: 'An AI-driven e-commerce platform featuring dynamic product catalogs, secure authentication, and a recommendation engine using collaborative filtering to personalize the shopping experience.',
    tags: ['PHP', 'MySQL', 'Tailwind', 'AI Recommendations'],
    githubUrl: 'https://github.com/DIVYA-V-K/BuyNest',
    image: 'https://images.unsplash.com/photo-1556740758-90de63f60718?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Mental Health Companion',
    description: 'A GenAI emotion assistant built for the PartyRock Hackathon. Analyzes user emotions to generate calming images and suggest personalized content using LLMs.',
    tags: ['GenAI', 'LLMs', 'Prompt Engineering', 'Hackathon'],
    githubUrl: 'https://github.com/DIVYA-V-K',
    liveUrl: 'https://partyrock.aws/u/itsdivya/_lpNhePDP/MindfulAI%253A-Multilingual-Emotional-Wellness-Companion',
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'Passive Solar Tracker',
    description: 'A sustainable engineering prototype using Shape Memory Alloys (SMA) to track sunlight mechanically based on temperature changes, requiring zero electronic power.',
    tags: ['SMA', 'Thermomechanics', 'Sustainable Tech', 'Prototype'],
    githubUrl: 'https://github.com/DIVYA-V-K',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
  }
];

export const SKILLS: Skill[] = [
  // Languages
  { name: 'Java', category: 'languages', icon: <Code2 size={16} /> },
  { name: 'Python', category: 'languages', icon: <Code2 size={16} /> },
  { name: 'JavaScript', category: 'languages', icon: <Code2 size={16} /> },
  { name: 'C', category: 'languages', icon: <Code2 size={16} /> },
  
  // Web & Backend
  { name: 'HTML5/CSS3', category: 'frontend', icon: <Layout size={16} /> },
  { name: 'Tailwind CSS', category: 'frontend', icon: <Layout size={16} /> },
  { name: 'PHP', category: 'backend', icon: <Server size={16} /> },
  { name: 'MySQL', category: 'backend', icon: <Database size={16} /> },
  
  // AI & ML
  { name: 'Scikit-learn', category: 'ai', icon: <Brain size={16} /> },
  { name: 'Pandas & NumPy', category: 'ai', icon: <Database size={16} /> },
  { name: 'YOLOv8', category: 'ai', icon: <Search size={16} /> },
  { name: 'LLMs & RAG', category: 'ai', icon: <Bot size={16} /> },
  
  // Tools & Cloud
  { name: 'AWS', category: 'cloud', icon: <Cloud size={16} /> },
  { name: 'Git / GitHub', category: 'tools', icon: <Github size={16} /> },
  { name: 'Android Studio', category: 'tools', icon: <Smartphone size={16} /> },
  { name: 'VS Code', category: 'tools', icon: <Terminal size={16} /> },
];

export const SOCIALS: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/DIVYA-V-K', icon: <Github size={20} /> },
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/divya-v-1b19b0259/', icon: <Linkedin size={20} /> },
  { platform: 'Email', url: 'mailto:divyavk067@gmail.com', icon: <Mail size={20} /> },
];