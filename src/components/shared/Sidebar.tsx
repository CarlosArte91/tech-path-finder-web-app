import MenuButton from './MenuButton'
import { BsDoorClosedFill } from 'react-icons/bs'
import { FaPowerOff } from 'react-icons/fa6'
import Image from 'next/image'
import logo from '../../../public/chrome_QdvpIa9Cpt-removebg-preview.png'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { UserContext } from '@/context/UserContext'

export default function Sidebar() {
  const context = useContext(UserContext)
  const router  = useRouter()

  return (
    <aside className='bg-[#1e293b] w-[250px] h-screen flex flex-col justify-between'>
      <div>
        <div className='h-[100px] flex justify-center items-center'>
          <Image
            src={logo}
            alt='Application logo'
            width={180}
          />
        </div>

        <section className='flex flex-col gap-[8px] mt-[30px]'>
          {menuButtons.map((menuButton: any) => (
            <MenuButton
              key={menuButton.id}
              text={menuButton.text}
              onClick={() => router.push(menuButton.goTo)}
            />
          ))}
        </section>
      </div>

      <div>
        {context?.user.id ? (
          <button
            className='
              bg-[#0f172a] text-[15px] text-white hover:bg-[#334155]
              flex gap-[8px] w-full py-[12px] justify-center items-center
            '
            onClick={() => context?.logout()}
          >
            <FaPowerOff size={20} />
            <span>Cerrar sesión</span>
          </button>
        ) : null}
      </div>
    </aside>
  )
}

const menuButtons: any = [
  {
    id: 1,
    text: 'Ofertas',
    goTo: '/',
  },
  {
    id: 2,
    text: 'Gráficas',
    goTo: '/graphics',
  },
  {
    id: 3,
    text: 'Perfil',
    goTo: '/profile',
  },
  {
    id: 4,
    text: 'Nosotros',
    goTo: '/about',
  },
]
