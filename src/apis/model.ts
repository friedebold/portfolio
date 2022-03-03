export interface Profile {
  mission: string[];
  humanLangs: Language[];
  maschineLangs: Language[];
  specialities: Specialities[];
  interests: Interest[];
  formalEducation: Experience[];
  workExperience: Experience[];
  projects: Experience[];
  contactInfo: ContactPoint[];
}

export interface Language {
  lang: string;
  priority: number;
  /*   human: boolean; */
}

export interface Specialities {
  type: string;
  level: number;
  priority: number;
}

export interface Interest {
  type: string;
  priority: number;
}

export interface Experience {
  id: number;
  start: string;
  end: string | "today";
  company: string;
  position: string;
  desc: string[];
  location: string;
}

export interface ContactPoint {
  title: string;
  priority: number;
  href: string | null;
}

export interface Seperator {
  priority: number;
  title: string;
}

export interface Dimensions {
  height: number;
  width: number;
}

export type Device = "small" | "medium";

export const margin = 30;
export const borderRadius = 25;

export const colors = {
  red: "#ff443a",
  green: "#0CCE6B",
};

export interface ClientLocation {
  country: string;
  city: string;
  region: string;
  flag: string;
}

/* export interface PageView {
  timestamp: firebase.firestore.Timestamp;
  durationInS: number;
  location: ClientLocation;
  dimensions: Dimensions;
  viewed: ViewedItem[];
}

export type FireTimestamp = firebase.firestore.Timestamp;

export interface ViewedItem {
  item: string;
  timestamp: firebase.firestore.Timestamp;
} */

/* export interface Stamp {
  dimensions: {
    height: number;
    width: number;
  };
  timestamps: FireTimestamp[];
  viewed: ViewedItem[];
} */

/* export interface SimplifiedPageView {
  needsHeader: boolean;
  location: {
    country: string;
    region: string;
    city: string;
    flag: string;
  };
  stamps: Stamp[];
}
 */
