import React from "react";
import "./Contact.css";

const Contact = () => (
  <div className="contact-bg">
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <h2 className="contact-subtitle">
      Want to book free demo & service ? Just give us a call at the number below!
      </h2>
      <div className="contact-cards">
        <div className="contact-card">
          <span className="contact-icon">📍</span>
          <div className="contact-card-title">Address</div>
          <div>Flat No.7 Credit Society<br/>Near Memorial Church<br/>New Shahupuri<br/>Kolhapur, Maharashtra, 416001</div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📞</span>
          <div className="contact-card-title">Phone</div>
          <div>
          <a href="tel:8855931324">+91 88559 31324</a><br/>
            <a href="tel:7498181581">+91 74981 81581</a>
            
          </div>
        </div>
        <div className="contact-card">
          <span className="contact-icon">📱</span>
          <div className="contact-card-title">WhatsApp</div>
          <div><a href="https://wa.me/918855931324" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></div>
        </div>
      </div>
    </div>
    <footer className="contact-footer">
      Created by: <b>Sujal Sanjay Ghorpade</b><br/>
      Email: <a href="mailto:sujalghorpade1516@gmail.com">sujalghorpade1516@gmail.com</a><br/>
      © {new Date().getFullYear()} All Rights Reserved.
    </footer>
  </div>
);

export default Contact;