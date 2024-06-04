import { Button, Group, Input, Select } from '@mantine/core'

export default function Offers() {
  return (
    <div className='layoutContainer '>
      <div className='offersTableContainer'>
        <div className='offersTableHeader'>
          <div className='p-2 flex justify-center items-center '>País:
            <Input placeholder='Colombia' size='xs' radius='xs' className='px-2' disabled />
          </div>
          <div className='p-2 flex justify-center items-center '>Categoría:
            <Select placeholder='Framework' size='xs' radius='xs' className='px-2' />
          </div>

          <div className='p-2 flex justify-center items-center '>Palabra clave en el título:
            <Input placeholder='Especialización' size='xs' radius='xs' className='px-2' />
          </div>
          <div className='flex justify-center items-center p-4'>
            <Group>
              <Button bg={'#12B886'} radius={0} size='xl'  >Filtrar</Button>
            </Group>
          </div>
        </div>
        <div className='flex justify-center text-3xl'>Este es el título dinámico</div>
        <div className='offersTableContent'>
          {itemsHeaderTableArray.map((item, index) =>
            <div key={index} className='itemsHeaderTableText flex justify-center items-center h-[8vh] bg-[#7950F2]'>
              {item.name}
            </div>
          )}
          {itemsTableSubArray.map((item, index) =>
            <div key={index}>
              <div className='itemsTableDescription flex justify-center items-center' >
                {item.type}
              </div>
              <div className='itemsTableDescription flex justify-center items-center' >
                {item.tentechnology}
              </div>
              <div className='itemsTableDescription flex justify-center items-center' >
                {item.totalOffers}
              </div>
              <div className='itemsTableDescription flex justify-center items-center' >
                $ {item.averageWage}
              </div>
              <div className='itemsTableDescription flex justify-center items-center' >
                $ {item.higherSalary}
              </div>
              <div className='itemsTableDescription flex justify-center items-center' >
                $ {item.lowerSalary}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const itemsHeaderTableArray = [
  { name: 'Tipo' },
  { name: 'Tecnología' },
  { name: 'Total ofertas' },
  { name: 'Slario promedio (COP)' },
  { name: 'Salario más alto (COP)' },
  { name: 'Salario más bajo (COP)' },
]

const itemsTableSubArray = [
  {
    type: 'Lenguaje de programación',
    tentechnology: 'Java',
    totalOffers: '2842',
    averageWage: '6,161,000',
    higherSalary: '7,582,000',
    lowerSalary: '3,500,000',

  },
  {
    type: 'Lenguaje de programación',
    tentechnology: 'Python',
    totalOffers: '2493',
    averageWage: '5,261,000',
    higherSalary: '6,351,000',
    lowerSalary: '4,500,000',

  },
  {
    type: 'Lenguaje de programación',
    tentechnology: 'JavaScript',
    totalOffers: '3230',
    averageWage: '4,595,000',
    higherSalary: '7,582,000',
    lowerSalary: '2,500,000',

  },
  {
    type: 'Lenguaje de programación',
    tentechnology: 'C#',
    totalOffers: '541',
    averageWage: '5,393,100',
    higherSalary: '7,582,000',
    lowerSalary: '3,500,000',

  },
  {
    type: 'Framework',
    tentechnology: 'Angular',
    totalOffers: '1596',
    averageWage: '5,161,000',
    higherSalary: '6,582,000',
    lowerSalary: '2,500,000',

  },
]
