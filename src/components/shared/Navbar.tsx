import { useContext } from 'react'
import { FaCircleUser } from 'react-icons/fa6'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'

export default function Navbar() {
  const context = useContext(UserContext)
  const router  = useRouter()

  return (
    <section className='bg-white h-[70px] text-[#1e293b] w-full flex justify-between px-[40px] items-center'>
      <div>
        {context?.user.username ? (
          <h3 className='text-[25px] font-semibold'>
            {`¡Bienvenido ${context.user.username}!`}
          </h3>
        ) : null}
      </div>

      <div className='pr-[30px] flex gap-[60px] items-center'>
        <ul className='flex gap-5 h-full font-semibold'>
          {navigation(context?.user.username).map((item: any) => (
            <li
              key={item.id}
              className='hover:underline hover:text-[#0891b2] cursor-pointer'
              onClick={() => router.push(item.goTo)}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <FaCircleUser size={36} />
      </div>
    </section>
  )
}

function navigation(username: any) {
  return [
    {
      id: 1,
      text: 'Inicio',
      goTo: '/',
    },
    {
      id: 2,
      text: 'Nosotros',
      goTo: '/about',
    },
    {
      id: 3,
      text: username ? 'Perfil' : 'Iniciar sesión',
      goTo: username ? '/profile' : '/login',
    },
  ]
}
