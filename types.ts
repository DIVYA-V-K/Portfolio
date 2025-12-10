import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'ai' | 'cloud';
  icon?: React.ReactNode;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}