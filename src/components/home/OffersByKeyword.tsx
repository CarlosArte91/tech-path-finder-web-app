import DataTable from 'react-data-table-component'
import { IoChevronBack } from "react-icons/io5";
import {  getByKeyword } from '@/services/offers.service'
import { useEffect, useState } from 'react'
import { offersByKeywordAdapter } from './offersAdapter'
import { useRouter } from 'next/router'
import BasicLoading from '../shared/BasicLoading';
import ShowOffer from './ShowOffer'

export default function Offers() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const [offers, setOffers] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [offerToShow, setOfferToShow] = useState({})
  const [keyword, setKeyword] = useState<string>('')

  const customStyles = {
    rows: {
      style: {
        minHeight: '55px',
        fontSize: '15px',
      },
    },
    headCells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        fontSize: '16px',
        backgroundColor: '#9ca3af',
        color: '#1f2937',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px',
        paddingRight: '8px',
        borderBottom: '1px solid #d1d5db',
        borderRight: '1px solid #d1d5db',
        cursor: 'pointer',
      },
    },
  }

  const showOffer = (row: any) => {
    setOfferToShow(row)
    setOpenModal(true)
  }

  const getOffers = async () => {
    const { data } = await getByKeyword(router.query.keyword)
    setOffers(offersByKeywordAdapter(data))
    setIsLoading(false)
  }

  useEffect(() => {
    if (router.query.keyword) {
      getOffers()
      setKeyword(router.query.keyword.toString())
    }
  }, [router.query])

  return (
    <>
      <ShowOffer offer={offerToShow} show={openModal} onClose={() => setOpenModal(false)} />
      
      <section
        className='bg-[#ffff] mx-[15px] my-[15px] h-[845px] rounded-md shadow-lg px-[50px] py-[25px]'
      >
        <div className='mb-[25px] relative'>
          <h2 className='text-[#0f172a] text-center text-[20px] font-semibold'>
            {`Ofertas disponibles para ${keyword.toUpperCase()}`}
          </h2>

          <div className='absolute right-[50px] -top-[3px]'>
              <button
                className='
                  bg-[#0f172a] text-[16px] text-white hover:bg-[#334155] rounded-md
                  flex gap-[6px] py-[8px] px-[20px] justify-center items-center
                '
                onClick={() => router.push('/')}
              >
                <IoChevronBack size={20} />
                <span>Volver</span>
              </button>
            </div>
        </div>

        <div className='border border-[#9ca3af] rounded-[8px] overflow-hidden shadow-md max-w-[1600px]'>
          <DataTable
            columns={columns}
            data={offers}
            pagination
            paginationPerPage={11}
            customStyles={customStyles}
            progressPending={isLoading}
            progressComponent={<BasicLoading />}
            onRowClicked={showOffer}
          />
        </div>        
      </section>
    </>
  )
}

const columns: any = [
  {
    name: 'Empresa',
    selector: (row: any) => row.companyName,
    sortable: true,
  },
  {
    name: 'Sector',
    selector: (row: any) => row.industry,
    sortable: true,
  },
  {
    name: 'Título',
    selector: (row: any) => row.title,
    sortable: true,
  },
  {
    name: 'Tipo de contrato',
    selector: (row: any) => row.contractType,
    sortable: true,
  },
  {
    name: 'Jornada laboral',
    selector: (row: any) => row.workSchedule,
    sortable: true,
  },
  {
    name: 'Salario',
    selector: (row: any) => row.salary,
    sortable: true,
  },
]
