import React, { useRef, useState } from 'react';
import './style.css';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    const emailInput = form.current.elements.from_email;
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      setMessage('Email Address is required');
      return;
    }

    emailjs
      .sendForm(
        'service_1ar545g',
        'template_9dqwxue',
        form.current,
        'FBjZsrEn67HWqOmf1'
      )
      .then(
        (result) => {
          setMessage('Email was succesfully sent');
        },
        (error) => {
          setMessage('Oops something went wrong, please check your inputs');
        }
      );

    form.current.reset();
  };

  return (
    <div className='contactMe'>
      <div className='form'>
        <h2>Reach Out to Me</h2>
        <p>
          Ride the waves of Poseidon's realm. Reach out using the form below,
          and let's embark on a digital odyssey together.
        </p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='inputs'>
            <div>
              <input
                type='text'
                name='from_name'
                placeholder='Full Name'
                className='formInp'
                required
              />
              <input
                type='email'
                name='from_email'
                placeholder='Email Address'
                className='formInp'
                required
              />
            </div>
            <textarea
              name='message'
              placeholder='Message'
              className='formInp'
              rows={5}
              required
            ></textarea>
          </div>
          <button type='submit' className='wave-btn formSubmit'>
            <a>
              <span></span>
              <span></span>
              <span></span>
              <span></span>Send
            </a>
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}
