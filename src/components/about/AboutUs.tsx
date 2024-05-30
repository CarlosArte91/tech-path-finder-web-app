import Link from 'next/link'
import React from 'react'
import { itemsSidebarArray } from '@/utils/itemsSidebarArray'

export default function AboutUs() {
  return (
    <div className='layoutContainer '>
      <div className='sideBarContainer py-[25vh]'>
        {itemsSidebarArray.map((item, index) =>
          <Link key={index} href={item.url} className=' sideBarText w-full h-full flex justify-center items-center'
            style={{ background: index === 3 ? '#12B886' : 'white' }}>
            <span className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-full h-full
            flex justify-center items-center'>
              {item.name}
            </span>
          </Link>

        )}
      </div>
      <div className='px-[10vh] pt-[10vh]'>
        <h1 className='flex justify-center  headerTitleText'>Acerca de TechPathFinder</h1>
        <div className='aboutDescriptionText'>
          <p className='py-[6vh]'>TechPathFinder es una plataforma web diseñada para ofrecer orientación estratégica a estudiantes y profesionales interesados en el campo de las tecnologías de la información. En un mundo donde la tecnología avanza rápidamente, puede ser abrumador mantenerse al día con las últimas tendencias y habilidades demandadas por el mercado laboral.</p>

          <p className='py-[3vh]'>Nuestra misión en TechPathFinder es ayudarte a navegar por este complejo panorama tecnológico, brindándote información actualizada sobre las habilidades más demandadas, las tendencias del mercado laboral y las oportunidades de carrera en el campo de la tecnología de la información.</p>

          <p className='py-[3vh]'>Con el respaldo de datos sólidos y análisis detallados, nuestra plataforma te ayudará a tomar decisiones informadas sobre tu desarrollo profesional, identificar las áreas de especialización más relevantes y trazar un camino claro hacia el éxito en el emocionante mundo de la tecnología.</p>

          <p>Únete a nosotros en TechPathFinder y comienza a explorar tu futuro en la tecnología de la información hoy mismo.</p>
        </div>

      </div>

    </div>

  )
}

