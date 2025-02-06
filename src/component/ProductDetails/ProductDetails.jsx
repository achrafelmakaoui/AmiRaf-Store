import React, { useEffect, useState } from 'react'
import './ProductDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../../CartContext';

const ProductDetails = ({ userId }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const BASE_URL = "http://localhost:5000";
  const navigate = useNavigate();
  const { updateCartCount } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product/find/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Failed to fetch product details:", err);
      }
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  const AddToCart = async (userId, productId, quantity) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart/", {
        userId,
        items: [{ productId, quantity }],
      });
      updateCartCount();
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data?.message || err.message);
    }
  };

  const OrderNow = async (userId, productId, quantity) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart/", {
        userId,
        items: [{ productId, quantity }],
      });
      updateCartCount();
      navigate('/checkout/confirmation');
    } catch (err) {
      console.error("Error adding to cart:", err.response?.data?.message || err.message);
    }
  };
  
  const handleQuantity = (type) => {
    if (type === "dec") {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    } else {
      if (quantity < product.quantity) { 
        setQuantity(quantity + 1);
      }
    }
  };
  
  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value > 0 && value <=  product.quantity) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const [mainImage, setMainImage] = useState("");
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    if (product.image1) {
      const initialImage = `${BASE_URL}${product.image1}`;
      setMainImage(initialImage);
      setActiveImage(initialImage);
    }
  }, [product]);


  const secondaryImages = [
    `${BASE_URL}${product.image1}`,
    `${BASE_URL}${product.image2}`,
    `${BASE_URL}${product.image3}`,
    `${BASE_URL}${product.image4}`,
    `${BASE_URL}${product.image5}`,
    `${BASE_URL}${product.image6}`,
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
                <span className="Product-stock" style={{backgroundColor: product.isInStock ? '#67ea97' : '#ff4d4f'}}>{product.isInStock ? 'En stock' : 'En rupture de stock'}</span>
                <h2 className='Product-title'>{product.title}</h2>
                <p className="Product-description">{product.description}</p>
                <div className="Product-price">
                    <div className="Product-price-dis">
                        <span className="Product-discounted-price">{product.new_price}.00 DH</span>
                        <span className="discount-discount">{product.discount_percentage}%</span>
                    </div>
                    <p className="Product-Actual-price">{product.old_price}.00 DH</p>
                </div>
                <div className='stockSec'>
                    <span>Dépêchez-vous ! Plus que<mark> {product.quantity} </mark>en stock !</span>
                    <div className='productInStock'>
                        <div className='productStillInStock'></div>
                    </div>
                </div>
                <hr/>
                <div className="Product-Quantity">
                    <input className="quantityValue" type='number' id='number' name='number' value={quantity} onChange={handleInputChange}/>
                    <button type="button" className="quantityBtn" onClick={() => handleQuantity("dec")} >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                    <button type="button" className="quantityBtn" onClick={() => handleQuantity("inc")} >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                    </button>
                </div>
                <div className="Product-Btns">
                    <button className="Product-add-cart" type="button" onClick={() => AddToCart(userId, id, quantity)} disabled={product.quantity === 0}>
                        Ajouter au panier
                    </button>
                    <button className="Product-OrderNow-btn" type="button" onClick={() => OrderNow(userId, id, quantity)} disabled={product.quantity === 0}>
                        Commander maintenant
                    </button>
                </div>
                <div className='Livraison'>
                    <span>Livraison a Domicile dans les 48H Partout au Maroc !</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails