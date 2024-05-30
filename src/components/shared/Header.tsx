import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='headerContainer '>
            <div className='headerTitleText mr-2 ml-[20%]'>
                <h1>¡Bienvenido! Carlos</h1>
            </div>
            <Link href={'/'} className='flex justify-center items-center mx-2 sideBarText hover:bg-[#12B886]'>
                INICIO
            </Link>
            <Link href={'about'} className='flex justify-center items-center mx-2 sideBarText hover:bg-[#12B886]'>
                ABOUT
            </Link>

        </div>
    )
}
