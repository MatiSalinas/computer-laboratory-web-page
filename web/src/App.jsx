import './App.css'
import AboutUs from './components/AboutUs'
import CarouselImages from './components/CarouselImages'
import NavBar from './components/NavBar'
import News from './components/News'

function App() {

  return (
      <div className="container">
        <NavBar></NavBar>
        <CarouselImages></CarouselImages>
        <AboutUs></AboutUs>
        <News></News>
      </div>
    
  )
}

export default App
