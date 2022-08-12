import React from "react";
import "./Home.css";
import f1 from './img/features/f1.png';
import f2 from './img/features/f2.png';
import f3 from './img/features/f3.png';
import f4 from './img/features/f4.png';
import f5 from './img/features/f5.png';
import f6 from './img/features/f6.png';

import p1 from './img/products/f1.jpg';
import p2 from './img/products/f2.jpg';
import p3 from './img/products/f3.jpg';
import p4 from './img/products/f4.jpg';
import p5 from './img/products/f5.jpg';
import p6 from './img/products/f6.jpg';
import p7 from './img/products/f7.jpg';
import p8 from './img/products/f8.jpg';
import p9 from './img/products/n1.jpg';
import p10 from './img/products/n2.jpg';
import p11 from './img/products/n3.jpg';
import p12 from './img/products/n4.jpg';
import p13 from './img/products/n5.jpg';
import p14 from './img/products/n6.jpg';
import p15 from './img/products/n7.jpg';
import p16 from './img/products/n8.jpg';


function Home() {
  return (
    <div className="home">
      <div className="home__container">
      <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" />
            <div id="hero">
              <h4>Trade-in-offer</h4>
              <h2>Super value deals</h2>
              <h1>On all products</h1>
              <p>Save more with coupons & up to 70% off! </p>
              <button>Shop Now</button>
            </div>

            <div id="feature" class="section-p1">
              <div class="fe-box">
               <img src={f1} alt=""/>
               <h6>Free Shipping</h6>
              </div>
              <div class="fe-box">
               <img src={f2} alt=""/>
               <h6>Online Order</h6>
              </div>
              <div class="fe-box">
                <img src={f3} alt=""/>
                <h6>Save Money</h6>
              </div>
              <div class="fe-box">
                <img src={f4} alt=""/>
                <h6>Promotions</h6>
              </div>
              <div class="fe-box">
                  <img src={f5} alt=""/>
                  <h6>Happy Sell</h6>
              </div>
              <div class="fe-box">
                <img src={f6} alt=""/>
                <h6>F24/7 Support</h6>
              </div>
            </div>

            <section id="product1" class="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
            <div class="pro">
                <img src={p1} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
            <div class="pro">
                <img src={p2} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p3} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p4} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p5} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p6} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cotton Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p7} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Floral Pants</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹2499</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p8} alt=""/>
                <div class="des">
                    <span>adidas</span>
                    <h5>Cartoon Cats Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>
    </section>

    <section id="banner" class="section-m1">
        <h4>Repair Services </h4>
        <h2>Up to <span>70% Off</span> – All t-Shirts & Accessories</h2>
        <button class="normal">Explore More</button>
    </section>

    <section id="product1" class="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection New Modern Design</p>
        <div class="pro-container">
            <div class="pro">
                <img src={p9} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Cotton shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹4999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p10} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Cotton Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹3999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p11} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Cotton Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹3999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p12} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Cotton Designer Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹2999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
                </div>
            <div class="pro">
                <img src={p13} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Denim Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹7499</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p14} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Linen Shorts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹3999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p15} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>Cotton Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹2999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
            <div class="pro">
                <img src={p16} alt=""/>
                <div class="des">
                    <span>Zara</span>
                    <h5>linen Shirts</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h4>₹1999</h4>
                </div>
                <a href="#"><i class="fal fa-shopping-cart cart"></i></a>
            </div>
        </div>
    </section>

    <div id="sm-banner" class="section-p1">
        <div class="banner-box">
            <h4>crazy deals</h4>
            <h2>buy 1 get 1 free</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Learn More</button>
        </div>
        <div class="banner-box banner-box2">
            <h4>spring/summer</h4>
            <h2>upcomming season</h2>
            <span>The best classic dress is on sale at cara</span>
            <button class="white">Collection</button>
        </div>
    </div>

    <div id="banner3">
        <div class="banner-box">
            <h2>SEASONAL SALE</h2>
            <h3>Winter Collection -50% OFF</h3>
        </div>
        <div class="banner-box banner-box2">
            <h2>NEW FOOTWEAR COLLECTION </h2>
            <h3>Spring / Summer 2022</h3>
        </div>
        <div class="banner-box banner-box3">
            <h2>T-SHIRTS</h2>
            <h3>New Trendy Prints</h3>
        </div>
    </div>

    <div id="newsletter" class="section-p1 section-m1">
        <div class="newstext">
            <h4>Sign Up For Newsletters</h4>
            <p>Get E-mail updates about our latest shop and <span>special offers.</span> </p>
        </div>
        <div class="form">
            <input type="text" placeholder="Your email address"></input>
            <button class="normal">Sign Up</button>
        </div>
    </div>
        </div>
    </div>

    );
};

export default Home;