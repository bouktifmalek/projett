import React from 'react'
import './Contact.css'
import {useRef} from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
   const form=useRef()
 const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_12h4ce6', 'template_zzdrj4x', form.current, {
        publicKey: '8PIN5U5x4aiX8LJay',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
     <section className='contact'>
      <div className="cont">
        <h2>Contact Us</h2>
        <div className='contact-wrapper'>
        <div className='contact-form'>
        <h3>send us a message</h3>
        <form ref={form}onSubmit={sendEmail}>
          <div className='form-group'>
          <input type='text' className='input-field' placeholder='Full Name' name='user_name' ></input>
          </div>
          <div className='form-group'>
          <input type='email' className='input-field' placeholder='Email' name='user_email'></input>
          </div>
          <div className='form-group'>
          <input type='text' className='input-field' placeholder='Subject' name='subject'></input>
          </div>
          <div className='form-group'>
          <textarea name="message" placeholder='Your Massage' ></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
        </div>
        <div className='contact-info'>
          <h3>Contact Information</h3>
          <p>+216 90392584</p>
          <p>bouktifoussama21@gmail.com</p>
          <p>Zaghouan 1100 ,Tunisie</p>
        </div>
        </div>
      </div>
    </section>
  )
  
}

export default Contact
