
import './App.css'
import profilepic from './assets/shawn.jpg'
import sunpic from './assets/sun.svg'
function App() {

  return (
    <>
    <h1 className="text-3xl font-space-grotesk">
    Dan</h1>
    
    <img src={profilepic} className="rounded-full object-cover w-64 h-64" alt="profile picture of shawn monteiro"/>
    <img src={sunpic} className="rounded" alt="profile picture of shawn monteiro"/>
    </>

  )
}

export default App
