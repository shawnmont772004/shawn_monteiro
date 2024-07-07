
import './App.css'
import profilepic from './assets/shawn.jpg'
import sunpic from './assets/sun.svg'
import moonpic from './assets/moon.svg'
import githublight from './assets/github-light.svg'
import twitterlight from './assets/twitter-light.svg'
import linkedinlight from './assets/linkedin-light.svg'
import resume from './assets/shawnMonteiro.pdf'


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
      <div>
        <img src={profilepic} className="rounded-full  object-cover w-64 h-64" alt="profile picture of shawn monteiro"/>
        <img src={sunpic} onClick={toggleTheme} className="rounded " alt="profile picture of shawn monteiro"/>
        <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
      </div>
      <div>
      <h1 className="text-3xl">Shawn<br/>Monteiro</h1>
      <h2>Aspiring Software developer</h2>
      <span>
        <a href="https://github.com/shawnmont772004"><img src={githublight} alt="githubicon"/></a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/monteiroshawn/"><img src={linkedinlight} alt="linkedinicon"/></a>
      </span>
      <span>
        <a href="https://x.com/ShawnMonteiro2"><img src={twitterlight} alt="tweeticon"/></a>
      </span>
      <p>
        To explore the world of software developmeent in its bits
      </p>
      <a href={resume} download><button onClick={()=>{alert("Downloading resume'...")}} className=" bg-customYellow p-2 rounded-md border-black border-2">Resume'</button></a>
    </div>

    </div>
    
    </>

  )
}

export default App
