import './App.css'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import Services from './Components/Services'
import HowToStart from './Components/HowToStart'
function App() {

  return (
    <>
    <div className='main-container'>
        <Navbar/>
        <Home/>
        <Services/>
        <HowToStart/>
    </div>

    </>
  )
}

export default App
