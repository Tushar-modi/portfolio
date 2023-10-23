import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8vfoycj', 'template_hpji7l7', form.current, 'lImAJ6d4YjGBRgAIuV6Z5')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email send!")
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                some of the notable compinies I have worked with includes.
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <div className="contactPageTitle">
                Contact me
            </div>
            <span className="contactDesc">Please fill out the form below to disscuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" name='your_name' placeholder='Your Name' />
                <input type="email" className="email" name='your_email' placeholder='Your Email' />
                <textarea name="message" className="msg"  rows="5" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='Send'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className="link" />
                    <img src={TwitterIcon} alt="" className="link" />
                    <img src={YoutubeIcon} alt="" className="link" />
                    <img src={InstagramIcon} alt="" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact