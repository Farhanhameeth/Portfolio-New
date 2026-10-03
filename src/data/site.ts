// Single source of truth for everything personal on the site.
// Edit this file to update your details everywhere at once.

export const site = {
  name: 'Farhan Hameeth',
  first: 'Farhan',
  last: 'Hameeth',
  role: 'Full-Stack Developer',
  title: 'Farhan Hameeth — Full-Stack Developer',
  description:
    'Farhan Hameeth is a full-stack developer and Computer Science undergraduate at IIT (University of Westminster) in Colombo, Sri Lanka, building with Java, Spring Boot, React and Python.',
  location: 'Colombo, Sri Lanka',
  timezone: 'Asia/Colombo',
  email: 'farhanhameeth1@gmail.com',
  availability: 'Open to internships & freelance work',
  // Drop a file at public/cv.pdf and a "Download CV" button appears automatically.
  cvPath: '/cv.pdf',
};

export const socials = [
  { label: 'GitHub', handle: '@Farhanhameeth', href: 'https://github.com/Farhanhameeth' },
  { label: 'LinkedIn', handle: 'in/farhan-hameeth', href: 'https://www.linkedin.com/in/farhan-hameeth/' },
  { label: 'Instagram', handle: '@farhanhameeth', href: 'https://www.instagram.com/farhanhameeth/' },
  { label: 'Facebook', handle: 'farhan.hameeth', href: 'https://www.facebook.com/farhan.hameeth' },
];

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// Words that cycle in the hero: "I build ___"
export const heroVerbs = [
  'full-stack web apps',
  'Spring Boot APIs',
  'React interfaces',
  'HR analytics dashboards',
  'JavaFX desktop tools',
  'things people use',
];

export const stack = [
  'Java', 'Spring Boot', 'React', 'TypeScript', 'JavaScript', 'Python', 'FastAPI',
  'MySQL', 'Tailwind CSS', 'JavaFX', 'Redux', 'HTML', 'CSS', 'Git', 'Vite', 'REST',
];

export type SkillGroup = 'Backend' | 'Frontend' | 'Data' | 'Tools';
export const skills: { name: string; group: SkillGroup; level: number }[] = [
  { name: 'Java', group: 'Backend', level: 4 },
  { name: 'Spring Boot', group: 'Backend', level: 3 },
  { name: 'Python', group: 'Backend', level: 3 },
  { name: 'FastAPI', group: 'Backend', level: 3 },
  { name: 'JavaFX', group: 'Backend', level: 3 },
  { name: 'React', group: 'Frontend', level: 3 },
  { name: 'JavaScript', group: 'Frontend', level: 3 },
  { name: 'TypeScript', group: 'Frontend', level: 2 },
  { name: 'HTML', group: 'Frontend', level: 4 },
  { name: 'CSS', group: 'Frontend', level: 4 },
  { name: 'Tailwind', group: 'Frontend', level: 3 },
  { name: 'Redux', group: 'Frontend', level: 2 },
  { name: 'MySQL', group: 'Data', level: 4 },
  { name: 'SQL', group: 'Data', level: 4 },
  { name: 'Git', group: 'Tools', level: 3 },
  { name: 'Vite', group: 'Tools', level: 3 },
];

export const education = [
  {
    title: 'BSc (Hons) Computer Science',
    place: 'Informatics Institute of Technology (IIT)',
    note: 'Affiliated with the University of Westminster, UK',
    period: 'Sep 2023 — Present',
  },
  {
    title: 'Full Stack Developer Programme',
    place: 'University of Moratuwa',
    note: 'Delivered with DP Education',
    period: 'Completed',
  },
  {
    title: 'GCE Advanced Level — Physical Science',
    place: "St. Benedict's College, Colombo 13",
    note: '',
    period: '2019 — 2022',
  },
  {
    title: 'GCE Ordinary Level',
    place: 'Asian Grammar School, Gothatuwa',
    note: '',
    period: '2009 — 2018',
  },
];

// Year-one university results (out of 100). Edit or extend as new results come in.
export const grades = [
  { module: 'Computer Systems Fundamentals', score: 90 },
  { module: 'Software Development II (Java)', score: 83 },
  { module: 'Web Design & Development', score: 82 },
  { module: 'Mathematics for Computing', score: 80 },
  { module: 'Software Development I (Python)', score: 73 },
];

export const certifications = [
  { name: 'Python for Beginners', issuer: 'University of Moratuwa' },
  { name: 'Python Programming', issuer: 'University of Moratuwa' },
  { name: 'Web Design for Beginners', issuer: 'University of Moratuwa' },
  { name: 'Front-End Web Development', issuer: 'University of Moratuwa' },
  { name: 'Server-side Web Programming', issuer: 'University of Moratuwa' },
  { name: 'Professional Practice in Software Development', issuer: 'University of Moratuwa' },
  { name: 'Java (Basic)', issuer: 'HackerRank' },
  { name: 'Java (Advanced)', issuer: 'HackerRank' },
  { name: 'SQL (Basic)', issuer: 'HackerRank' },
  { name: 'SQL (Intermediate)', issuer: 'HackerRank' },
  { name: 'SQL (Advanced)', issuer: 'HackerRank' },
];

export const languages = [
  { name: 'English', native: 'English' },
  { name: 'Sinhala', native: 'සිංහල' },
  { name: 'Malay', native: 'Bahasa Melayu' },
];

export const strengths = [
  'Leadership', 'Communication', 'Self-motivated', 'Team player',
  'Time management', 'Critical thinking', 'Creative problem solving',
];

// The story, oldest first. Shown as the interactive timeline on /about.
export const timeline = [
  { year: '2009', title: 'First day at Asian Grammar School', body: 'Nine years in Gothatuwa that ended with O/Ls — and a growing habit of taking things apart to see how they work.' },
  { year: '2018', title: 'Joined the Leo Club', body: 'Member of the Leo Club of Asian Grammar School — first taste of organising people and projects for the community.' },
  { year: '2019', title: "St. Benedict's College", body: 'A/Ls in the Physical Science stream: maths, physics and a lot of problem sets.' },
  { year: '2020', title: 'Leo Club of Kottawa Central Golden City', body: 'Continued community service with the Omega club through 2021, sharpening leadership and teamwork.' },
  { year: '2023', title: 'Started Computer Science at IIT', body: 'BSc (Hons) at the Informatics Institute of Technology, affiliated with the University of Westminster. Top first-year grade: 90 in Computer Systems Fundamentals.' },
  { year: '2024', title: 'Shipped my first Java systems', body: 'Built Library and Inventory Management Systems in Java, JavaFX and MySQL — layered architecture, OOP and real CRUD. Collected six University of Moratuwa certificates and five HackerRank badges along the way.' },
  { year: '2025', title: 'Going full-stack', body: 'React + Redux HRIS front-end, the MedDiary marketing site and a React/Spring Boot point-of-sale system.' },
  { year: '2026', title: 'PerformEdge', body: 'HR analytics and workforce-intelligence platform with a team: React + TypeScript on the front, FastAPI + MySQL on the back. And this site, rebuilt from scratch.' },
];

export const facts = [
  { k: 'Speaks', v: 'English, Sinhala & Malay' },
  { k: 'Based in', v: 'Colombo, Sri Lanka (UTC+5:30)' },
  { k: 'Top grade', v: '90 / 100 — Computer Systems Fundamentals' },
  { k: 'Certificates', v: '11 (UoM × 6, HackerRank × 5)' },
  { k: 'Off-screen', v: 'Leo Club volunteer since 2018' },
];
