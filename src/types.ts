export interface Project {
  id: string;
  title: string;
  titleAr: string;
  category: 'visual' | 'technical' | 'sketch';
  subcategory: string;
  description: string;
  descriptionAr: string;
  imageUrl: string;
  tags: string[];
  dimensions?: string;
  materials?: string[];
  features?: string[];
  technicalDetails?: {
    scale?: string;
    drawnBy?: string;
    sheetNo?: string;
    date?: string;
    notes?: string[];
  };
}

export interface MaterialSample {
  id: string;
  name: string;
  nameAr: string;
  type: string;
  pantone?: string;
  hex: string;
  description: string;
  texturePattern: 'velvet' | 'walnut' | 'brass' | 'marble' | 'fluted-plaster';
}

export interface SkillCategory {
  id: string;
  title: string;
  titleAr: string;
  skills: { name: string; level: number; type: 'software' | 'analogue' }[];
}

export interface CareerMilestone {
  period: string;
  title: string;
  titleAr: string;
  institution: string;
  institutionAr: string;
  description: string;
  descriptionAr: string;
  type: 'education' | 'experience' | 'awards';
}
