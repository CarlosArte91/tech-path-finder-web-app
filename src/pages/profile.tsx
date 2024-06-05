import ProfileForm from '@/components/profile/Profile'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/UserContext'

export default function Profile() {
  const context = useContext(UserContext)
  const router = useRouter()

  useEffect(() => {
    if (!context?.user?.id) {
      router.push('/login')
    }
  }, [context?.user?.id, router])

  if (!context?.user?.id) {
    return null
  }

  return (
    <section
      className='
        bg-[#ffff]
        m-[15px]
        h-[845px]
        rounded-md
        shadow-lg
        px-[20px]
        py-[60px]
        flex
        justify-center
      '
    >
      <ProfileForm />
    </section>
  )
}
