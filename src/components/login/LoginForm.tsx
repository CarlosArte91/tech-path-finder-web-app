import { useState, useRef, useContext } from 'react'
import Image from 'next/image'
import loginImage from '../../../public/login_image.png'
import { login } from '@/services/users.service'
import Loading from '@/components/shared/Loading'
import { saveCurrentUser } from '@/utils/currentUser'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'
import Swal from 'sweetalert2'

export default function LoginForm() {
  const router  = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const context = useContext(UserContext)

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const delay = (ms: number) => new Promise(resolve => {
    timeoutIdRef.current = setTimeout(resolve, ms)
  })

  const loginUser = async (email: string, password: string) => {
    setIsLoading(true)

    const createLogin = login(email, password)
    const delayPromise = delay(1000)

    try {
      const [{ data }] = await Promise.all([createLogin, delayPromise])
      if (data) {
        await saveCurrentUser(data)
        context?.setUser({
          id: data.id,
          username: data.username,
          email:data.email,
        })
      }
      setIsLoading(false)
      router.push('/')      
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Usuario o contraseña incorrectos",
        text: "Verifica tus credenciales",
      })
      setEmail('')
      setPassword('')
      setIsLoading(false)
    }    
  }

  const goToRegister = (event: any) => {
    event.preventDefault()
    router.push('/register')
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)

    loginUser(email, password)
  }

  return (
    <div className='flex justify-center border border-slate-300 px-[50px] gap-[30px] rounded-xl shadow-xl relative'>
      {isLoading && <Loading size={150} loading={isLoading} round={'xl'} />}
      
      <form onSubmit={onSubmit} className='px-[50px] w-[400px] pt-[80px]'>
        <div className='flex flex-col gap-6 mb-[30px]'>
          <h3 className='text-[30px] font-bold text-center text-[#1e293b]'>
            Inicio de sesión
          </h3>

          <div className='text-[15px] text-[#1e293b] flex gap-[6px] justify-center'>
            <span>
              Si aun no tienes cuenta
            </span>
            <button
              className='hover:text-[#0891b2] font-semibold underline'
              onClick={goToRegister}
            >
              regístrate aquí
            </button>
          </div>
        </div>

        <div className='flex flex-col gap-[20px] mb-[40px]'>
          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='email'>Correo electrónico</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='text'
              id='email'
              value={email}
              onChange={onChangeEmail}
            />
          </div>

          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='password'>Contraseña</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='password'
              id='password'
              value={password}
              onChange={onChangePassword}
            />
          </div>
        </div>

        <div>
          <button className='bg-[#1e293b] w-full rounded-md py-[8px] hover:bg-[#334155] text-white'>
            Ingresar
          </button>
        </div>
      </form>

      <div className='flex items-center'>
        <Image
          src={loginImage}
          alt='Fondo del login'
          width={480}
        />
      </div>
    </div>
  )
}
