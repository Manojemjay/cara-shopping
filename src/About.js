import React from 'react';
import "./About.css";

function About() {
  return (
    <div>
        <section id="page-header" class="about-header">

        <h2>#KnowUs </h2>

        <p>Lorem ipsum dolor sit amet, consectetur </p>

        </section>

        <div id="about-head" class="section-p1">
        <img src="img/about/a6.jpg" alt=""/>
        <div>
            <h2>Who We Are?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <abbr title="">You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions</abbr>

            <br></br>

            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">You will realise that the sky is the limit when it comes to the types of outfits that you can purchase for different occasions.
            </marquee>
        </div>
        </div>

        <section id="about-app" class="section-p1">
        <h1>Download Our <a href="#">App</a> </h1>
        <div class="video">
            <video autoplay muted loop src="img/about/1.mp4"></video>
        </div>
        </section>

        <section id="feature" class="section-p1">
        <div class="fe-box">
            <img src="img/features/f1.png" alt=""/>
            <h6>Free Shipping</h6>
        </div>
        <div class="fe-box">
            <img src="img/features/f2.png" alt=""/>
            <h6>Online Order</h6>
        </div>
        <div class="fe-box">
            <img src="img/features/f3.png" alt=""/>
            <h6>Save Money</h6>
        </div>
        <div class="fe-box">
            <img src="img/features/f4.png" alt=""/>
            <h6>Promotions</h6>
        </div>
        <div class="fe-box">
            <img src="img/features/f5.png" alt=""/>
            <h6>Happy Sell</h6>
        </div>
        <div class="fe-box">
            <img src="img/features/f6.png" alt=""/>
            <h6>F24/7 Support</h6>
        </div>
        </section>
    </div>
  )
}

export default About