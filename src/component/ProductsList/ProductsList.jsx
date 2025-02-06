import React, { useEffect, useState } from 'react'
import './ProductsList.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../CartContext';

const ProductsList = ({ userId }) => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [products, setProducts] = useState([]);
    const BASE_URL = "https://server.amiraf.shop";
    const navigate = useNavigate();
    const { updateCartCount } = useCart();

    const handleMouseEnter = (index) => {
      setHoveredCard(index);
    };
  
    const handleMouseLeave = () => {
      setHoveredCard(null);
    };
  

    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://server.amiraf.shop/api/product/");
          setProducts(response.data);
        } catch (err) {
          console.log(err.message || "Failed to fetch products");
        }
      };

      fetchProducts();
    }, []);

    const AddToCart = async (userId, productId, quantity) => {
      try {
        const res = await axios.post("https://server.amiraf.shop/api/cart/", {
          userId,
          items: [{ productId, quantity }],
        });
        updateCartCount();
      } catch (err) {
        console.error("Error adding to cart:", err.response?.data?.message || err.message);
      }
    };

    const handleClickProductDetails = (productId) => {
      navigate(`/DetailsProduits/${productId}`);
    };

    const titles = [
        "Découvrez Notre Collection Exclusive",
        "Nouveaux Produits en Stock",
        "Offres Spéciales à Ne Pas Manquer",
        "Qualité et Élégance Garantie",
      ];
    
      const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTitleIndex((prevIndex) =>
            prevIndex === titles.length - 1 ? 0 : prevIndex + 1
          );
        }, 4000); 
    
        return () => clearInterval(interval);
      }, [titles.length]);

  return (
    <div className='ProductsList'>
        <div className='bannerProductList'>
            <h1>{titles[currentTitleIndex]}</h1>
        </div>
        <div className='ProductsListContent'>
            <div className='ProductsListContent-Titles'>
                <h1>Nos Produits</h1>
                <h2>Découvrez notre sélection unique, alliant qualité, créativité et innovation pour répondre à vos besoins.</h2>
            </div>
            <div className='ProductsListCards'>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className='ProductsList-card'
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='ProductsList-img'>
                            <img
                                src={
                                  hoveredCard === index && product.image2
                                    ? `${BASE_URL}${product.image2}`
                                    : `${BASE_URL}${product.image1}`
                                }
                                onClick={() => handleClickProductDetails(product._id)}
                                alt={product.title}
                            />
                            {product.isInStock &&
                              <div className='productAddToCart' onClick={() => AddToCart(userId, product._id, 1)}>
                                  <svg fill='currentColor' width="24" height="24" viewBox="0 0 1024 1024"><path d="M849.066667 349.866667h-115.2c4.266667-25.6 0-51.2-8.533334-81.066667-34.133333-119.466667-157.866667-187.733333-277.333333-157.866667-55.466667 21.333333-102.4 59.733333-132.266667 110.933334-21.333333 38.4-29.866667 85.333333-29.866666 128H174.933333c-17.066667 0-29.866667 12.8-29.866666 34.133333v337.066667c0 115.2 93.866667 213.333333 213.333333 213.333333h200.533333c17.066667 0 34.133333-12.8 34.133334-34.133333s-12.8-34.133333-34.133334-34.133334H354.133333c-81.066667 0-149.333333-68.266667-149.333333-149.333333V413.866667H810.666667v174.933333c0 17.066667 12.8 34.133333 34.133333 34.133333s34.133333-12.8 34.133333-34.133333V384c0-21.333333-12.8-34.133333-29.866666-34.133333z m-179.2 0H354.133333c-4.266667-34.133333 0-68.266667 17.066667-98.133334C392.533333 213.333333 426.666667 187.733333 469.333333 174.933333c85.333333-25.6 174.933333 25.6 196.266667 110.933334 4.266667 21.333333 8.533333 42.666667 4.266667 64z" /><path d="M849.066667 704h-132.266667v-132.266667c0-17.066667-12.8-29.866667-34.133333-29.866666-17.066667 0-29.866667 12.8-29.866667 34.133333v132.266667h-132.266667c-17.066667 0-29.866667 12.8-29.866666 34.133333 0 17.066667 12.8 29.866667 34.133333 29.866667h132.266667v132.266666c0 17.066667 12.8 29.866667 34.133333 29.866667 17.066667 0 29.866667-12.8 29.866667-34.133333V768H853.333333c17.066667 0 29.866667-12.8 29.866667-34.133333-4.266667-17.066667-17.066667-29.866667-34.133333-29.866667z"/></svg>
                              </div>
                            }
                            {!product.isInStock &&
                              <div className='productStockAlert'>
                                  <span>En rupture de stock</span>
                              </div>
                            }
                        </div>
                        <div className='ProductsList-details'>
                            <div className='ProductsListTitle'>
                                <h2>{product.title}</h2>
                            </div>
                            <div className='ProductsListPrincing'>
                                <span>{product.old_price}.00 DH</span>
                                <span>{product.new_price}.00 DH</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ProductsList