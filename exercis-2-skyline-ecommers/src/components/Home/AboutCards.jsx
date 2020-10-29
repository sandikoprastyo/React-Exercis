import React, { Component } from 'react';

class AboutCards extends Component {
  state = {
    product: [],
  };
  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }
  componentDidMount() {
    fetch('http://localhost:8080/products')
      .then((res) => res.json())
      .then((data) => {
        //   var base64Flag = 'data:image/jpeg;base64,';
        //  var imageStr = this.arrayBufferToBase64(data.img.data);
        this.setState({ product: data });
      });
  }
  render() {
    const numberFormat = (value) =>
      new Intl.NumberFormat('en-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(value);
    return (
      <section
        className='-my-10 relative blog text-gray-700 body-font'
        id='about'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap sm:-m-4 -mx-4 -mt-4'>
            {this.state.product.map((item, i) => {
              return (
                <div
                  key={i}
                  className='p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto'
                >
                  <div className='bg-gray-300 h-56 w-full mb-32 rounded-lg shadow-md bg-cover bg-center'>
                    <img
                      //src='https://unsplash.com/photos/IJjfPInzmdk/download?force=true&w=1920'
                      src={item.image}
                      className='w-full object-cover object-center'
                      alt='img'
                    />
                  </div>

                  <div className=' w-70 bg-white  shadow-2xl -mt-10 shadow-lg rounded-lg overflow-hidden p-5'>
                    <div className='title-post font-medium bg-red'>
                      <p className='text-2xl uppercase text-gray-900 font-bold'>
                        {item.name}
                      </p>
                    </div>
                    <p className='font-bold text-xl'>
                      {numberFormat(item.price)}
                    </p>
                    <div className='summary-post text-base text-justify'>
                      <div className='w-10 h-10 mt-4 block rounded p-2 text-sm flex flex-row center '>
                        {Array(item.rate)
                          .fill()
                          .map((_, i) => (
                            <span role='img' aria-label='start'>
                              🌟
                            </span>
                          ))}
                      </div>
                      <button className='px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none'>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default AboutCards;
