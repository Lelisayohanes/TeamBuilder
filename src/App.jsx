import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Services from './Components/Services'
import HowToStart from './Components/HowToStart'
import Expertice from './Components/Expertice'
function App() {

  return (
    <>
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <Services/>
        <HowToStart/> 
        <Expertice/>
    </div>

    </>
  )
}

export default App
