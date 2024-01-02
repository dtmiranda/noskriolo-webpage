import React from 'react'

const Translate = () => {
  return (
    <section className='p-4 min-h-screen bg-white sm:p-6 dark:bg-gray-800'>
      <div className='mx-auto max-w-screen-xl'>

        <div className='p-3 my-8 lg:my-16 lg:max-w-sm flex justify-start items-center border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'>
          <svg className="w-8 h-8 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <div>

            <h3 className="mb-2 text-lg font-bold dark:text-white">Traduzir Criolo</h3>
            <p className="text-gray-500 dark:text-gray-400">Para mais de 100 idiomas diferente</p>

          </div>

        </div>

        <div className='flex justify-between items-center mb-1'>

          <select id="default" className="min-w-1/2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Escolha um idioma</option>
            <option value="cr-cr">Criolo</option>
            <option value="fr-fr">Francês</option>
            <option value="en-en">Inglês</option>
            <option value="pt-pt">Português</option>
          </select>


          <button type="button" className="p-2  text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 14 3-3m-3 3 3 3m-3-3h16v-3m2-7-3 3m3-3-3-3m3 3H3v3" />
            </svg>
            <span className="sr-only">Attach file</span>
          </button>


          <select id="default" className="min-w-1/2 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Escolha um idioma</option>
            <option value="cr-cr">Criolo</option>
            <option value="fr-fr">Francês</option>
            <option value="en-en">Inglês</option>
            <option value="pt-pt">Português</option>
          </select>



        </div>

        <div className='lg:flex lg:justify-center lg:items-center'>


          <div className="w-full mb-4 border lg:mr-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 19">
                      <path d="M15 5a1 1 0 0 0-1 1v3a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a1 1 0 0 0-2 0v3a6.006 6.006 0 0 0 6 6h1v2H5a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9v-2h1a6.006 6.006 0 0 0 6-6V6a1 1 0 0 0-1-1Z" />
                      <path d="M9 0H7a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Z" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>

                </div>

                {/* <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                  <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4" />
                    </svg>
                    <span className="sr-only">Add list</span>
                  </button>
                </div> */}
              </div>

              <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>

                <span className="sr-only">Limpar</span>
              </button>

            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg  dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">Publish post</label>
              <textarea id="editor" rows={12} className="block w-full px-0 text-sm text-gray-800 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="" required></textarea>
            </div>
          </div>


          <div className="w-full mb-4 border lg:ml-2 border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                  <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.111 5.889a5.888 5.888 0 0 1 0 6.222M17.173 2.7A11.372 11.372 0 0 1 19 9a11.4 11.4 0 0 1-1.777 6.222M9.349 1.415 4 6H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2l5.349 4.585A1 1 0 0 0 11 15.826V2.174a1 1 0 0 0-1.651-.759Z" />
                    </svg>
                    <span className="sr-only">ouvir</span>
                  </button>

                </div>

                <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                  <button type="button" className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                    <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.708 2.292.706-.706A2 2 0 0 1 9.828 1h6.239A.97.97 0 0 1 17 2v12a.97.97 0 0 1-.933 1H15M6 5v4a1 1 0 0 1-1 1H1m11-4v12a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V9.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 5h5.239A.97.97 0 0 1 12 6Z" />
                    </svg>
                    <span className="sr-only">Add list</span>
                  </button>
                </div>
              </div>

              {/*  <button type="button" data-tooltip-target="tooltip-fullscreen" className="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>

                  <span className="sr-only">Limpar</span>
                </button> */}

            </div>
            <div className="px-4 py-2 bg-white rounded-b-lg  dark:bg-gray-800">
              <label htmlFor="editor" className="sr-only">Tradução</label>
              <textarea id="editor" rows={12} className="block w-full px-0 text-sm text-gray-800 bg-white dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="Tradução"></textarea>
            </div>
          </div>

        </div>
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Traduzir</button>


      </div>


    </section>
  )
}

export default Translate