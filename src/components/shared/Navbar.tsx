import { FaCircleUser } from "react-icons/fa6"

export default function Navbar() {
  return (
    <section className="bg-white h-[70px] text-[#1e293b] w-full flex justify-between px-[40px] items-center">
      <div>
        <h3 className="text-[25px] font-semibold">¡Bienvenido Carlos!</h3>
      </div>

      <div className="pr-[30px] flex gap-[60px] items-center">
        <ul className="flex gap-5 h-full font-semibold">
          <li className="hover:underline hover:text-[#0891b2] cursor-pointer">Inicio</li>
          <li className="hover:underline hover:text-[#0891b2] cursor-pointer">Perfil</li>
          <li className="hover:underline hover:text-[#0891b2] cursor-pointer">Nosotros</li>
        </ul>

        <FaCircleUser size={36} />
      </div>
    </section>
  )
}
