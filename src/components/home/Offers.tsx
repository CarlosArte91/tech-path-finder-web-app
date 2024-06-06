import DataTable from 'react-data-table-component'
import { IoMdSearch } from "react-icons/io";
import { findAll } from '@/services/technologies.service'
import { findCategories } from '@/services/categories.service'
import { useEffect, useState } from 'react'
import { offersAdapter } from './offersAdapter'
import { useRouter } from 'next/router'

export default function Offers() {
  const router = useRouter()
  const [offers, setOffers] = useState([])
  const [categories, setCategories] = useState([])
  const [keyword, setKeyword] = useState('')
  const [categorySelected, setCategorySelected] = useState('')

  const customStyles = {
    rows: {
      style: {
        minHeight: '53px',
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
        borderRight: '1px solid #d1d5db'
      },
    },
  }

  const handleChange = (event: any) => {
    setKeyword(event?.target.value)
  }

  const handleSelect = (event: any) => {
    setCategorySelected(event.target.value)
  }

  const goOffers = () => {
    if (keyword) {
      router.push(`/offers?keyword=${keyword}`)
    }
  }

  const getTechnologies = async () => {
    const categories = await findCategories()
    setCategories(categories.data)

    const technologies = await findAll()
    setOffers(offersAdapter(technologies.data, categories.data))
  }

  useEffect(() => {
    if (categorySelected) {
      router.push(`/offers?keyword=${categorySelected}`)
    }
  }, [categorySelected])

  useEffect(() => {
    getTechnologies()
  }, [])

  return (
    <>
      <section
        className='bg-[#ffff] mx-[15px] my-[12px] rounded-md shadow-lg px-[50px] py-[25px] text-[#0f172a]'
      >
        <div className='flex items-center justify-around'>
          <div className='flex gap-[10px] items-center'>
            <label className='font-semibold'>País</label>
            <input
              className='border border-gray-400 h-[30px] rounded-md focus:outline-none pl-[6px]'
              type="text"
              placeholder='Colombia'
              disabled
            />
          </div>

          <div className='flex gap-[10px] items-center'>
            <label className='font-semibold'>Categoría</label>
            <select
              className='border border-gray-400 h-[30px] rounded-md focus:outline-none w-[200px] pl-[6px]'
              name="category"
              onChange={handleSelect}
            >
              <option value=''></option>
              {categories && categories.map((category: any) => (
                <option key={category.id} value={category.name}>{category.name}</option>
              ))}
            </select>
          </div>

          <div className='flex gap-[10px] items-center'>
            <label className='font-semibold'>Buscar por palabra clave</label>
            <input
              className='border border-gray-400 h-[30px] rounded-md focus:outline-none pl-[6px]'
              type="text"
              value={keyword}
              onChange={handleChange}
            />
          </div>

          <div>
            <button
              className='
                bg-[#0f172a] text-[16px] text-white hover:bg-[#334155] rounded-md
                flex gap-[6px] py-[8px] px-[25px] justify-center items-center
              '
              onClick={goOffers}
            >
              <IoMdSearch size={20} />
              <span>Filtrar</span>
            </button>
          </div>
        </div>        
      </section>

      <section
        className='bg-[#ffff] mx-[15px] mb-[14px] h-[748px] rounded-md shadow-lg px-[50px] py-[15px]'
      >
        <h2 className='text-[#0f172a] text-center text-[20px] font-semibold mb-[15px]'>
          Ofertas por tecnología
        </h2>

        <div className='border border-[#9ca3af] rounded-[8px] overflow-hidden shadow-md'>
          <DataTable
            columns={columns}
            data={offers}
            pagination
            customStyles={customStyles}
          />
        </div>        
      </section>
    </>
  )
}

const columns: any = [
  {
    name: 'Tipo',
    selector: (row: any) => row.type,
    sortable: true,
  },
  {
    name: 'Tecnología',
    selector: (row: any) => row.tech,
    sortable: true,
  },
  {
    name: 'Total ofertas',
    selector: (row: any) => row.total,
    sortable: true,
  },
  {
    name: 'Salario Promedio (COP)',
    selector: (row: any) => row.average,
    sortable: true,
  },
  {
    name: 'Salario alto (COP)',
    selector: (row: any) => row.highest,
    sortable: true,
  },
  {
    name: 'Salario bajo (COP)',
    selector: (row: any) => row.lowest,
    sortable: true,
  },
]
