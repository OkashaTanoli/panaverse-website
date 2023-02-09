'use client'
import Link from 'next/link';
import React from 'react';
import { TracksData } from '../../data/data'

function Specialization() {


    return (
        <div className='py-10 relative'>
            <div className='m-auto w-[1200px] xl:w-[95%]'>
                <div>
                    <div className='flex gap-5 md:block'>
                        <h1 className='text-5xl md:text-4xl font-bold text_gradient'>Specialized </h1>
                        <h1 className='text-5xl md:text-4xl font-bold text-zinc-800'>Tracks</h1>
                    </div>
                    <p className='text-zinc-800 z-10 relative mt-5 md:text-sm'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>
                <div className='w-full grid grid-cols-3 gap-5 pt-14 pb-14 z-10 relative lg:grid-cols-2 sm:grid-cols-1'>
                    {
                        TracksData.map((val, index) => {
                            return (
                                <Link key={index} href={`/tracks/${val.id}?quarter=4`} className='flex flex-col items-center w-full hover_applier' >
                                    <p className='hover_affected transition-all border-8 border-white bg-gray-200 flex justify-center items-center w-24 h-24 rounded-full z-10 text-gray-500 font-bold text-4xl'>{index+1}</p>
                                    <p className='hover_affected transition-all p-5 pt-14 border border-gray-200 bg-gray-200 rounded-xl text-center w-full min-h-[150px] -mt-10  text-zinc-800 font-bold'>{val.name}</p>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Specialization;