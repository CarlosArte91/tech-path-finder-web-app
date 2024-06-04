import { AppProps } from 'next/app'
import Head from 'next/head'
import {  MantineProvider, } from '@mantine/core'
import '../styles/global.css'
import '@mantine/core/styles.css'
import '@mantine/core/styles/global.css'
import Sidebar from '@/components/shared/Sidebar'
import Navbar from '@/components/shared/Navbar'
import { UserProvider } from '@/context/UserContext'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <title>TechPathFinder</title>
        <meta charSet='UTF-8'/>
        <meta name='description' content='Plataforma web para la orientación de estudiantes y profesionales en tecnologías de la información.' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <MantineProvider >
        <UserProvider>
          <main className='bg-slate-300 flex h-screen'>
            <Sidebar />
            <div className='w-full'>
              <Navbar />
              <Component {...pageProps} />
            </div>
          </main>
        </UserProvider>
      </MantineProvider>
    </>
  )
}
