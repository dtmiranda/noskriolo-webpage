import React from 'react'

function Feature() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <div className='flex justify-center items-center'>
        <div className="mb-6 mb:8 lg:mb-10 relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg  bg-gradient-to-br from-purple-600 to-blue-500 dark:text-white focus:ring-4 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Features
          </span>
        </div>
      </div>

      <div className='gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 lg:grid-cols-3'>
        <div className='grid-cols-1'>

          <div className='flex justify-center items-center lg:justify-end lg:items-end flex-col'>
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative text-4xl font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                1
              </span>
            </div>
            <h3 className='mb-2 text-xl font-semibold dark:text-white text-right'>Desperte sua curiosidade diaria</h3>
            <p className='text-justify lg:text-right text-gray-500 dark:text-gray-400'>Explore uma nova palavra do Crioulo Cabo-verdiano todos os dias com a nossa "Palavra do Dia". Uma dose diária de conhecimento que expandirá seus horizontes linguísticos.</p>
          </div>

          <div className='mt-16 flex justify-center items-center lg:justify-end lg:items-end flex-col'>
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative text-4xl font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                2
              </span>
            </div>
            <h3 className='mb-2 text-xl font-semibold dark:text-white text-right'>Reviva suas Descobertas</h3>
            <p className='text-justify lg:text-right text-gray-500 dark:text-gray-400'>Mantenha o controle das suas jornadas linguísticas com a "Lista de Palavras Recentes". Cada pesquisa é uma conquista, e você pode revisitar suas descobertas a qualquer momento.</p>
          </div>


        </div>

        <img src="/feature-image.svg" className='hidden lg:inline' alt="" />

        <div className='grid-cols-1'>

          <div className='mt-16 flex justify-center items-center lg:justify-end lg:items-end flex-col'>
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative text-4xl font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                3
              </span>
            </div>
            <h3 className='mb-2 text-xl font-semibold text-left dark:text-white '>Sabedoria em Cada Provérbio</h3>
            <p className='text-justify lg:text-right text-gray-500 dark:text-gray-400'>Mergulhe na riqueza cultural com nossa coleção de "Provérbios e Traduções". Cada provérbio é uma janela para a alma do Crioulo Cabo-verdiano, compartilhando sabedoria e tradição.</p>
          </div>

          <div className='mt-16 flex justify-center items-center lg:justify-end lg:items-end flex-col'>
            <div className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-green-400 to-blue-600 dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative text-4xl font-bold px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                4
              </span>
            </div>
            <h3 className='mb-2 text-xl font-semibold dark:text-white text-left'>A Língua em Ação</h3>
            <p className='text-justify lg:text-right text-gray-500 dark:text-gray-400'>Conecte-se com o Crioulo Cabo-verdiano de maneira prática com "Exemplos de Uso". Não apenas palavras, mas experiências, para que você possa incorporar essa língua vibrante em sua vida diária.</p>
          </div>


        </div>
      </div>


    </section>
  )
}

export default Feature