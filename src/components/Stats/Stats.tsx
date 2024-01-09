import React from 'react'

const Stats = () => {
  return (
    <section className='bg-white flex-col '>
      <div className='py-20 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6'>

        <div className='flex-row lg:flex justify-between items-center'>



          <div className='lg:w-1/2'>

            <div className='flex-row justify-start items-center'>
              <h2 className="mb-4 text-3xl tracking-tight text-justify lg:text-start font-semibold text-gray-900 dark:text-white">Baixe agora o <span className='text-primary-800'>Nos Kriolo</span> e mergulhe na arte da tradução.</h2>
              <p className="mb-8 font-light text-gray-500 sm:text-lg text-justify lg:text-start dark:text-gray-400">Disperte o poliglota em você, construindo pontes culturais palavra por palavra e explorando a maestria da tradução. </p>

            </div>


            <div className="flex flex-row justify-between items-center text-gray-900 dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-primary-800 mb-2 text-2xl md:text-1xl font-extrabold">2021</h4>
                <p className="font-light text-gray-500 dark:text-gray-400">Fundada</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-primary-800 mb-2 text-2xl md:text-1xl font-extrabold">1.5 Mil</h4>
                <p className="font-light text-gray-500 dark:text-gray-400">Usuario ativos</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-primary-800 mb-2 text-2xl md:text-1xl font-extrabold">20+</h4>
                <p className="font-light text-gray-500 dark:text-gray-400">Paises</p>
              </div>


            </div>


          </div>
          <div className='lg:w-1/12'>

          </div>


          <div className='mt-6 lg:mt-0 lg:w-1/2 lg:flex lg:justify-between md:flex md:justify-evenly items-center'>


            <div className="pt-6 pl-6 bg-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">

              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">iOS</h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">iOS 15.6+</p>

              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download</button>

              <div className='mt-4 flex justify-between items-end'>

                <img src="/qr-code.svg" width={80} alt="" className='mb-6 rounded-lg' />
                <div className=' bg-white p-4 rounded-full ml-16 -mr-3 -mb-3 overline'>
                  <img src="/ios.svg" width={60} alt="ios logo" />
                </div>

              </div>
            </div>

            <div className="mt-4 lg:mt-0 pt-6 pl-6 bg-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700">

              <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Android</h5>
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Android 8.0+</p>

              <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-xs px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download</button>

              <div className='mt-4 flex justify-between items-end'>

                <img src="/qr-code.svg" width={80} alt="" className='mb-6 rounded-lg' />
                <div className=' bg-white p-4 rounded-full ml-16 -mr-3 -mb-3 overline'>
                  <img src="/android.svg" width={60} alt="Android logo" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats