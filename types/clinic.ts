export type ClinicService = {
  title: string;
  description: string;
};

export type ClinicTestimonial = {
  name: string;
  comment: string;
};

export type ClinicWorkingHour = {
  day: string;
  hours: string;
};

export type ClinicDemo = {
  slug: string;
  clinicName: string;
  doctorName: string;
  title: string;
  description: string;
  phone: string;
  whatsapp: string;
  email?: string;
  address: string;
  instagramUrl?: string;
  mapsUrl?: string;
  logo?: string;
  heroImage?: string;
  aboutImage?: string;
  doctorImage?: string;
  primaryColor: string;
  secondaryColor: string;
  services: ClinicService[];
  aboutText: string;
  doctorBiography: string;
  testimonials: ClinicTestimonial[];
  workingHours: ClinicWorkingHour[];
  seoTitle: string;
  seoDescription: string;
};
