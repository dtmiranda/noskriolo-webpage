'use client'

import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'
import * as  yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { data } from 'autoprefixer'


type FormData = {
  name: string;
  email: string;
  message: string;
}


const messageSchema = yup.object({
  name: yup.string().min(2).required(),
  email: yup.string().email().required(),
  message: yup.string().required()
})



const Contact = () => {



  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({
    resolver: yupResolver(messageSchema)
  });

  const form = useRef()

  const [loading, setLoading] = useState(false);
  const [infoAlert, setInfoAlert] = useState("")
  const [errorAlert, setErrorAlert] = useState("")


  const onSubmit = async (emailData: FormData) => {

    console.log("EMAIL_SERVICE: " + process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID)

    const templateParams = {
      from_name: emailData.name,
      to_name: process.env.NEXT_PUBLIC_MY_EMAIL || '',
      from_email: emailData.email,
      to_email: process.env.NEXT_PUBLIC_NAME || "",
      message: emailData.message,
    };


    await emailjs.init(process.env.NEXT_PUBLIC_PUBLIC_KEY || "");

    try {
      setLoading(true);

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || "",
        templateParams,
      );

      console.log(emailData)

      setInfoAlert('Message sent successfully.');

    } catch (error) {

      setErrorAlert('Message sending failed.');

    } finally {

      setLoading(false)

    }

    reset();
  };



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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className='my-20 lg:grid lg:grid-cols-2 lg:gap-6 '>

            <div>

              <div className='lg:pt-10'>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nome</label>
                <input
                  type="text"
                  {...register("name")}

                  id="subject"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Como podemos te ajudar"
                  required
                />
                <p className=' my-2 text-red-300'>{errors.name?.message}</p>
              </div>

              <div >
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Seu email</label>
                <input
                  type="email"
                  {...register("email")}
                  id="email"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Digite aqui o seu email"
                  required
                />
                <p className=' my-2 text-red-300'>{errors.name?.message}</p>

              </div>

            </div>

            <div className="lg:grid">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Sua messagem</label>
              <textarea
                id="message"
                {...register("message")}
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Deixe aqui a sua menssagem...">

              </textarea>
              <p className=' my-2 text-red-300'>{errors.name?.message}</p>

            </div>


            {infoAlert == ""
              ? (<p></p>)
              : (
                <div className="flex items-center p-4 mb-1 text-sm text-green-800 rounded-lg bg-green-200 dark:bg-gray-800 dark:text-green-400" role="alert">
                  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Success alert!</span>{infoAlert}
                  </div>
                </div>
              )}

            {errorAlert == ""
              ? (<p></p>)
              : (
                <div className="flex items-center p-4 mb-1 text-sm text-red-800 rounded-lg bg-red-200 dark:bg-gray-800 dark:text-red-400" role="alert">
                  <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div>
                    <span className="font-medium">Error alert!</span> {errorAlert}
                  </div>
                </div>
              )}


            <button
              type="submit"
              className="mt-5 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              {loading ? 'Enviando...' : 'Enviar'}
            </button>

          </div>

        </form>

      </div>
    </section>
  )
}

export default Contact