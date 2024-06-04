import ProfileForm from '@/components/profile/Profile'

export default function Profile() {
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
