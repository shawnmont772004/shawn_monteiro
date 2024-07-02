
import './App.css'
import profilepic from './assets/shawn.jpg'
import sunpic from './assets/sun.svg'
import githubIcon from './assets/github-light.svg'
function App() {

  return (
    <>
    <div className="font-space-grotesk">
      <div>
        <img src={profilepic} className="rounded-full  object-cover w-64 h-64" alt="profile picture of shawn monteiro"/>
        <img src={sunpic} className="rounded " alt="profile picture of shawn monteiro"/>
      </div>
      <div>
      <h1 className="text-3xl">Shawn<br/>Monteiro</h1>
      <h2>Aspiring Software developer</h2>
      <span>
        <a href="https://github.com/shawnmont772004"><img src={githubIcon} alt="githubicon"/></a>
      </span>
    </div>
    </div>
    
    </>

  )
}

export default App
