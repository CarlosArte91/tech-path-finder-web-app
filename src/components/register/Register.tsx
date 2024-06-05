import { useEffect, useState, useRef } from 'react'
import { create } from '@/services/users.service'
import Loading from '@/components/shared/Loading'
import { useRouter } from 'next/router'

export default function ProfileForm() {
  const router  = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onChangeUsername = (event: any) => {
    setUsername(event.target.value)
  }

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event: any) => {
    setPassword(event.target.value)
  }

  const delay = (ms: number) => new Promise(resolve => {
    timeoutIdRef.current = setTimeout(resolve, ms)
  })

  const createUser = async (newUser: any) => {
    setIsLoading(true)

    const createUserPromise = create(newUser)
    const delayPromise = delay(1000)

    const [{ data }] = await Promise.all([createUserPromise, delayPromise])

    setIsLoading(false)
    router.push('/login')
  }

  const goToLogin = (event: any) => {
    event.preventDefault()
    router.push('/login')
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)

    const newUser = {
      username,
      email,
      password,
      createdAt: Date.now(),
    }

    createUser(newUser)
  }

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current)
      }
    }
  }, [])

  return (
    <div className='flex justify-center border border-slate-300 px-[80px] rounded-xl shadow-xl relative'>
      {isLoading && <Loading size={150} loading={isLoading} round={'xl'} />}
      
      <form onSubmit={onSubmit} className='px-[50px] w-[500px] pt-[60px]'>

        <div className='flex flex-col gap-4 mb-[40px]'>
          <h3 className='text-[30px] font-bold text-center text-[#1e293b]'>
            Crea tu usuario
          </h3>
        </div>

        <div className='flex flex-col gap-[20px] mb-[40px]'>
          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='name'>Nombre</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='text'
              id='name'
              onChange={onChangeUsername}
            />
          </div>

          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='email'>Correo electrónico</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='text'
              id='email'
              onChange={onChangeEmail}
            />
          </div>

          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='password'>Contraseña</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='password'
              id='password'
              onChange={onChangePassword}
            />
          </div>
        </div>

        <div className='flex justify-around'>
          <button className='bg-[#1e293b] px-[20px] rounded-md py-[8px] hover:bg-[#334155] text-white'>
            Guardar
          </button>

          <button
            className='bg-[#f43f5e] px-[20px] rounded-md py-[8px] hover:bg-[#fb7185] text-white'
            onClick={goToLogin}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>    
  )
}
