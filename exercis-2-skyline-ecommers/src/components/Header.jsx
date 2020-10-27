import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  state = {
    headerIsOpen: true,
  };

  render() {
    return (
      <div>
        <nav className='fixed w-full bg-white shadow z-50' role='navigation'>
          <div className='shadow container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap'>
            <div className='mr-4 md:mr-8'>
              <Link to='/' rel='home'>
                <svg
                  className='w-10 h-10 text-purple-600'
                  width='54'
                  height='54'
                  viewBox='0 0 54 54'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='currentColor'
                    d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z'
                  ></path>
                </svg>
              </Link>
            </div>
            <h1 className='text-gray-800'>Skyline</h1>
            <div
              onClick={() => {
                this.setState({ headerIsOpen: !this.state.headerIsOpen });
              }}
              className='ml-auto md:hidden'
            >
              <button
                className='flex items-center px-3 py-2 border rounded'
                type='button'
              >
                <svg
                  className='h-3 w-3'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <title>Menu</title>
                  <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                </svg>
              </button>
            </div>
            <div
              className={
                'w-full md:w-auto md:flex-grow md:flex md:items-center' +
                (this.state.headerIsOpen ? ' flex' : ' hidden')
              }
            >
              <ul className='flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0'>
                <li>
                  <Link
                    className='block px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600'
                    to='/'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className='block px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600'
                    to='/Shopping'
                  >
                    Shop
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='currentColor'
                      class='h-8 w-8 pl-2 inline'
                      viewBox='0 0 24 24'
                    >
                      <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z' />
                    </svg>
                    {1}
                  </Link>
                </li>
                <li>
                  <Link
                    className='block px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600'
                    to='/Contact'
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    className='block px-4 py-1 md:p-2 lg:px-4 hover:text-purple-600'
                    to='/Login'
                  >
                    Sign in
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
