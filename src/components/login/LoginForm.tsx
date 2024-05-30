export default function LoginForm() {
  return (
    <form className="px-[50px] w-[400px] pt-[80px]">
      <div className="flex flex-col gap-6 mb-[30px]">
        <h3 className="text-[30px] font-bold text-center text-[#1e293b]">
          Inicio de sesión
        </h3>

        <div className="text-[15px] text-[#1e293b] flex gap-[6px] justify-center">
          <span>
            Si aun no tienes cuenta
          </span>
          <button className="hover:text-[#0891b2] font-semibold underline">
            regístrate aquí
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-[20px] mb-[40px]">
        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="email">Correo electrónico</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="text" id="email" />
        </div>

        <div className="flex flex-col gap-1 text-[15px] font-semibold">
          <label className="pl-[4px]" htmlFor="password">Contraseña</label>
          <input className="h-[35px] rounded-md pl-[10px] border border-slate-700" type="password" id="password" />
        </div>
      </div>

      <div>
        <button className="bg-[#1e293b] w-full rounded-md py-[8px] hover:bg-[#334155] text-white">
          Ingresar
        </button>
      </div>
    </form>
  )
}
