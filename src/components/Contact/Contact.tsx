import React from 'react'

const Contact = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900">
      <div className="py-20 lg:py-16 px-4 mx-auto max-w-screen-xl">

        <div className='grid grid-cols-6 gap-4'>
          <div className='col-start-1 col-end-2 flex justify-start items-start'>
            <div className='max-w-96'>
              <div className='mb-4 flex justify-start items-start'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
                <p className='pl-2 flex-col text-gray-800 text-lg font-medium'>Contate-nos</p>
              </div>

              <h4 className='text-2xl font-semibold text-gray-800' > <span className='text-primary-800'>Fale conosco:</span> Nos dê o seu feedback</h4>

            </div>

          </div>
          <div className=' col-end-7 col-span-3 flex justify-center items-end'>
            <div className='border border-l-4 border-l-yellow-500 border-y-0 border-r-0 pl-2'>
              <p className='text-gray-800 te text-base font-normal'>Algum problema técnico? Quer enviar feedback sobre uma funcionalidade beta? Precisa de detalhes sobre nosso plano de negócios? Avise-nos.</p>
            </div>
          </div>
        </div>

        <form action="#" className="space-y-8">
          <div className='my-20 lg:grid lg:grid-cols-2 lg:gap-6 '>

            <div>
              <div >
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu email</label>
                <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Digite aqui o seu email" required />
              </div>
              <div className='lg:pt-10'>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Assunto</label>
                <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Como podemos te ajudar" required />
              </div>
            </div>

            <div className="lg:grid">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua messagem</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Deixe aqui a sua menssagem..."></textarea>
            </div>
            <button type="submit" className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Enviar messagem</button>

          </div>

        </form>

      </div>
    </section>
  )
}

export default Contact