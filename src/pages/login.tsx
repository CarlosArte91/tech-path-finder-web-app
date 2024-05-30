import LoginForm from "@/components/login/LoginForm";
import Image from 'next/image'
import loginImage from '../../public/login_image.png'

export default function Login() {
  return (
    <section
      className="bg-[#ffff] m-[15px] h-[845px] rounded-md shadow-lg px-[20px] py-[120px] flex justify-center"
    >
      <div className="flex justify-center border border-slate-300 px-[50px] gap-[30px] rounded-xl shadow-xl">
        <LoginForm />
        <div className="flex items-center">
          <Image
            src={loginImage}
            alt="Fondo del login"
            width={480}
          />
        </div>
      </div>
    </section>
  )
}
