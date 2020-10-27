import React, { Component } from 'react';

class AboutCards extends Component {
  render() {
    return (
      <div>
        <div className='-my-10 relative'>
          <section className='blog text-gray-700 body-font' id='about'>
            <div className='container px-5 py-24 mx-auto'>
              <div className='flex flex-wrap sm:-m-4 -mx-4 -mt-4'>
                <div className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto'>
                  <div className='bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center'>
                    <img
                      src='https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920'
                      className='w-full object-cover object-center'
                      alt='img'
                    />
                  </div>

                  <div className=' w-70 bg-white  shadow-2xl -mt-10 shadow-lg rounded-lg overflow-hidden p-5'>
                    <div className='title-post font-medium bg-red'>
                      <p className='text-2xl uppercase text-gray-900 font-bold'>
                        Puma Shoes
                      </p>
                    </div>
                    <p className='font-bold text-xl'>$65</p>
                    <div className='summary-post text-base text-justify'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <div className='w-10 h-10 mt-4 block rounded p-2 text-sm '>
                        <span className=''>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                      </div>
                      <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto'>
                  <div className='bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center'>
                    <img
                      src='https://images.unsplash.com/photo-1525091924611-32d73c3438ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
                      className='w-full object-cover object-center'
                      alt='img'
                    />
                  </div>

                  <div className=' w-70 bg-white -mt-10 shadow-2xl rounded-lg overflow-hidden p-5'>
                    <div className='title-post font-medium'>Mon titre</div>

                    <div className='summary-post text-base text-justify'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <div className='w-10 h-10 mt-4 block rounded p-2 text-sm '>
                        <span className=''>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                      </div>
                      <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>

                <div className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto'>
                  <div className='bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center'>
                    <img
                      src='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                      className='w-full object-cover object-center'
                      alt='img'
                    />
                  </div>

                  <div className=' w-70 bg-white -mt-10 shadow-2xl rounded-lg overflow-hidden p-5'>
                    <div className='title-post font-medium'>Mon titre</div>

                    <div className='summary-post text-base text-justify'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <div className='w-10 h-10 mt-4 block rounded p-2 text-sm '>
                        <span className=''>
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 20 20'
                            fill='currentColor'
                          >
                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                          </svg>
                        </span>
                      </div>
                      <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutCards;
