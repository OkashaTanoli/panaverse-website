'use client'

import React, { useEffect, useState } from 'react';
import { Coursecontent, Coursescoverblock, Header } from '@/components';
import { CompulsaryQuarterData } from '@/data/data';
import { IQuarterData } from '@/types/types';
import { Poppins } from '@next/font/google';
import Link from 'next/link';

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)

function Page({ params }: { params: { quarter: string } }) {

    const [data, setData] = useState<IQuarterData | undefined>()

    useEffect(() => {
        const course = CompulsaryQuarterData.find((val) => val.id === Number(params.quarter))
        setData(course)

    }, [params.quarter])
    if (!data) {
        return (
            <div className='flex flex-col h-[100vh]'>
                <Header />
                <div className=' w-full flex-grow flex justify-center items-center'>
                    <h1 className='font-bold text-4xl text-zinc-800'>Course Not Found</h1>
                </div>
            </div>
        )
    }
    return (
        <div className={`${poppins.className} relative`}>
            <div className='fixed left-0 top-[50%] flex flex-col -translate-y-[50%] text-zinc-800 text-2xl font-bold bg-gray-300 backdrop-blur-sm'>
                <Link href={'/compulsory/1'} className={`p-7 border-b ${params.quarter !== '1' && 'hover:bg-gray-400'} cursor-pointer border-gray-50 ${params.quarter === '1' && 'bg-[#8a34d151]'}`}>Q1</Link>
                <Link href={'/compulsory/2'} className={`p-7 border-b ${params.quarter !== '2' && 'hover:bg-gray-400'} cursor-pointer border-gray-50 ${params.quarter === '2' && 'bg-[#8a34d151]'}`}>Q2</Link>
                <Link href={'/compulsory/3'} className={`p-7 ${params.quarter !== '3' && 'hover:bg-gray-400'} cursor-pointer ${params.quarter === '3' && 'bg-[#8a34d151]'}`}>Q3</Link>
            </div>
            <Header />
            <Coursescoverblock id={data?.id} objective={data?.objective} />
            <Coursecontent data={data} />
        </div >
    );
}

export default Page;