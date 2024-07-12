
import './App.css'
import profilepic from './assets/shawn.jpg'
import sunpic from './assets/sun.svg'
import moonpic from './assets/moon.svg'
import githublight from './assets/github-light.svg'
import twitterlight from './assets/twitter-light.svg'
import linkedinlight from './assets/linkedin-light.svg'
import resume from './assets/shawnMonteiro.pdf'
import Projects from './components/Projects.jsx'

import twitterdark from './assets/twitter-dark.svg';
import githubdark from './assets/github-dark.svg';
import linkedindark from './assets/linkedin-dark.svg';

import {useTheme} from './components/ThemeContext.jsx'

function App() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sunpic : moonpic;
  const twitterIcon = theme === 'light' ? twitterlight : twitterdark;
  const githubIcon = theme === 'light' ? githublight : githubdark;
  const linkedinIcon = theme === 'light' ? linkedinlight : linkedindark;


  return (
    <>
    <div className="font-space-grotesk">
      <div className="flex  align-bottom  justify-center mt-12" >
        <img src={profilepic} className="rounded-full  object-cover w-64 h-64  " alt="profile picture of shawn monteiro"/>
        <img src={themeIcon} onClick={toggleTheme} className="w-6 h-12 " alt="light/dark"/>
      </div>
      <div className="mt-6">
      <h1 className="flex justify-center text-3xl ">Shawn Monteiro</h1>
      <h2 className="flex justify-center ">Aspiring Software developer</h2>
      <div className="flex justify-center gap-4 mt-4">
      <span className="w-12">
        <a href="https://github.com/shawnmont772004"><img src={githubIcon} alt="githubicon"/></a>
      </span>
      <span className="w-12">
        <a href="https://www.linkedin.com/in/monteiroshawn/"><img src={linkedinIcon} alt="linkedinicon"/></a>
      </span>
      <span className="w-12">
        <a href="https://x.com/ShawnMonteiro2"><img src={twitterIcon} alt="tweeticon"/></a>
      </span>
      </div>
      <div className="flex justify-center mt-4 px-4 sm:px-0">
        <p className="text-center">
          To explore the world of software development in its bits
        </p>
      </div>

      <div className="mt-4 flex justify-center items-center">
      <a href={resume} download><button onClick={()=>{alert("Downloading resume'...")}} className="  p-3 rounded-md border-grey bg-black text-white border-2 font-semibold">Resume'</button></a>
      </div>
      <a href={resume} download>
      </a>

      <div className="">
      <Projects />
      </div>

      
    </div>

    </div>
    
    </>

  )
}

export default App
