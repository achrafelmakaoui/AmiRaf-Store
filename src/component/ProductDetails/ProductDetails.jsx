import React from 'react'
import './ProductDetails.css';

const ProductDetails = () => {
  return (
    <div className="ProductDetails">
        <div className="ProductDetails-wrapper">
            <div className="ProductDetails-images">
                <div className="ProductDetails-images-Thumbnail">
                    <div className='ProductDetails-MainImage'>
                        <img src="https://i.ibb.co/nz3pDMQ/air-jordan-1-black-men.png" alt="" />
                    </div>
                    <div className="ProductDetails-SecondaryImages">
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" className="active"/>
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" />
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" />
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" />
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" />
                        <img src="https://i.ibb.co/4RJ3bGm/air-jordan-1-elevate-low-mens-shoes-black-red-3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="ProductDetails-content">
                <p className="Product-stock">STOCK</p>
                <h2 className='Product-title'>PRODUCT TITLE</h2>
                <p className="Product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sunt quia a deleniti fugiat nesciunt neque debitis ullam ad repudiandae facere quas nihil, alias, natus tempora animi id consequatur, cupiditate expedita sint eveniet aspernatur accusamus?</p>
                <div className="Product-price">
                    <div className="Product-price">
                        <p className="Product-discounted-price">$125.00</p>
                        <p><span class="discount-discount">50%</span></p>
                    </div>
                    <p className="Product-Actual-price">$250.00</p>
                </div>
                <div className="Product-Quantity">
                    <div className="Product-Quantity-Gestion">
                        <button type="button" className="decreament">-</button>
                        <button type="input" className="quantity-numbers">1</button>
                        <button type="button" className="increament">+</button>
                    </div>
                    <button className="Product-add-cart" type="button">
                        <span>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/>
                            </svg>
                        </span>
                        <p>Add to Cart</p>
                    </button>
                </div>
                <div className="Product-OrderNow">
                    <button className="Product-OrderNow-btn" type="button">
                        <span>
                            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#ffffff" fill-rule="nonzero"/>
                            </svg>
                        </span>
                        <p>Order Now</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails