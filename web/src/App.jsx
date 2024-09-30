import './App.css'
import AboutUs from './components/AboutUs'
import { CarouselImages } from './components/CarouselImages'
import NavBar from './components/NavBar'

function App() {

  return (
      <div className="container">
        <NavBar></NavBar>
        <CarouselImages></CarouselImages>
        <AboutUs></AboutUs>
      </div>
    
  )
}

export default App
