import { IoMdClose } from "react-icons/io"
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoCloseCircleSharp } from "react-icons/io5";
import { SlClose } from "react-icons/sl";

interface ModalProps {
  offer: any
  show: boolean
  onClose: () => void
}

export default function ShowOffer({ offer, show, onClose }: ModalProps) {
  if (!show) {
    return null
  }

  return (
    <div
      className="fixed inset-0 bg-[#020617] bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white px-[50px] pt-[20px] pb-[30px] rounded-md shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-2 top-2 text-[#1e293b] hover:text-[#0891b2]"
          onClick={onClose}
        >
          <SlClose size={24} />
        </button>

        <h2 className="text-center text-[24px] font-bold mb-[10px]">Detalle de la oferta</h2>

        <div>
          <table>
            <tbody>
              {temOffer.map((tem: any) => (tem.id !== 7 ? (
                <tr key={tem.id}>
                  <td className="border border-gray-500 px-[10px] py-[7px] font-bold">
                    {tem.title}
                  </td>

                  <td className="border border-gray-500 px-[10px] py-[7px]">
                    {offer[tem.data]}
                  </td>
                </tr>
              ) : (
                <>
                  <tr key={tem.id}>
                    <td
                      className="border border-gray-500 px-[10px] py-[7px] font-bold text-center"
                      colSpan={2}
                    >
                      {tem.title}
                    </td>
                  </tr>

                  <tr key={tem.id}>
                    <td
                      className="border border-gray-500 px-[10px] py-[7px]"
                      colSpan={2}
                    >
                      <div
                        className="max-w-[850px] max-h-[300px] text-[14px] px-[10px] overflow-y-auto"
                      >
                        <p>
                          {offer[tem.data]}
                        </p>
                      </div>
                    </td>
                  </tr>
                </>
              )))}
            </tbody>
          </table> 
        </div>
      </div>
    </div>
  )
}

const temOffer: any = [
  {
    id: 1,
    title: 'Empresa',
    data: 'companyName',
  },
  {
    id: 2,
    title: 'Sector',
    data: 'industry',
  },
  {
    id: 3,
    title: 'Título',
    data: 'title',
  },
  {
    id: 4,
    title: 'Tipo de contrato',
    data: 'contractType',
  },
  {
    id: 5,
    title: 'Salario',
    data: 'salary',
  },
  {
    id: 6,
    title: 'Jornada',
    data: 'workSchedule',
  },
  {
    id: 7,
    title: 'Descripción de la oferta',
    data: 'description',
  },
]
