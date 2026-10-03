// Single source of truth for everything personal on the site.
// Edit this file to update your details everywhere at once.

export const site = {
  name: 'Farhan Hameeth',
  first: 'Farhan',
  last: 'Hameeth',
  role: 'Associate Software Engineer',
  company: 'Innovation Quotient',
  title: 'Farhan Hameeth — Software Engineer',
  description:
    'Farhan Hameeth is an Associate Software Engineer at Innovation Quotient in Colombo, Sri Lanka, building full-stack products with .NET Core, React, Next.js and Azure — and a final-year Computer Science undergraduate at IIT (University of Westminster).',
  location: 'Colombo, Sri Lanka',
  timezone: 'Asia/Colombo',
  email: 'farhanhameeth1@gmail.com',
  availability: 'Open to interesting projects & collaborations',
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
// Words that cycle in the hero: "I build ___"
export const heroVerbs = [
  'scalable .NET Core APIs',
  'React & Next.js front-ends',
  'health-tech platforms',
  'streaming experiences',
  'cloud-ready systems on Azure',
  'explainable ML systems',
];

export const stack = [
  'C#', '.NET Core', 'ASP.NET Web API', 'Entity Framework', 'React', 'Next.js', 'TypeScript', 'Node.js',
  'Azure', 'AWS', 'MSSQL', 'PostgreSQL', 'Strapi', 'Tailwind CSS', 'Python', 'TensorFlow', 'Java', 'Spring Boot',
];

export type SkillGroup = 'Backend' | 'Frontend' | 'Data & AI' | 'Cloud & Tools';
export const skills: { name: string; group: SkillGroup }[] = [
  { name: 'C#', group: 'Backend' },
  { name: '.NET Core', group: 'Backend' },
  { name: 'ASP.NET Web API', group: 'Backend' },
  { name: 'EF Core', group: 'Backend' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Spring Boot', group: 'Backend' },
  { name: 'Java', group: 'Backend' },
  { name: 'React', group: 'Frontend' },
  { name: 'Next.js', group: 'Frontend' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'Tailwind', group: 'Frontend' },
  { name: 'Flutter', group: 'Frontend' },
  { name: 'PyTorch', group: 'Data & AI' },
  { name: 'SHAP', group: 'Data & AI' },
  { name: 'FastAPI', group: 'Backend' },
  { name: 'MSSQL', group: 'Data & AI' },
  { name: 'PostgreSQL', group: 'Data & AI' },
  { name: 'MySQL', group: 'Data & AI' },
  { name: 'Python', group: 'Data & AI' },
  { name: 'TensorFlow', group: 'Data & AI' },
  { name: 'scikit-learn', group: 'Data & AI' },
  { name: 'Azure', group: 'Cloud & Tools' },
  { name: 'AWS', group: 'Cloud & Tools' },
  { name: 'Azure DevOps', group: 'Cloud & Tools' },
  { name: 'CI/CD', group: 'Cloud & Tools' },
  { name: 'Strapi', group: 'Cloud & Tools' },
  { name: 'Git', group: 'Cloud & Tools' },
];

export const concepts = ['Clean Architecture', 'Domain-Driven Design', 'RESTful APIs', 'System design', 'Agile', 'Explainable AI (XAI)', 'Imbalanced learning'];

// Work history, newest first.
export const experience = [
  {
    company: 'Innovation Quotient (Pvt) Ltd',
    place: 'Colombo, Sri Lanka',
    roles: [
      {
        title: 'Associate Software Engineer',
        period: 'Jan 2026 — Present',
        points: [
          'Engineer scalable, maintainable and testable solutions guided by clean architecture and clean-code practices.',
          'Deploy, monitor and optimise enterprise applications on Azure, AWS and Orel Cloud.',
          'Design RESTful APIs, database schemas and modular components; contribute to system-design discussions.',
          'Review code, debug, refactor and troubleshoot production issues with performance optimisations.',
          'Work across CI/CD pipelines, version control and agile delivery with cross-functional teams.',
        ],
      },
      {
        title: 'Software Engineer Intern',
        period: 'May 2025 — Dec 2025',
        points: [
          'Helped design and implement secure APIs and database structures for client projects.',
          'Built front-end modules for an HR information system (HRIS) in React and Redux.',
          'Broke complex problems into manageable tasks in an agile team; took part in code reviews and daily stand-ups.',
        ],
      },
    ],
  },
];

export const education = [
  {
    title: 'BSc (Hons) Computer Science — final year',
    place: 'Informatics Institute of Technology (IIT)',
    note: 'Affiliated with the University of Westminster, UK',
    period: 'Sep 2023 — Present',
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

export const certifications = [
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI & Stanford', note: 'Coursera · Andrew Ng — supervised learning, advanced learning algorithms (neural networks, decision trees) and unsupervised learning with Python, TensorFlow and scikit-learn' },
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
  { year: '2023', title: 'Started Computer Science at IIT', body: 'BSc (Hons) at the Informatics Institute of Technology, affiliated with the University of Westminster.' },
  { year: '2024', title: 'Shipped my first systems', body: 'Library and Inventory Management Systems in Java, JavaFX and MySQL — where OOP and layered architecture finally clicked. Six University of Moratuwa certificates and five HackerRank badges along the way.' },
  { year: '2025', title: 'Software Engineer Intern at Innovation Quotient', body: 'Joined IQ in May. Secure APIs, database design and React front-ends for client projects — including an HR information system.' },
  { year: '2026', title: 'Associate Software Engineer', body: 'Promoted in January. Now building health-tech, OTT streaming and logistics platforms with .NET Core, React, Next.js and Azure — while building HelioGuard, my final-year research project on explainable solar-flare forecasting. Also revamping the HDO website as a freelance project.' },
];

export const facts = [
  { k: 'Currently', v: 'Associate Software Engineer @ Innovation Quotient' },
  { k: 'Studying', v: 'Final-year BSc (Hons) CS — IIT / Westminster' },
  { k: 'Researching', v: 'HelioGuard — explainable solar-flare forecasting' },
  { k: 'Speaks', v: 'English, Sinhala & Malay' },
  { k: 'Based in', v: 'Colombo, Sri Lanka (UTC+5:30)' },
];
