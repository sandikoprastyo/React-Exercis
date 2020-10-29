import React from 'react';
import Banner from '../components/Home/Banner';
import Img from '../assets/product/FX8886_SL_eCom.png';
import AboutCards from '../components/Home/AboutCards';

const Home = () => {
  return (
    <div className='font-serif'>
      <Banner />
      {/* Arrow */}
      <div className='flex justify-center'>
        <a href='#about'>
          <svg
            className='animate-bounce w-6 h-6 text-purple-600'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='4'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3'></path>
          </svg>
        </a>
      </div>
      {/* grid */}
      <div class='grid xl:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4 '>
        <div class='flex col-span-1 flex-col items-center'>
          <div className='flex flex-wrap w-full mb-20 flex-col items-center text-center pt-24'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
              About
            </h1>
            <p className='w-full px-20 leading-relaxed text-base'>
              J'aime bien partager mes connaissances et des recherche
              intéressantes, pour le faire j'ai mis en place un blog personnel.
              Nous abordons plusieurs sujets intéressants et je donne quelques
              astuces et conseils aux jeunes développeurs pour mieux s'en
              sortir.
            </p>
          </div>
        </div>
        <div class='flex col-span-1 flex-col items-center'>
          <img
            src={Img}
            alt='img'
            width='50%'
            className='w-1/2 sm:w-auto md:1/2 lg:w-2/5 xl:w-2/5  mb-10 mt-10 shadow-2xl rounded-lg'
          />
        </div>
      </div>
      <AboutCards />
    </div>
  );
};

export default Home;
