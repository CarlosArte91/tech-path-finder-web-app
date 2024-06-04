import MenuButton from './MenuButton'
import Image from 'next/image'
import logo from '../../../public/chrome_QdvpIa9Cpt-removebg-preview.png'
import { useRouter } from 'next/router'

export default function Sidebar() {
  const router  = useRouter()

  return (
    <aside className='bg-[#1e293b] w-[250px] h-screen'>
      <div className='h-[100px] flex justify-center items-center'>
        <Image
          src={logo}
          alt='Application logo'
          width={180}
        />
      </div>

      <section className='flex flex-col gap-[8px] mt-[20px]'>
        {menuButtons.map((menuButton: any) => (
          <MenuButton
            key={menuButton.id}
            text={menuButton.text}
            onClick={() => router.push(menuButton.goTo)}
          />
        ))}
      </section>
    </aside>
  )
}

const menuButtons: any = [
  {
    id: 1,
    text: 'Ofertas',
  },
  {
    id: 2,
    text: 'Gráficas',
  },
  {
    id: 3,
    text: 'Perfil',
    goTo: '/profile'
  },
  {
    id: 4,
    text: 'Nosotros',
  },
]
