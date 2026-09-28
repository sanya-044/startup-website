import React from 'react';
const technologies = [
  'Node.js', 'Express.js', 'REST APIs', 'Microservices', 'MongoDB', 'MySQL', 'Prisma', 'Redis',
  'Docker', 'Postman', 'Git', 'GitHub', 'GitHub Actions', 'Vercel', 'Render', 'Angular', 'HTML',
  'CSS', 'Bootstrap', 'Python', 'JavaScript / TypeScript', 'Backend Development', 'API Development',
  'CRUD Operations', 'System Design (LLD)'
];
export default function TechStack() {
  return <section className="py-20 border-b section-rule tech-section scroll-reveal"><div className="max-w-7xl mx-auto px-5"><p className="mono-label mb-7">[ Technologies & capabilities ]</p><div className="tech-marquee">{[...technologies, ...technologies].map((tech, index) => <span key={`${tech}-${index}`}><i />{tech}</span>)}</div></div></section>;
}
