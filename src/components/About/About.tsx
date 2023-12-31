import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className='flex-row'>
        <div className='flex justify-center items-center'>
          <div className="mb-10 mb:16 lg:mb-20 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Sobre nós
            </span>
          </div>
        </div>

        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <Image width={400} height={300} className='hidden lg:mt-0 lg:col-span-1 lg:flex' src="/about-image.svg" alt="" />
          {/* <img className="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image" /> */}
          <div className="mt-4 md:mt-0">

            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Celebrando a diversidade linguística de Cabo Verde!</h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Promovemos o Kriolu Cabo-verdiano e sua oficialização. Facilitamos a aprendizagem com uma plataforma de tradução para diversas outras as línguas. Junte-se a nós na celebração da riqueza linguística de Cabo Verde.</p>
            <a href="/about" className="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Ler mais
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About