import LoginForm from '@/components/login/LoginForm'

export default function Login() {
  return (
    <section
      className='
        bg-[#ffff]
        m-[15px]
        h-[845px]
        rounded-md
        shadow-lg
        px-[20px]
        py-[120px]
        flex
        justify-center
      '
    >
      <LoginForm />
    </section>
  )
}
