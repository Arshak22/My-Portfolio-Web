import React, { useRef, useState } from 'react';
import './style.css';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_8tfn3j5',
        'template_9dqwxue',
        form.current,
        'FBjZsrEn67HWqOmf1'
      )
      .then(
        (result) => {
          setMessage('Email was succesfully sent');
        },
        (error) => {
          setMessage(
            'Oops something went wrong, please check your input fields'
          );
        }
      );

    form.current.reset();
  };

  return (
    <div className='contactMe'>
      <div className='form'>
        <h1>Reach Out to Me</h1>
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
              required
            ></textarea>
          </div>
          <button type='submit' className='wave-btn formSubmit'>
            <span className='wave-btn_text'>Send</span>
            <span className='wave-btn_waves'></span>
          </button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}