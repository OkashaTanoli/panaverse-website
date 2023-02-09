import React from 'react';
import { Header, Coursescoverblock, Coursecontent } from '@/components';
import { IQuarterData } from '@/types/types';
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import Footer from '@/components/Footer/footer';



interface IDataType {
    trackName: string,
    data: IQuarterData
}

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)

// let production_url = 'https://panaverse-dao-ultra.vercel.app/'
async function getData(params: any, searchParams: any) {
    const res = await fetch(`https://panaverse-dao-ultra.vercel.app//api/tracks/${params.track}?quarter=${searchParams.quarter}`,
        { cache: 'no-store' });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function Page({ params, searchParams }: any) {
    const data: IDataType = await getData(params, searchParams);


    if (!data.data) {
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
                <Link href={`/tracks/${params.track}?quarter=4`} className={`h-[80px] w-[80px] md:w-1/2 flex justify-center items-center border-b md:border-b-0 md:border-r ${searchParams?.quarter !== '4' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer border-gray-50 ${searchParams?.quarter === '4' && 'bg-[#8a34d151]'}`}>Q4</Link>
                <Link href={`/tracks/${params.track}?quarter=5`} className={`h-[80px] w-[80px] md:w-1/2 flex justify-center items-center ${searchParams?.quarter !== '5' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer ${searchParams?.quarter === '5' && 'bg-[#8a34d151]'}`}>Q5</Link>
            </div>
            <Header />
            <Coursescoverblock id={data.data.id} objective={data.data.objective} trackName={data.trackName} />
            <div className='w-full'>
                <div className='w-[1200px] m-auto mt-20 text-zinc-800 xl:w-[95%]'>
                    <h1 className='text-2xl font-bold'>Compulsory Quarters</h1>
                    <p className='mt-3 sm:text-sm'>Before going forward everyone has to complete three complusory quarters</p>
                    <div className='flex gap-5 text-4xl font-bold text-gray-400 mt-10'>
                        <Link href={'/compulsory/1'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px] sm:w-1/3 '>
                            Q1
                        </Link>
                        <Link href={'/compulsory/2'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px] sm:w-1/3 '>
                            Q2
                        </Link>
                        <Link href={'/compulsory/3'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px] sm:w-1/3 '>
                            Q3
                        </Link>
                    </div>
                </div>
            </div>
            <Coursecontent data={data.data} />

            <Footer />

        </div>
    );
}


export default Page;