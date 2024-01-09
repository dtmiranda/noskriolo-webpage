import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section className="bg-gray-100 dark:bg-gray-900">
      <div className='flex-row py-20'>
        <div className='flex justify-center items-center'>
          <div className='max-w-96'>
            <div className='mb-4 flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-primary-800">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
              <p className='pl-2 flex-col text-gray-900 font-normal'>Sobre nós</p>
            </div>

            <h4 className='text-2xl text-center font-semibold' > <span className='text-primary-800'>Descubra Nossa História:</span> O Início de Tudo.</h4>

          </div>

        </div>

        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-0 lg:grid-cols-2 lg:px-6">
          <img width={350} className='hidden lg:mt-0 lg:col-span-1 lg:flex' src="/about-image.svg" alt="" />
          <div className="mt-4 md:mt-0">

            <h2 className="mb-8 text-4xl md:text tracking-wide leading-snug text-justify font-extrabold text-gray-900 dark:text-white">Celebrando a diversidade linguística de Cabo Verde!</h2>
            <p className="mb-6 font-light text-justify text-gray-500 md:text-lg dark:text-gray-400">Promovemos o Kriolu Cabo-verdiano e sua oficialização. Facilitamos a aprendizagem com uma plataforma de tradução para diversas outras as línguas. Junte-se a nós na celebração da riqueza linguística de Cabo Verde.</p>
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