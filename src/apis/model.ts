export interface Profile {
  mission: string[];
  humanLangs: RankedItem[];
  maschineLangs: RankedItem[];
  specialities: RankedItem[];
  interests: RankedItem[];
  formalEducation: Experience[];
  workExperience: Experience[];
  projects: Experience[];
  contactInfo: ContactPoint[];
}

export interface RankedItem {
  type: string;
  priority: number;
}

export interface Experience {
  id: number;
  start: Time;
  end: Time;
  company?: string;
  position: string;
  desc: string[];
  location: string;
  link?: string;
}

export interface ContactPoint {
  title: string;
  priority: number;
  href: string | null;
}

export interface Time {
  year: number;
  month: number;
}
