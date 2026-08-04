export type TherapyArea = {
  title: string;
  description: string;
};

export type PsychologistTestimonial = {
  name: string;
  comment: string;
};

export type PsychologistWorkingHour = {
  day: string;
  hours: string;
};

export type PsychologistDemo = {
  slug: string;
  practiceName: string;
  psychologistName: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  email?: string;
  address: string;
  instagramUrl?: string;
  mapsUrl: string;
  logo?: string;
  heroImage?: string;
  officeImage?: string;
  profileImage?: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  therapyAreas: TherapyArea[];
  approachText: string;
  biography: string;
  testimonials: PsychologistTestimonial[];
  workingHours: PsychologistWorkingHour[];
  sessionTypes: string[];
  seoTitle: string;
  seoDescription: string;
};
