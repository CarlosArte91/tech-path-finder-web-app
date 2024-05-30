import { RiDeleteBin6Fill } from "react-icons/ri"

export default function ProfileForm() {
  return (
    <form className="px-[50px] w-[500px] pt-[60px]">
      <div className="flex flex-col gap-4 mb-[40px]">
        <h3 className="text-[30px] font-bold text-center text-[#1e293b]">
          Información de perfil
        </h3>
      </div>

      <div className="flex flex-col gap-[20px] mb-[40px]">
        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="name">Nombre</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="text" id="name" />
        </div>

        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="email">Correo electrónico</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="text" id="email" />
        </div>

        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="password">Nueva contraseña</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="password" id="password" />
        </div>

        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="password">Confirmar contraseña</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="password" id="password" />
        </div>
      </div>

      <div className="flex justify-around">
        <button className="bg-[#1e293b] px-[20px] rounded-md py-[8px] hover:bg-[#334155] text-white">
          Guardar
        </button>

        <button className="bg-[#f43f5e] px-[20px] rounded-md py-[8px] hover:bg-[#fb7185] text-white">
          Cancelar
        </button>
      </div>

      <button className="mt-[40px] text-[14px] font-bold text-[#4c0519] hover:text-[#be123c] flex gap-2">
        <RiDeleteBin6Fill size={18} />
        <span>Eliminar mi cuenta</span>
      </button>
    </form>
  )
}
