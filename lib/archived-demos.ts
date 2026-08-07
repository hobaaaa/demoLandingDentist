const archivedDentalDemoSlugs = new Set([
  "alp-dis",
  "mustafa-resul-basgun",
]);

const archivedPsychologistDemoSlugs = new Set(["nigda-durmaz"]);

export function isArchivedDentalDemo(slug: string): boolean {
  return archivedDentalDemoSlugs.has(slug);
}

export function isArchivedPsychologistDemo(slug: string): boolean {
  return archivedPsychologistDemoSlugs.has(slug);
}
