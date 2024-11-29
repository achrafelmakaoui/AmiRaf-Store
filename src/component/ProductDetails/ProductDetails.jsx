import React, { useState } from 'react'
import './ProductDetails.css';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1); 
    }
  };

  const [mainImage, setMainImage] = useState(
    "https://i.ibb.co/nz3pDMQ/air-jordan-1-black-men.png"
  );
  const [activeImage, setActiveImage] = useState(mainImage);

  const secondaryImages = [
    "https://i.ibb.co/nz3pDMQ/air-jordan-1-black-men.png",
    "https://i.ibb.co/5WqcsXL/7721e342-bd9b-45af-9836-72bf9d729b9e.png",
    "https://i.ibb.co/5Tdkg7R/test1.png",
    "https://i.ibb.co/NpkTCmh/252b6f0d-7871-48a3-8d7f-075fa30d7970.png",
    "https://i.ibb.co/t4FrmD5/34b64f8a-60fe-42d5-8724-ab5c303e62f5.png",
    "https://i.ibb.co/FW7J3Jt/6cc3b5d4-3a76-4226-86e0-7943716b4a1b.png",
  ];

  const handleImageClick = (image) => {
    setMainImage(image);
    setActiveImage(image);
  };

  return (
    <div className="ProductDetails">
        <div className="ProductDetails-wrapper">
            <div className="ProductDetails-images">
                <div className="ProductDetails-images-Thumbnail">
                    <div className='ProductDetails-MainImage'>
                        <img src={mainImage} alt="Main product"/>
                    </div>
                    <div className="ProductDetails-SecondaryImages">
                      {secondaryImages.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={activeImage === image ? "active" : ""}
                            onClick={() => handleImageClick(image)}
                          />
                      ))}
                    </div>
                </div>
            </div>
            <div className="ProductDetails-content">
                <span className="Product-stock">In stock</span>
                <h2 className='Product-title'>Air jordan 1 elevate low</h2>
                <p className="Product-description">Rise to the occasion in style that soars. This shoe reworks an icon's original magic with a platform sole and low-cut silhouette. Air cushioning keeps you lifted, and sleek leather in contrasting colours adds visual interest.</p>
                <div className="Product-price">
                    <div className="Product-price-dis">
                        <span className="Product-discounted-price">125.00 DH</span>
                        <span className="discount-discount">50%</span>
                    </div>
                    <p className="Product-Actual-price">250.00 DH</p>
                </div>
                <div className='stockSec'>
                    <span>Hurry! Only  <mark> 1 </mark>  Left in Stock!</span>
                    <div className='productInStock'>
                        <div className='productStillInStock'></div>
                    </div>
                </div>
                <hr/>
                <div className="Product-Quantity">
                    <input className="quantityValue" type='number' value={quantity} onChange={handleInputChange} min="1"/>
                    <button type="button" className="quantityBtn" onClick={() => handleQuantity("dec")} >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <button type="button" className="quantityBtn" onClick={() => handleQuantity("inc")} >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
                <div className="Product-Btns">
                    <button className="Product-add-cart" type="button">
                        Add to Cart
                    </button>
                    <button className="Product-OrderNow-btn" type="button">
                        Order Now
                    </button>
                </div>
                <div className='Livraison'>
                    <span>Livraison a Domicile dans les 48H Partout au Maroc !</span>
                    <div className='LienConditions'>
                        <Link to='/terms-and-conditions'><span>Conditions D'utilisation</span></Link>
                        <Link to='/confidentiality'><span>Politique de Confidentialité</span></Link>
                        <Link to='/how-to-pay'><span>Méthodes de payement</span></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails