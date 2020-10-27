import React from 'react';

const Contact = () => {
  return (
    <div className='pt-32 font-serif'>
      <h1 className='text-center font-bold text-xl'>Contact</h1>
      <div className='flex justify-center'>
        <form action='#' className='form bg-white p-6 my-10 relative'>
          <h3 className='text-xl text-gray-900 font-semibold'>
            Let us call you!
          </h3>

          <p className='text-gray-600'> To help you choose your property</p>
          <div className='flex space-x-5 mt-3'>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your Name'
              className='border p-2  w-1/2'
            />
            <input
              type='tel'
              name='phone'
              id='phone'
              placeholder='Your Number'
              className='border p-2 w-1/2 '
            />
          </div>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Your Email'
            className='border p-2 w-full mt-3'
          />
          <textarea
            name='comment'
            id='comment'
            cols='10'
            rows='3'
            placeholder='Tell us about desired property'
            className='border p-2 mt-3 w-full'
          ></textarea>
          <p className='font-bold text-sm mt-3'>GDPR Agreement *</p>
          <div className='flex items-baseline space-x-2 mt-2'>
            <input type='checkbox' name='' id='' className='inline-block' />
            <p className='text-gray-600 text-sm'>
              I consent to having this website store my submitted information so
              they can respond to my inquiry.
            </p>
          </div>
          <input
            type='submit'
            value='Submit'
            className='w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
