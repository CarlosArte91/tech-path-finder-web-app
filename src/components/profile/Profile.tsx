import { RiDeleteBin6Fill } from 'react-icons/ri'
import { BsDoorClosedFill } from 'react-icons/bs'
import { useEffect, useState, useRef } from 'react'
import { update, deleteById } from '@/services/users.service'
import { useContext } from 'react'
import { UserContext } from '@/context/UserContext'
import { useRouter } from 'next/router'
import Loading from '@/components/shared/Loading'
import Swal from 'sweetalert2'

export default function ProfileForm() {
  const context = useContext(UserContext)
  const router  = useRouter()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
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

  const onChangeConfirmPassword = (event: any) => {
    setConfirmPassword(event.target.value)
  }

  const delay = (ms: number) => new Promise(resolve => {
    timeoutIdRef.current = setTimeout(resolve, ms)
  })

  const updateUser = async (user: any) => {
    setIsLoading(true)

    const updateUserPromise = update(user)
    const delayPromise = delay(1000)

    const [{ data }] = await Promise.all([updateUserPromise, delayPromise])

    setIsLoading(false)
    setPassword('')
    setConfirmPassword('')
    Swal.fire({
      icon: "success",
      title: "El usuario se actualizó correctamente",
      showConfirmButton: false,
      timer: 1500
    })
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    setIsLoading(true)

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "las contraseñas no coinciden",
        text: "Los campos deben coincidir",
      })
      setIsLoading(false)
    } else {
      const user = {
        id: context?.user.id,
        username,
        email,
        password,
        createdAt: Date.now(),
      }
      updateUser(user)
    }
  }
  
  const deleteUser = async (id: any) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Se eliminará el usuario permanentemente!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1e293b",
      cancelButtonColor: "#f43f5e",
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true)
        const deleteUserPromise = deleteById(id)
        const delayPromise = delay(1000)

        const [{ data }] = await Promise.all([deleteUserPromise, delayPromise])

        context?.logout()
        setIsLoading(false)
        router.push('/')

        Swal.fire({
          title: "Usuario Borrado",
          text: "Te haz dado de baja de la web.",
          icon: "success"
        });
      }
    })
  }

  const buttonDelete = (event: any) => {
    event.preventDefault()
    deleteUser(context?.user.id)
  }

  const goHome = (event: any) => {
    event.preventDefault()
    router.push('/')
  }

  useEffect(() => {
    if (context?.user.id) {
      setUsername(context.user.username)
      setEmail(context.user.email)
    }
  }, [context?.user.id])

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
            Información de perfil
          </h3>
        </div>

        <div className='flex flex-col gap-[20px] mb-[40px]'>
          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='name'>Nombre</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='text'
              id='name'
              value={username}
              onChange={onChangeUsername}
            />
          </div>

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
            <label className='pl-[4px]' htmlFor='password'>Nueva contraseña</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='password'
              id='password'
              value={password}
              onChange={onChangePassword}
            />
          </div>

          <div className='flex flex-col gap-1 text-[15px] font-semibold'>
            <label className='pl-[4px]' htmlFor='confirm-password'>Confirmar contraseña</label>
            <input
              className='h-[35px] rounded-md pl-[10px] border border-slate-700'
              type='password'
              id='confirm-password'
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
          </div>
        </div>

        <div className='flex justify-around'>
          <button className='bg-[#1e293b] px-[20px] rounded-md py-[8px] hover:bg-[#334155] text-white'>
            Guardar
          </button>

          <button
            className='bg-[#f43f5e] px-[20px] rounded-md py-[8px] hover:bg-[#fb7185] text-white'
            onClick={goHome}
          >
            Cancelar
          </button>
        </div>

        <button
          className='mt-[50px] text-[14px] font-bold text-[#4c0519] hover:text-[#be123c] flex gap-2'
          onClick={() => context?.logout()}
        >
          <BsDoorClosedFill size={18} />
          <span>Cerrar sesión</span>
        </button>

        <button
          className='mt-[20px] text-[14px] font-bold text-[#4c0519] hover:text-[#be123c] flex gap-2'
          onClick={buttonDelete}
        >
          <RiDeleteBin6Fill size={18} />
          <span>Eliminar mi cuenta</span>
        </button>
      </form>
    </div>  
  )
}
