import React from 'react'
import "./Home.css";

function Contact() {
  return (
    <div>
        <section id="page-header" class="about-header">

        <h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hear from you!</p>
        </section>

        <section id="contact-details" class="section-p1">
        <div class="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i class="fal fa-map"></i>
                    <p>56 Oxford OX1 2JD, United Kingdom</p>
                </li>
                <li>
                    <i class="far fa-envelope"></i>
                    <p>Contactheadoffice@cara.com </p>
                </li>
                <li>
                    <i class="fas fa-phone-alt"></i>
                    <p> +44 1865 270000</p>
                </li>
                <li>
                    <i class="far fa-clock"></i>
                    <p>Monday to Saturday: 9.00 AM to 6.00 PM </p>
                </li>
            </div>
        </div>

        {/* <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.8088025254456!2d-1.256555484681452!3d51.754819700404106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sbd!4v1637232208485!5m2!1sen!2sbd"
                width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div> */}
        </section>

        <div id="form-details">
        <form action="" />
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you </h2>
            <input type="text" name="" id="" placeholder="Your Name"/>
            <input type="text" name="" id="" placeholder="E-mail"/>
            <input type="text" name="" id="" placeholder="Subject"/>
            <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
            <button class="normal">Submit</button>
        <form/>
        <div class="people">
            <div>
                <img src="img/people/1.png" alt=""/>
                <p/><span>John Doe </span> Senior Marketing Manager <br/> Phone:  +44 1865 278796 <br/> Email: Johndoe@cara.com<p/>
            </div>
            <div>
                <img src="img/people/2.png" alt=""/>
                <p><span>William Smith</span> Marketing Manager <br/> Phone:  +44 1865 276969 <br/> Email: Williamsmith@cara.com</p>
            </div>
            <div>
                <img src="img/people/3.png" alt=""/>
                <p><span>Emma Stone</span> Senior Regional Manager <br/> Phone:  +44 1865 274646 <br/> Email: Emmastone@cara.com</p>
            </div>
        </div>
        </div>
        </div>
  )
}

export default Contact