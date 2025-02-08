import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import PreLoader from './components/preloader/PreLoader';
import HomeScreen from './components/HomeScreen/HomeScreen';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import AboutMe from './components/AboutMe/AboutMe';

const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3-second delay

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);


  return (
    <>
     {(loading) ? <PreLoader /> :
     <div className='min-h-screen flex flex-col '> <NavBar /> 
     <HomeScreen />
     <AboutMe />
      <ProjectsSection />
      <SkillsSection />
     </div>}
    </>
  )
}

export default App
