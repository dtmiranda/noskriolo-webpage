import React from 'react'

function Feature() {
  return (
    <section className='min-h-[80vh]'>

      <div className='bg-black opacity-85 border border-green-700'>
        <div className='pt-20 pb-10 px-4 mx-auto max-w-screen-xl lg:px-6'>

          <div className='grid grid-cols-6 gap-4'>
            <div className='col-start-1 col-end-2 flex justify-start items-start'>
              <div className='max-w-96'>
                <div className='mb-4 flex justify-start items-start'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                  <p className='pl-2 flex-col text-white text-lg font-medium'>Funcionalidades</p>
                </div>

                <h4 className='text-2xl font-semibold text-white' > <span className='text-primary-800'>Inovações:</span> do Nos Kriolo app.</h4>

              </div>

            </div>
            <div className=' col-end-7 col-span-3 flex justify-center items-end'>
              <div className='border border-l-4 border-l-red-600 border-y-0 border-r-0 pl-2'>
                <p className='text-white te text-base font-normal'>Explore o Crioulo Cabo-verdiano com "Palavra do Dia" e "Provérbios" - a experiência perfeita para sua jornada linguística.</p>
              </div>


            </div>
          </div>

        </div>

        <div>
          <div className='px-4 mx-auto max-w-screen-xl lg:px-6'>

            <div className='grid grid-cols-3 gap-6 -mb-60'>

              <div className='p-4 flex flex-col justify-center items-center bg-white rounded-2xl  overflow-visible'>

                <h5 className='p-2 text-xl font-semibold text-center text-gray-950'>Palavra do dia</h5>
                <p className='pb-4 text-gray-600 text-base font-normal text-center'>Explore uma nova palavra todos os dias com a nossa "Palavra do Dia".</p>
                <div>
                  <img src="/feature-1.svg" alt="" />
                </div>

              </div>

              <div className='p-4 flex flex-col justify-center rounded-2xl items-center bg-white  overflow-visible'>

                <div>
                  <img src="/feature-2.svg" alt="" />
                </div>

                <h5 className='p-2 text-xl font-semibold text-center text-gray-950'>Palavra do dia</h5>
                <p className='pb-4 text-gray-600 text-base font-normal text-center'>Explore uma nova palavra todos os dias com a nossa "Palavra do Dia".</p>

              </div>

              <div className='p-4 flex flex-col justify-center items-center bg-white rounded-2xl  overflow-visible'>

                <h5 className='p-2 text-xl font-semibold text-center text-gray-950'>Palavra do dia</h5>
                <p className='pb-4 text-gray-600 text-base font-normal text-center'>Explore uma nova palavra todos os dias com a nossa "Palavra do Dia".</p>
                <div>
                  <img src="/feature-3.svg" alt="" />
                </div>


              </div>
            </div>

          </div>


        </div>


      </div>
      <div className='bg-white min-h-[30vh]'>

      </div>


    </section>
  )
}

export default Feature