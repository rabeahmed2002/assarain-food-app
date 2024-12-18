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
    <div className="App" class="scroll-smooth">
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="brands">
        <Brands />
      </div>

      <div id="what-we-do">
        <Solutions />
      </div>

      <div id="about-us">
        <AboutUs />
      </div>

      <Products />
      <VideoSection />

      <div id="careers">
        <JoinOurTeam />
      </div>

      <div id="news">
        <FeaturedNews />
      </div>

      <div id="contact-us">
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}

export default App
