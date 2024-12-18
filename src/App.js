import AboutUs from './components/AboutUs'
import Brands from './components/Brands'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Solutions from "./components/Solutions"
import Products from "./components/Products"
import FeaturedNews from './components/News'
import ContactForm from './components/Form'
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navbar />

      <Hero />

      <div class="relative z-10">
        <Brands />
      </div>

      <Solutions/>
      <AboutUs/>
      <Products/>
      <FeaturedNews/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App
