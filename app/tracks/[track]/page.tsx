'use client'

import React, { useEffect, useState } from 'react';
import { Header, Coursescoverblock, Coursecontent } from '@/components';
import { TracksData } from '@/data/data';
import { IQuarterData, ITrackData } from '@/types/types';
import { Poppins } from '@next/font/google';
import { TbNorthStar } from 'react-icons/tb'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { MdLabelImportant } from 'react-icons/md'
import Link from 'next/link';

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)

function Page({ params, searchParams }: { params: { track: string }, searchParams: { quarter: string } }) {

    const [data, setData] = useState<IQuarterData | undefined>()
    const [trackName, setTrackName] = useState<string>('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const Trackdata: ITrackData | undefined = TracksData.find((val) => val.id === params.track)
        if (Trackdata) {
            setTrackName(Trackdata.name)
            let quarterData = Trackdata.quarters.find((quarter) => quarter.id === Number(searchParams.quarter))
            setData(quarterData)
            return
        }
        setData(undefined)
        setLoading(false)
    }, [params.track, searchParams.quarter])

    if (Number(searchParams.quarter) !== 4 && Number(searchParams.quarter) !== 5) {
        return (
            <div className='flex flex-col h-[100vh]'>
                <Header />
                <div className=' w-full flex-grow flex justify-center items-center'>
                    <h1 className='font-bold text-4xl text-zinc-800'>Course Not Found</h1>
                </div>
            </div>
        )
    }

    if (loading) {

    }

    if (!data) {
        return (
            <div className='flex flex-col h-[100vh]'>
                <Header />
                <div className=' w-full flex-grow flex justify-center items-center'>
                    <h1 className='font-bold text-4xl text-zinc-800'>Track Not Found</h1>
                </div>
            </div>
        )
    }
    return (
        <div className={`${poppins.className} relative`}>
            <div className='fixed left-0 top-[50%] flex flex-col -translate-y-[50%] text-zinc-800 text-2xl font-bold bg-[#0000001a] backdrop-blur-sm'>
                <Link href={`/tracks/${params.track}?quarter=4`} className={`p-7 border-b ${searchParams.quarter !== '4' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer border-gray-50 ${searchParams.quarter === '4' && 'bg-[#8a34d151]'}`}>Q4</Link>
                <Link href={`/tracks/${params.track}?quarter=5`} className={`p-7 ${searchParams.quarter !== '5' && 'hover:bg-[#00000017] active:bg-[#00000024]'} cursor-pointer ${searchParams.quarter === '5' && 'bg-[#8a34d151]'}`}>Q5</Link>
            </div>
            <Header />
            <Coursescoverblock id={data.id} objective={data.objective} trackName={trackName} />
            <div className='w-full'>
                <div className='w-[1200px] m-auto mt-20 text-zinc-800'>
                    <h1 className='text-2xl font-bold'>Compulsory Quarters</h1>
                    <p className='mt-3'>Before going forward everyone has to complete three complusory quarters</p>
                    <div className='flex gap-5 text-4xl font-bold text-gray-400 mt-10'>
                        <Link href={'/compulsory/1'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px]'>
                            Q1
                        </Link>
                        <Link href={'/compulsory/2'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px]'>
                            Q2
                        </Link>
                        <Link href={'/compulsory/3'} className='flex justify-center items-center bg-gray-200 w-[100px] h-[100px]'>
                            Q3
                        </Link>
                    </div>
                </div>
            </div>
            <Coursecontent data={data} />

        </div>
    );
}

export default Page;