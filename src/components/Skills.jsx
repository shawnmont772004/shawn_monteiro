import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaJava, FaPython, FaDocker, FaGit } from 'react-icons/fa';

const skills = [
  {
    name: 'HTML',
    icon: <FaHtml5 className="w-16 h-16" />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt className="w-16 h-16" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs className="w-16 h-16" />,
  },
  {
    name: 'React',
    icon: <FaReact className="w-16 h-16" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs className="w-16 h-16" />,
  },
  {
    name: 'Java',
    icon: <FaJava className="w-16 h-16" />,
  },
  {
    name: 'Python',
    icon: <FaPython className="w-16 h-16" />,
  },
  {
    name: 'Docker',
    icon: <FaDocker className="w-16 h-16" />,
  },
  {
    name: 'Github',
    icon: <FaGithub className="w-16 h-16" />,
  },
  {
    name: 'Git',
    icon: <FaGit className="w-12 h-16" />,
  },
 
];

const Skills = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold text-center ">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 p-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 rounded-md shadow-md hover:bg-cyan-200 transition-all duration-300"
          >
            <div className="text-cyan-600">{skill.icon}</div>
            <h3 className="mt-2 text-lg font-medium">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
