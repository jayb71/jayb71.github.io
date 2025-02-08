import React, { useState } from 'react';
import { Folder } from "lucide-react";
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const projects = [
    { 
      title: 'IISER Bhopal Library APP', 
      description: 'Android application for Central Library IISER Bhopal',
      technologies: ['Flutter'],
      features: [
        'Access to library catalog and resources',
      ],
      link: ''
    },
    {
      title: 'Vehicle Entry Management APP',
      description: 'Android application to record entries of vehicles directly by scanning the number plate',
      technologies: ['Flutter', 'Python', 'OpenCV', 'Flask', 'Supabase'],
      features: [
        'Add vehicle entry or exit directly to database just by scanning the Number Plate',
        'Secure Authentication only for certain security personnel',
      ],
      link: ''
    },
    {
      "title": "Employee Management App",
      "description": "A cross-platform application for managing employee attendance.",
      "technologies": ["Flutter", "Firebase"],
      "features": [
        "Records attendance entries",
        "Displays a list of employees whose exit hasn't been marked by the end of the day",
        "Allows viewing records seperately by employee or date"
      ],
      link: ''
    },    
    {
      title: 'Android APP to manage IOT Device',
      description: 'Android APP to manage sprayer based upon IOT',
      technologies: ['Flutter', 'Firebase', 'Flask'],
      features: [
        'Track Real-Time location and contents data of the sprayer',
        'Carry-out spray remotely',
        'Make a report of the spray',
        'Secure authentication',
      ],
      link: ''
    },
    { 
      title: 'Expense Manager', 
      description: 'Android application to manage personal expenses',
      technologies: ['Flutter', 'Supabase'],
      features: [
        'Add, edit, and delete transactions',
        'View transaction history',
        'Secure authentication'
      ],
      link: ''
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Responsive design',
        'Custom animations'
      ],
      link: 'https://jayb71.github.io'
    }
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const contentVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div id='projects' className="dark:bg-black flex-1 min-h-screen flex flex-col p-6">
      <div className="flex justify-center mb-12">
        <h1 className="text-4xl font-bold text-center dark:text-white">
          My Projects
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto w-full">

        {/* Projects List */}
        <div className="w-full md:w-1/3">
          <div className="h-[200px] md:h-[600px] overflow-x-auto md:overflow-y-auto fancy-scrollbar rounded-md border dark:border-gray-800">
            <div className="p-4 space-x-4 flex md:flex-col gap-4 md:space-x-0">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`rounded-lg shadow-md cursor-pointer transition-all duration-300 hover:scale-[1.05] ${
                    selectedProject.title === project.title 
                      ? 'dark:bg-gray-800 bg-gray-100' 
                      : 'dark:bg-gray-900'
                  }`}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="p-4">
                    <h3 className="font-semibold dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="w-full md:w-2/3">
          <motion.div
            key={selectedProject.title}
            className="max-h-screen md:h-[600px] rounded-lg shadow-md dark:bg-gray-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6">
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={contentVariants}
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className="w-8 h-8 dark:text-white"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Folder />
                  </motion.div>
                  <motion.h2
                    className="text-2xl font-bold dark:text-white"
                    variants={itemVariants}
                  >
                    {selectedProject.title}
                  </motion.h2>
                </div>

                <div className="space-y-6">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold dark:text-white mb-2">
                      Description
                    </h3>
                    <p className="dark:text-gray-300">
                      {selectedProject.description}
                    </p>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold dark:text-white mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1 bg-blue-100 dark:bg-[#FBCF84] text-blue-800 dark:text-black rounded-full text-sm"
                          variants={itemVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <h3 className="text-lg font-semibold dark:text-white mb-2">
                      Key Features
                    </h3>
                    <ul className="list-disc list-inside dark:text-gray-300 space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </motion.div>

                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                      View Project
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
