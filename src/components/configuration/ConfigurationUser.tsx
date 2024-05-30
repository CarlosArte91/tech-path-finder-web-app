import Link from 'next/link'
import React, { useEffect } from 'react'
import { useForm } from '@mantine/form'
import { NumberInput, TextInput, Button } from '@mantine/core'
import { itemsSidebarArray } from '@/utils/itemsSidebarArray'
import { byId } from '@/services/users.service'

export default function ConfigurationUser() {

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { name: '', email: '', age: 0 },

        validate: {
            name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
        },
    });

    const getUser = async () => {
        const { data } = await byId(17)
        console.log("user => ", data)
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <div className='layoutContainer '>
            <div className='sideBarContainer py-[25vh]'>
                {itemsSidebarArray.map((item, index) =>
                    <Link key={index} href={item.url} className=' sideBarText w-full h-full flex justify-center items-center'
                        style={{ background: index === 2 ? '#12B886' : 'white' }}>
                        <span className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 w-full h-full
            flex justify-center items-center'>
                            {item.name}
                        </span>
                    </Link>

                )}
            </div>
            <div className=''>
                <h1 className='flex justify-center headerTitleText py-10'>Configuración</h1>
                <div className='flex justify-center '>
                    <form onSubmit={form.onSubmit(console.log)} className='w-[50vh] py-20 bg-slate-300 px-10 rounded-lg'>
                        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
                        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
                        <NumberInput
                            mt="sm"
                            label="Age"
                            placeholder="Age"
                            min={0}
                            max={99}
                            {...form.getInputProps('age')}
                        />
                        <Button type="submit" mt="sm">
                            Submit
                        </Button>
                    </form>
                </div>

            </div>

        </div>

    )
}
