import React from 'react';
import './SkillsSection.css';
import SkillsWithLottie from './SkillsWithLottie'; // Import the new component

const SkillsSection: React.FC = () => {
const skills = [
  { title: 'Flutter', description: 'Experienced in building cross-platform mobile applications using Flutter.' },
  { title: 'Android Studio', description: 'Experienced in developing native android apps in Android Studio using JAVA' },
  { title: 'Python', description: 'Proficient in Python for scripting, automation, and data analysis.' },
  { title: 'Web Development', description: 'Experienced in building responsive and accessible web applications.' },
  { title: 'Adobe Photoshop', description: 'Experienced in designing and editing images using Adobe Photoshop.' },
  { title: 'Git', description: 'Experienced in version control using Git and platforms like GitHub and GitLab.' },
  { title: 'Firebase', description: 'Experienced in integrating Firebase services like Firestore, Authentication, and Cloud Functions.' },
  { title: 'RESTful APIs', description: 'Experienced in building and consuming RESTful APIs for web and mobile applications.' },
  // { title: 'HTML', description: 'Strong understanding of semantic HTML5 and accessibility best practices.' },
  // { title: 'CSS', description: 'Proficient in CSS3, Flexbox, Grid, and pre-processors like SASS.' },
  // { title: 'JavaScript', description: 'Experienced in ES6+, TypeScript, and modern frameworks like React.' },
  // { title: 'React', description: 'Experienced in building scalable and maintainable web applications using React.' },
];

  return (
    <div className="dark:bg-black flex-1 min-h-screen flex flex-col">
      <div className="flex justify-center">
        <h1 className="text-4xl font-bold text-center dark:text-white mt-10">Skills & Proficiency</h1>
      </div>
      
      <SkillsWithLottie skills={skills} />
    </div>
  );
};

export default SkillsSection;
