export interface Project {
  id: string;
  title: string;
  category: 'Platform' | 'Web App' | 'Developer Tool' | 'Service';
  description: string;
  longDescription?: string;
  liveUrl: string;
  githubUrl?: string;
  tags: string[];
  features: string[];
  metrics?: string;
  featured?: boolean;
}

export interface OpenSourcePackage {
  id: string;
  name: string;
  npmCommand: string;
  description: string;
  version: string;
  features: string[];
  tags: string[];
  interactiveDemoType: 'ascii' | 'encoder' | 'db';
  npmUrl?: string;
  githubUrl?: string;
}

export interface ExperienceRole {
  role: string;
  company: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
  technologies: string[];
  achievements: string[];
}

export interface BankingProject {
  id: string;
  title: string;
  client: string;
  type: string;
  description: string;
  architectureHighlights: string[];
  securityAndScale: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface EducationInfo {
  degree: string;
  field: string;
  institution: string;
  period: string;
  grade: string;
  highlights: string[];
}
