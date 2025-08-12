'use client';

import {
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaLaravel,
  FaFigma,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaVuejs,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiCockroachlabs,
  SiPrisma,
  SiVite,
  SiVercel,
  SiFramer,
} from 'react-icons/si';

const skills = [
  { name: 'ReactJS', icon: <FaReact />, iconColor: 'text-cyan-400' },
  { name: 'TypeScript', icon: <SiTypescript />, iconColor: 'text-blue-600' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, iconColor: 'text-teal-400' },
  { name: 'HTML', icon: <FaHtml5 />, iconColor: 'text-orange-500' },
  { name: 'CSS', icon: <FaCss3 />, iconColor: 'text-blue-500' },
  { name: 'JavaScript', icon: <FaJs />, iconColor: 'text-yellow-500' },
  { name: 'PHP', icon: <FaPhp />, iconColor: 'text-blue-600' },
  { name: 'NodeJS', icon: <FaNodeJs />, iconColor: 'text-green-600' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, iconColor: 'text-indigo-600' },
  { name: 'MySQL', icon: <SiMysql />, iconColor: 'text-blue-700' },
  {
    name: 'CockroachDB',
    icon: <SiCockroachlabs />,
    iconColor: 'text-purple-700',
  },
  { name: 'MongoDB', icon: <SiMongodb />, iconColor: 'text-green-500' },
  { name: 'Prisma', icon: <SiPrisma />, iconColor: 'text-gray-200' },
  { name: 'Vite', icon: <SiVite />, iconColor: 'text-purple-600' },
  { name: 'NextJS', icon: <SiNextdotjs />, iconColor: 'text-white' },
  { name: 'Laravel', icon: <FaLaravel />, iconColor: 'text-red-500' },
  { name: 'VueJS', icon: <FaVuejs />, iconColor: 'text-green-500' },
  { name: 'Git', icon: <FaGit />, iconColor: 'text-orange-500' },
  { name: 'GitHub', icon: <FaGithub />, iconColor: 'text-white' },
  { name: 'Vercel', icon: <SiVercel />, iconColor: 'text-white' },
  { name: 'Motion', icon: <SiFramer />, iconColor: 'text-pink-600' },
  { name: 'Figma', icon: <FaFigma />, iconColor: 'text-pink-500' },
];

export default function SkillsSection() {
  return (
    <section className="bg-gradient-to-t from-purple-900/50 via-white to-white dark:from-fuchsia-600/20 dark:via-black dark:to-black dark:bg-gradient-to-t min-h-screen flex flex-col justify-center items-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="uppercase text-sm text-gray-600 dark:text-gray-400 mb-2 tracking-widest">
          PARA DESARROLLAR
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Mis{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-900 to-fuchsia-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-t dark:from-purple-700 dark:to-fuchsia-400">
            Herramientas
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map(skill => (
            <div
              key={skill.name}
              className="flex items-center gap-2 px-4 py-5 bg-neutral-900 text-white rounded-lg border border-neutral-700 hover:border-fuchsia-500 transition duration-200"
            >
              <span className={`text-lg ${skill.iconColor}`}>{skill.icon}</span>
              <span className="text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
