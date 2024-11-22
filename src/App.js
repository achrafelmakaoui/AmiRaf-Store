import { useEffect, useState } from "react";
import Intro from './component/Intro/Intro'
import Navbar from "./component/NavBar/NavBar";
import { ThemeProvider } from './ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Scrolltotop from "./Scrolltotop";
import ScrollToSection from "./ScrollToSection";
import HeroSection from "./component/HeroSection/HeroSection";
import Footer from "./component/Footer/Footer";
import WhatsAppIcon from "./component/WhatsAppIcon/WhatsAppIcon";
import ContactCards from "./component/Contact/ContactCards/ContactCards";
import ContactForm from "./component/Contact/ContactForm/ContactForm";
import ProgressCrads from "./component/ProgressCrads/ProgressCrads";
import TermOfUse from "./component/TermOfUse/TermOfUse";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import PaymentMethod from "./component/PaymentMethod/PaymentMethod";
import Products from "./component/Products/Products";

function App() {

  const [introComplete, setIntroComplete] = useState(false);
  useEffect(() => {
    const hasSeenIntro = localStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setIntroComplete(true);
    } else {
      const timeoutId = setTimeout(() => {
        setIntroComplete(true);
        localStorage.setItem('hasSeenIntro', 'true');
      }, 7000);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider>
        <ScrollToSection/>
        <Scrolltotop />
        {/* <Navbar/> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                {introComplete ? (
                  <>
                    <Navbar/>
                    <HeroSection/>
                    <Products/>
                    <ProgressCrads/>
                    <WhatsAppIcon/>
                    <Footer/>
                  </>
                ) : (
                  <>
                    {!introComplete && <Intro />}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                    <Navbar/>
                    <ContactCards/>
                    <ContactForm/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/terms-and-conditions"
            element={
              <>
                    <Navbar/>
                    <TermOfUse/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/confidentiality"
            element={
              <>
                    <Navbar/>
                    <PrivacyPolicy/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/how-to-pay"
            element={
              <>
                    <Navbar/>
                    <PaymentMethod/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
