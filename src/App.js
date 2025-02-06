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
import { Helmet } from 'react-helmet-async';
import LogoBlack from './component/Images/AmiRaf_Black.webp'

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
                <Helmet>
                  <title>Amiraf - Boutique en ligne</title>
                  <meta name="description" content="Découvrez Amiraf, votre boutique en ligne avec paiement à la livraison, livraison rapide et garantie réelle. Achetez en toute confiance !" />
                  <link rel="canonical" href="https://www.amiraf.shop/" />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content="Amiraf - Votre boutique en ligne de confiance" />
                  <meta property="og:description" content="Commandez en ligne avec paiement à la livraison et profitez de nos offres exclusives sur Amiraf." />
                  <meta property="og:image" content={LogoBlack} />
                  <meta property="og:url" content="https://www.amiraf.shop/" />
                </Helmet>
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
                  <Helmet>
                    <title>Produits - Amiraf | Découvrez nos articles</title>
                    <meta name="description" content="Trouvez une large sélection de produits sur Amiraf. Profitez du paiement à la livraison et d'une garantie réelle !" />
                    <link rel="canonical" href="https://www.amiraf.shop/Produits" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Découvrez nos produits sur Amiraf" />
                    <meta property="og:description" content="Achetez en toute confiance avec paiement à la livraison et livraison rapide." />
                    <meta property="og:image" content={LogoBlack} />
                    <meta property="og:url" content="https://www.amiraf.shop/Produits" />
                  </Helmet>
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
                <Helmet>
                  <title>Produits - Amiraf | Découvrez nos articles</title>
                  <meta name="description" content="Trouvez une large sélection de produits sur Amiraf. Profitez du paiement à la livraison et d'une garantie réelle !" />
                  <link rel="canonical" href="https://www.amiraf.shop/DetailsProduits/:id" />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content="Découvrez nos produits sur Amiraf" />
                  <meta property="og:description" content="Achetez en toute confiance avec paiement à la livraison et livraison rapide." />
                  <meta property="og:image" content={LogoBlack} />
                  <meta property="og:url" content="https://www.amiraf.shop/DetailsProduits/:id" />
                </Helmet>
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
                <Helmet>
                  <title>Contactez-nous - Amiraf | Service Client & Assistance</title>
                  <meta name="description" content="Besoin d'aide ? Contactez Amiraf pour toute question sur nos produits, livraisons ou services." />
                  <link rel="canonical" href="https://www.amiraf.shop/contact" />
                  <meta property="og:type" content="website" />
                  <meta property="og:title" content="Contactez Amiraf - Service Client & Assistance" />
                  <meta property="og:description" content="Nous sommes à votre écoute pour toute question sur nos produits et services." />
                  <meta property="og:image" content={LogoBlack} />
                  <meta property="og:url" content="https://www.amiraf.shop/contact" />
                </Helmet>
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
