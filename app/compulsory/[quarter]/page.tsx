
import React from 'react';
import { Coursecontent, Coursescoverblock, Header } from '@/components';
import { IQuarterData } from '@/types/types';
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import Footer from '@/components/Footer/footer';

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)


// let production_url = 'https://panaverse-dao-ultra.vercel.app/'

async function getData(params: any) {
    const res = await fetch(`https://panaverse-dao-ultra.vercel.app//api/compulsory/${params.quarter}`,
        { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Page({ params }: { params: { quarter: string } }) {

    const data: IQuarterData = await getData(params);

    if (!data) {
        return (
            <div className='flex flex-col'>
                <Header />
                <div className='flex justify-center items-center py-28'>
                    <h1 className='text-2xl '>Track Not Found !</h1>
                </div>
                <Footer />
            </div>
        )
    }

    return (
        <div className={`${poppins.className} relative`}>
            <div className='z-20 fixed right-0 md:w-full top-[50%] md:top-full flex flex-col md:flex-row -translate-y-[50%] md:-translate-y-[100%] text-zinc-800 text-xl font-bold bg-slate-200 rounded-l-3xl md:rounded-none border-l border-t border-b md:border-0 md:border-t-2 md:border-gray-300 border-white overflow-hidden'>
                <Link href={'/compulsory/1'} className={`h-[80px] w-[80px] md:w-1/2 md:h-[50px] flex justify-center items-center border-b md:border-b-0 md:border-r ${params.quarter !== '1' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer border-gray-50 ${params.quarter === '1' && 'bg-[#8a34d151]'}`}>Q1</Link>
                <Link href={'/compulsory/2'} className={`h-[80px] w-[80px] md:w-1/2 md:h-[50px] flex justify-center items-center border-b md:border-b-0 md:border-r ${params.quarter !== '2' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer border-gray-50 ${params.quarter === '2' && 'bg-[#8a34d151]'}`}>Q2</Link>
                <Link href={'/compulsory/3'} className={`h-[80px] w-[80px] md:w-1/2 md:h-[50px] flex justify-center items-center ${params.quarter !== '3' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer ${params.quarter === '3' && 'bg-[#8a34d151]'}`}>Q3</Link>
            </div>
            <Header />
            <Coursescoverblock id={data?.id} objective={data?.objective} />
            <Coursecontent data={data} />
            <Footer />
        </div >
    );
}

export default Page;