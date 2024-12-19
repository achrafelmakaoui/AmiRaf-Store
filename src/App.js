import { useEffect, useState } from "react";
import Intro from './component/Intro/Intro'
import Navbar from "./component/NavBar/NavBar";
import { ThemeProvider } from './ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Scrolltotop from "./Scrolltotop";
import ScrollToSection from "./ScrollToSection";
import Footer from "./component/Footer/Footer";
import WhatsAppIcon from "./component/WhatsAppIcon/WhatsAppIcon";
import ContactCards from "./component/Contact/ContactCards/ContactCards";
import ContactForm from "./component/Contact/ContactForm/ContactForm";
import ProgressCrads from "./component/ProgressCrads/ProgressCrads";
import TermOfUse from "./component/TermOfUse/TermOfUse";
import PrivacyPolicy from "./component/PrivacyPolicy/PrivacyPolicy";
import PaymentMethod from "./component/PaymentMethod/PaymentMethod";
import Products from "./component/Products/Products";
import ProductsList from "./component/ProductsList/ProductsList";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Cart from "./component/Cart/Cart";
import MakeOrder from "./component/MakeOrder/MakeOrder";
import LandPage from "./component/LandingPage/LandPage";
import { getOrCreateUserId } from './userId';
import { CartProvider } from './CartContext';

function App() {
  const [userId, setUserId] = useState(null);
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

  useEffect(() => {
    const id = getOrCreateUserId();
    setUserId(id);
    console.log('User ID:', id);
  }, []);

  return (
    <div className="App">
      <CartProvider userId={userId}>
      <ThemeProvider>
        <ScrollToSection/>
        <Scrolltotop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {introComplete ? (
                  <>
                    <Navbar userId={userId}/>
                    <LandPage/>
                    <Products/>
                    <ProgressCrads/>
                    <WhatsAppIcon/>
                    <Footer/>
                  </>
                ) : (
                  <>
                    {!introComplete && <Intro/>}
                  </>
                )}
              </>
            }
          />
          <Route
            path="/Produits"
            element={
              <>
                  <Navbar userId={userId}/>
                  <ProductsList userId={userId}/>
                  <ProgressCrads/>
                  <WhatsAppIcon/>
                  <Footer/>
              </>
            }
          />
          <Route
            path="/DetailsProduits/:id"
            element={
              <>
                    <Navbar userId={userId}/>
                    <ProductDetails userId={userId}/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/Cart"
            element={
              <>
                    <Navbar userId={userId}/>
                    <Cart userId={userId}/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/checkout/confirmation"
            element={
              <>
                    <Navbar userId={userId}/>
                    <MakeOrder userId={userId}/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                    <Navbar userId={userId}/>
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
                    <Navbar userId={userId}/>
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
                    <Navbar userId={userId}/>
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
                    <Navbar userId={userId}/>
                    <PaymentMethod/>
                    <WhatsAppIcon/>
                    <Footer/>
              </>
            }
          />
        </Routes>
      </ThemeProvider>
      </CartProvider>
    </div>
  );
}

export default App;
