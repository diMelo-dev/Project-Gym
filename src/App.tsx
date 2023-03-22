import { Activities } from "./Components/Activities";
import { Banner } from "./Components/Banner";
import { Contact } from "./Components/Contact";
import { Footer } from "./Components/Footer";
import { Gym } from "./Components/Gym";
import { Pricing } from "./Components/Pricing";
import { Testimonials } from "./Components/Testimonials";


function App() {

  return (
    <div className="min-h-screen font-poppins">
      <Banner />
      
      <Activities />

      <Testimonials />

      <Gym />

      <Pricing />

      <Contact />

      <Footer />
      
    </div>
  )
}

export default App
