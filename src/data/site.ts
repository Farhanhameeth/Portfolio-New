// Everything personal on the site is read from the JSON files in ./content.
// Edit them through the CMS at /admin (or by hand) — this file only gives them types.

import profile from './content/profile.json';
import experienceData from './content/experience.json';
import educationData from './content/education.json';
import certData from './content/certifications.json';
import skillsData from './content/skills.json';
import storyData from './content/story.json';

export type SkillGroup = 'Backend' | 'Frontend' | 'Data & AI' | 'Cloud & Tools';

interface Link { label: string; handle: string; href: string }
interface Fact { k: string; v: string }
interface Role { title: string; period: string; points: string[] }
interface Job { company: string; place: string; roles: Role[] }
interface Education { title: string; place: string; note: string; period: string }
interface Certificate { name: string; issuer: string; date?: string; url?: string }
interface Course { name: string; date: string; url: string }
interface Specialization { name: string; issuer: string; instructor: string; note: string; courses: Course[] }
interface Skill { name: string; group: SkillGroup }
interface Milestone { year: string; title: string; body: string }
interface Language { name: string; native: string }

const { socials: socialLinks, heroVerbs: verbs, facts: factList, ...basics } = profile;

export const site = basics as {
  name: string; first: string; last: string; role: string; company: string; title: string;
  description: string; location: string; timezone: string; email: string; availability: string;
  /** Drop a file at public/cv.pdf and a "Download CV" button appears automatically. */
  cvPath: string;
};

export const socials: Link[] = socialLinks;
export const heroVerbs: string[] = verbs;
export const facts: Fact[] = factList;

export const experience: Job[] = experienceData.jobs;
export const education: Education[] = educationData.items;
export const mlSpecialization: Specialization = certData.mlSpecialization;
export const certifications: Certificate[] = certData.items;

export const stack: string[] = skillsData.stack;
export const skills: Skill[] = skillsData.skills as Skill[];
export const concepts: string[] = skillsData.concepts;

export const timeline: Milestone[] = storyData.timeline;
export const languages: Language[] = storyData.languages;
export const strengths: string[] = storyData.strengths;

// Site structure, not content, so it stays in code.
export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];
