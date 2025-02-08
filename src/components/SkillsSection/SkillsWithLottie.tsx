import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from './../../assets/lottie/lottie1.json';

import { animate, inView } from 'motion';

interface Skill {
  title: string;
  description: string;
}

interface SkillsWithLottieProps {
  skills: Skill[];
}

const SkillsWithLottie: React.FC<SkillsWithLottieProps> = ({ skills }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  // Determine where to place Lottie based on the number of skills
  const lottieIndex = skills.length <= 3 ? 2 : Math.floor(skills.length / 2);

  // Get the skills with Lottie in the correct spot
  const skillsWithLottie = [...skills];
  skillsWithLottie.splice(lottieIndex, 0, { title: 'Lottie Animation', description: '' });

  useEffect(() => {
    // Loop through all skill items and apply staggered animation
    skillsWithLottie.forEach((_, index) => {
      const element = document.querySelector(`#skill-${index}`);
      if (element) {
        // Trigger animation every time the element enters the viewport
        inView(element, () => {
          animate(element, 
            { opacity: 1, x: '-100%' }, // Fade in and move horizontally
            { duration: 1, delay: index * 0.2 } // Stagger the animation
          );
        });
      }
    });
  }, [skillsWithLottie]); // Dependency array ensures this runs once the component mounts

  return (
    <section id='skilllist' className='list'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 justify-center items-center p-3 list">
        {skillsWithLottie.map((skill, index) => (
          skill.title === 'Lottie Animation' ? (
            <div key={index}  className="justify-center items-center p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-1 hidden sm:block">
              <Lottie
                options={defaultOptions}
                height={300}
                width={300}
                isStopped={false}
                isPaused={false}
              />
            </div>
          ) : (
            <div
              key={index}
              id={`skill-${index}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md justify-center items-center list-item opacity-0 transform translate-x-[100%]" // Set initial opacity to 0 and translate right
              style={{ '--order': index } as React.CSSProperties}
            >
              <h2 className="text-xl font-semibold dark:text-white">{skill.title}</h2>
              <p className="mt-2 dark:text-gray-300 hidden sm:block">{skill.description}</p>
            </div>
          )
        ))}
      </div>
    </section>
  );
};

export default SkillsWithLottie;
