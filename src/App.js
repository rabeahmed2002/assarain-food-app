import AboutUs from './components/AboutUs'
import Brands from './components/Brands'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Solutions from './components/Solutions'
import Products from './components/Products'
import FeaturedNews from './components/News'
import ContactForm from './components/Form'
import Footer from './components/Footer'
import JoinOurTeam from './components/Team'
import VideoSection from './components/VideoSection'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Brands />
      <Solutions />
      <AboutUs />
      <Products />
      <VideoSection />
      <JoinOurTeam />
      <FeaturedNews />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
