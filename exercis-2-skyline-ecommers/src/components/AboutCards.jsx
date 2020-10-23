import React, { Component } from "react";

class AboutCards extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-center">
          <a href="#about">
            <svg
              className="animate-bounce w-6 h-6 text-purple-600"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
        <div className="mb-64 relative">
          <section className="blog text-gray-700 body-font mb-64" id="about">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  About
                </h1>
                <p className="lg:w-1/2 w-full leading-relaxed text-base">
                  J'aime bien partager mes connaissances et des recherche
                  intéressantes, pour le faire j'ai mis en place un blog
                  personnel. Nous abordons plusieurs sujets intéressants et je
                  donne quelques astuces et conseils aux jeunes développeurs
                  pour mieux s'en sortir.
                </p>
              </div>
              <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                  <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"></div>

                  <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                    <div className="header-content inline-flex ">
                      <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-purple-100">
                        <div className="h-2 w-2 rounded-full m-1 bg-purple-500 "></div>
                      </div>
                      <div className="category-title flex-1 text-sm">Basic</div>
                    </div>
                    <div className="title-post font-medium">Mon titre</div>

                    <div className="summary-post text-base text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <button className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm ">
                        <span className="">Lire plus</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                  <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"></div>

                  <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                    <div className="header-content inline-flex ">
                      <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                        <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                      </div>
                      <div className="category-title flex-1 text-sm">
                        Premium
                      </div>
                    </div>
                    <div className="title-post font-medium">Mon titre</div>

                    <div className="summary-post text-base text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm">
                        <span className="">Lire plus</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
                  <div className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"></div>

                  <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                    <div className="header-content inline-flex ">
                      <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                        <div className="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                      </div>
                      <div className="category-title flex-1 text-sm">
                        Primer
                      </div>
                    </div>
                    <div className="title-post font-medium">Mon titre</div>

                    <div className="summary-post text-base text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Perspiciatis veritatis vel suscipit ex dolore possimus
                      iure.
                      <button className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm">
                        <span className="">Lire plus</span>
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
