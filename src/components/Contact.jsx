import React, { useRef } from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fuxet5q', 'template_2bd6qck', form.current, 'fmyWvPkcUvM5vpcDT')
      .then(
        () => {
          toast.success('Email sent successfully!');
          e.target.reset();
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
      <ToastContainer />
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
       Contact
      </motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.address}
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <p className='my-4'>{CONTACT.email}</p>
        <motion.form 
          ref={form} 
          onSubmit={sendEmail}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='flex flex-col items-center'
        >
          <div className='w-full max-w-md'>
            <label htmlFor="user_name" className='block text-left ml-1'>Name :</label>
            <motion.input 
              type="text" 
              name="from_name" 
              id="user_name" 
              required 
              className='w-full p-2 border border-gray-300 rounded mb-4'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0.1 }}
            />
          </div>
          <div className='w-full max-w-md'>
            <label htmlFor="user_email" className='block text-left ml-1'>Email :</label>
            <motion.input 
              type="email" 
              name="from_email" 
              id="user_email" 
              required 
              className='w-full p-2 border border-gray-300 rounded mb-4'
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>
          <div className='w-full max-w-md'>
            <label htmlFor="message" className='block text-left ml-1'>Message :</label>
            <motion.textarea 
              name="message" 
              id="message" 
              required 
              className='w-full p-2 border border-gray-300 rounded mb-4'
              rows="5"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </div>
          <motion.input 
            type="submit" 
            value="Send"
            className='bg-blue-500 text-white p-2 rounded cursor-pointer hover:bg-blue-700'
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 0.4 }}
          />
        </motion.form>
        <motion.div 
          className='mt-5 font-medium'
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          @ 2024 All rights reserved by Keerthivasan
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
