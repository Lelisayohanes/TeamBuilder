import './App.css'
import Specilized from './Components/Specilized'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Services from './Components/Services'
import HowToStart from './Components/HowToStart'
import Expertice from './Components/Expertice'
import Technologies from './Components/Technologies'
function App() {

  return (
    <>
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <Services/>
        <HowToStart/> 
        <Expertice/>
        <Specilized/>
        <Technologies/>
    </div>

    </>
  )
}

export default App
