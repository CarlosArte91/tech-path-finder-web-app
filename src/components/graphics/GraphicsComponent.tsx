import { BarChart, LineChart } from '@mantine/charts'
import { Paper, Text } from '@mantine/core'

interface ChartTooltipProps {
    label: string
    payload: Record<string, any>[] | undefined
}

function ChartTooltip({ label, payload }: ChartTooltipProps) {
    if (!payload) return null

    return (
        <Paper px='md' py='sm' withBorder shadow='md' radius='md'>
            <Text fw={500} mb={5}>
                {label}
            </Text>
            {payload.map((item: any) => (
                <Text key={item.name} c={item.color} fz='sm'>
                    {item.name}: {item.value}
                </Text>
            ))}
        </Paper>
    )
}

export const data = [
    { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
    { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
    { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
    { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
    { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
    { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
]

export default function GraphicsComponent() {
  return (
    <div className='layoutContainer '>
      <div >
        <h1 className='graphicsTitleText flex justify-center text-4xl py-10'>Gráficas</h1>
          <div className='graphicsContainer '>
            <BarChart
                h={'30vh'}
                data={data}
                dataKey='month'
                type='stacked'
                tooltipProps={{
                    content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
                }}
                series={[
                    { name: 'Smartphones', color: 'violet.6' },
                    { name: 'Laptops', color: 'blue.6' },
                    { name: 'Tablets', color: 'teal.6' },
                ]}
            />
            <div>
                <BarChart
                    h={'30vh'}
                    data={data}
                    dataKey='month'
                    tooltipProps={{
                        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
                    }}
                    series={[
                        { name: 'Smartphones', color: 'violet.6' },
                        { name: 'Laptops', color: 'blue.6' },
                        { name: 'Tablets', color: 'teal.6' },
                    ]}
                />
            </div>
            <div>
                <BarChart
                    h={'30vh'}
                    data={data}
                    dataKey='month'
                    type='stacked'
                    orientation='vertical'
                    yAxisProps={{ width: 80 }}
                    tooltipProps={{
                        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
                    }}
                    series={[
                        { name: 'Smartphones', color: 'violet.6' },
                        { name: 'Laptops', color: 'blue.6' },
                        { name: 'Tablets', color: 'teal.6' },
                    ]}
                />
            </div>
            <div>
                <LineChart
                    h={'30vh'}
                    data={data2}
                    dataKey='date'
                    tooltipProps={{
                        content: ({ label, payload }) => <ChartTooltip label={label} payload={payload} />,
                    }}
                    series={[
                        { name: 'Apples', color: 'indigo.6' },
                        { name: 'Oranges', color: 'blue.6' },
                        { name: 'Tomatoes', color: 'teal.6' },
                    ]}
                />
            </div>

          </div>
      </div>
    </div>
  )
}

const data2 = [
    {
        date: 'Mar 22',
        Apples: 2890,
        Oranges: 2338,
        Tomatoes: 2452,
    },
    {
        date: 'Mar 23',
        Apples: 2756,
        Oranges: 2103,
        Tomatoes: 2402,
    },
    {
        date: 'Mar 24',
        Apples: 3322,
        Oranges: 986,
        Tomatoes: 1821,
    },
    {
        date: 'Mar 25',
        Apples: 3470,
        Oranges: 2108,
        Tomatoes: 2809,
    },
    {
        date: 'Mar 26',
        Apples: 3129,
        Oranges: 1726,
        Tomatoes: 2290,
    },
]
