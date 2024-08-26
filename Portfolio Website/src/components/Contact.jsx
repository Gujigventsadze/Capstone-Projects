import "../Contact.css";
import React, { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import tickImg from "../pics/tick.png";
 
export const Contact = () => {

    const [sent, setSent] = useState(false);

    const { ref, inView } = useInView({
        triggerOnce: true, // Trigger the animation only once
        threshold: 0.3, // Adjust this value based on when you want to trigger the animation
      });

    const handleClick = () => {
        setSent(true);
        
        setTimeout(() => {
            setSent(false);
        }, 3000)
    }

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0ad4grv', 'template_rf180lm', form.current, {
        publicKey: 'FDSXdgkm668lEA5FX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return (
        <section id="contact" ref={ref} className={`welcome-section ${inView ? 'animate' : ''}`}>
        <div className={sent ? "email-sent" : "display-none"}>
            <div>Email has been Sent Successfully</div>
            <div><img src={tickImg} /></div>
        </div>
        <div className="contact-title">
            Contact Me
        </div>
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <input type="submit" value="Send" onClick={handleClick} required />
        </form>
        <div className="phone">
            Or Call +995 558 390 509
        </div>
    </section>
    
    )
}