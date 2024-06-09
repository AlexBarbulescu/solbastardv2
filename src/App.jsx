import Banner from "./components/Banner"
import Header from "./components/Header"
import HowToBuy from "./components/HowToBuy"
import SiteMarquee from "./components/SiteMarquee"
import Tokenomics from "./components/Tokenomics"
import Faq from "./components/Faq"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import { useEffect } from "react"
import Aos from 'aos'
import SiteVideo from './components/SiteVideo'

export default function App() {
  useEffect(() => {
    Aos.init();
  })
  return (
    <>
      <Header />
      <Banner />
      <SiteMarquee />
      <SiteVideo />
      <HowToBuy />
      <Tokenomics />
      <Faq />
      <Cta />
      <Footer />
    </>
  )
}
