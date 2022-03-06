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

/* export interface Dimensions {
  height: number;
  width: number;
}

export type Device = "small" | "medium";

export interface ClientLocation {
  country: string;
  city: string;
  region: string;
  flag: string;
} */

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
