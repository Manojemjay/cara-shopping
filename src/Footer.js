import React from "react";
import "./Footer.css";
import logo from './logo.png';

function Footer() {
  return (
    <div>
        <div class="section-p1">
        <div class="col">
            <img src={logo} alt=""/>
            <h4>Contact</h4>
            <p><strong>Address: </strong> 562 Brigade Road, Bengaluru</p>
            <p><strong>Phone:</strong> +91 9980618475 /(+91) 9353290207</p>
            <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
            <div class="follow">
                <h4>Follow Us</h4>
                <div class="icon">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-pinterest-p"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div class="col">
            <h4>About</h4>
            <a href="#">About Us</a>
            <a href="#">Delivery Information</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact Us</a>
        </div>

        <div class="col">
            <h4>My Account</h4>
            <a href="#">Sign In</a>
            <a href="#">View Cart</a>
            <a href="#">My Wishlist</a>
            <a href="#">Track My Order</a>
            <a href="#">Help</a>
        </div>

        <div class="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div class="row">
                <img src="img/pay/app.jpg" alt=""/>
                <img src="img/pay/play.jpg" alt=""/>
            </div>
            <p>Secured Payment Gateways </p>
            <img src="img/pay/pay.png" alt=""/>
        </div>

        <div class="copyright">
            <p>© 2022, Anup Ganesh - HTML CSS Ecommerce Website Project</p>
        </div>
    </div>
    </div>
  )
}

export default Footer