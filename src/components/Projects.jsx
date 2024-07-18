import React from 'react';
import bimg from '../images/atm.jpeg'
import csimg from '../images/bankimg.jpg'
import docimg from '../images/doctor.jpeg'
import stupimg from '../images/startup.jpeg'
const projects = [
  {
    title: 'Bank management system',
    image: bimg,
    shortDescription: 'A mini atm that helps you in managing your account and carry transactions.',
    fullDescription: 'JAVA based application that registers users, generates ATM card numbers and PINs, and allows account selection, deposit & withdrawal functions. Also implement fast cash withdrawals maintains transaction history for user.Database MySQL along with JDBC to connect with JAVA program.',
    link: 'https://github.com/shawnmont772004/BMS'
  },
  {
    title: 'CupidStream',
    image: csimg,
    shortDescription: 'Long-Distance Video Chat with Synchronized YouTube Streaming',
    fullDescription: 'Created a WebRTC-powered app for long-distance video calls and synchronized YouTube streaming, employing React and Tailwind CSS. Integrated peer-to-peer video calls with unique ID sharing via email, supported by Socket.io and Node.js. Enabled seamless YouTube streaming during video calls, empowering users to switch videos effortlessly through a user-friendly interface',
    link: 'https://cupidstream.netlify.app/'
  },
  {
    title: 'Healthcare website',
    image: docimg,
    shortDescription: 'symtpom anlayzer cum diagnosis platform',
    fullDescription: 'Created a platform for medicine sales with a symptom analyzer with random questions to identify symptoms and connect users with specialized doctors. Designed and built the platform using HTML, CSS, JS, JQuery and MySQL.',
    link: 'https://github.com/shawnmont772004/Sjec-Hackathon'
  },
  {
    title: 'KickStart Up App',
    image: stupimg,
    shortDescription: 'A CrowdFunding Platform',
    fullDescription: 'Launched a crowdfunding e-commerce platform connecting startups with investors to driveinnovation. Utilized Vue.js, Firebase, QuillEditor API, and Tailwind CSS for seamless functionality and user experience.',
    link: 'https://main--monumental-arithmetic-0c4361.netlify.app/'
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto p-12 mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 mb-8 text-center">
        {projects.map((project, index) => (
          <a 
            key={index} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group border-black  rounded-md overflow-hidden"
          >
            <div className="flex flex-col items-center p-4 bg-white border-2 border-black  text-black rounded-md ">
              <img src={project.image} alt={project.title} className="w-64 h-64 md:w-1024 md:h-1024 object-cover mb-4 rounded-md" />
              <h2 className="text-xl text-black font-semibold">{project.title}</h2>
              <p className="m-2 text-black text-center">{project.shortDescription}</p>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-opacity-85 border-2 border-black transition-opacity duration-300 text-center">
                <p className="text-white p-4">{project.fullDescription}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
