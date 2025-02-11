import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Products = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const BASE_URL = "https://server.amiraf.shop";

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
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleClickProductDetails = (productId) => {
    navigate(`/DetailsProduits/${productId}`);
  };

  return (
    <div className='Products' id='NosProduits'>
      <div className='ProductsContent'>
        <div className='ProductsContent-Titles'>
          <h1>Nouveaux Produits</h1>
          <h2>Découvrez notre sélection unique, alliant qualité, créativité et innovation pour répondre à vos besoins.</h2>
        </div>
        {loading ? (
              <p className='loading-text'>Les produits apparaîtront bientôt... Maximum 40 secondes d'attente. ⏳</p>            
        ) : (
        <>
          <div className='ProductsCards'>
            {products.slice(0,3).map((product, index) => (
              <div
                key={product._id}
                className='product-card'
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleClickProductDetails(product._id)}
              >
                <div className='product-img'>
                  <img
                      src={
                        hoveredCard === index && product.image2
                          ? `${BASE_URL}${product.image2}`
                          : `${BASE_URL}${product.image1}`
                      }
                      alt={product.title}
                  />
                </div>
                <div className='product-details'>
                  <div className='productTitle'>
                    <h2>{product.title}</h2>
                  </div>
                  <div className='productPrincing'>
                    <span>{product.old_price}.00 DH</span>
                    <span>{product.new_price}.00 DH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='ProductsContent-Btn'>
            <Link to="/Produits "><span>Voir Tout Les Produits</span></Link>
          </div>
        </>
        )}
      </div>
    </div>
  );
};

export default Products;
