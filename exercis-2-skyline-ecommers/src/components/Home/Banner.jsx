import React, { Component } from 'react';
import background from '../../assets/img/bb.jpg';

const styles = {
  width: '100%',
  height: '550px',
  backgroundImage: `url(${background})`,
};

export default class Banner extends Component {
  render() {
    return (
      <div
        className=' bg-cover border-t-2 border-blue-600 h-full'
        style={styles}
      >
        <div className='content px-8 py-2'>
          <div className='body mt-20 mx-8'>
            <div className='md:flex items-center justify-between'>
              <div className='w-full md:w-1/2 mr-auto mt-16'>
                <h1 className='text-4xl font-bold text-white tracking-wide'>
                  Abourt
                </h1>
                <h2 className=' text-2xl font-bold text-white tracking-wide'>
                  Welcome <span className='text-gray-800'>Skyline</span>
                </h2>
                <p className='text-gray-300'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className='w-full md:max-w-md mt-6'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
