'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { TracksData } from '../../data/data'

function Specialization() {


    return (
        <div className='py-10 relative'>
            <div className='m-auto w-[1200px]'>
                <div>
                    <div className='flex gap-5'>
                        <h1 className=' z-10 text-center text-5xl font-bold text_gradient'>Specialized </h1>
                        <h1 className=' z-10 text-center text-5xl font-bold text-zinc-800'>Tracks</h1>
                    </div>
                    <p className='text-zinc-800 z-10 relative mt-5'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each.</p>
                </div>
                <div className='w-full grid grid-cols-2 gap-5 pt-20 pb-20 z-10 relative'>
                    {
                        TracksData.map((val, index) => {
                            return (
                                <Link key={index} href={`/tracks/${val.id}?quarter=4`}>
                                    <div className='flex items-center gap-5 bg-[#ffffff5f] border border-gray-200 rounded-xl  overflow-hidden backdrop-blur-2xl transition-all hover:scale-110 hover:rounded-none hover:z-10 hover:bg-slate-50 hover:shadow-[0_0_10px_rgba(0,0,0,0.15)] cursor-pointer'>
                                        <p className='text-[4rem] text-[#0000002b] font-[900] leading-none w-[100px] h-[100px] flex justify-center items-center bg-gray-100'>{index + 1}</p>
                                        <p className='w-[300px] text-zinc-800' >{val.name}</p>
                                    </div>
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