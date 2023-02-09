import Image from 'next/image';
import React from 'react';
import Globe from '../../public/assets/globeimg.png'
import { MdOutlineAccessTimeFilled } from 'react-icons/md'

function Coursescoverblock({ trackName, id, objective }: { trackName?: string, id: number, objective: string }) {
    return (
        <div className='w-full pt-10 pb-10 bg-slate-100 flex justify-center'>
            <div className='flex w-[1200px] items-center justify-between gap-2 xl:w-[95%] md:block'>
                <div className='w-1/2 text-4xl md:w-full sm:text-3xl'>
                    <p className='font-bold text_gradient leading-normal'>{trackName ? trackName : 'Common In All'}</p>
                    <p className='font-bold text-zinc-800 leading-normal'>{trackName ? 'Specialization' : 'Specializations'}</p>
                    <div className='mt-10 bg-slate-200 p-5 rounded-lg'>
                        <p className='text-zinc-800 text-3xl font-bold sm:text-2xl'>Quarter : {id}</p>
                        <p className='text-gray-500 text-base mt-5 sm:text-sm'>{objective}</p>
                        <div className='text-sm mt-5 bg-zinc-800 px-7 py-5 text-center rounded-lg text-white flex gap-5 items-center w-fit'><span className='w-4'><MdOutlineAccessTimeFilled size={20} /></span><p><span className='font-bold'>Duration: </span>( 13 Weeks )</p> </div>
                    </div>
                </div>
                <div className='w-1/2 relative flex justify-end md:w-full md:justify-center'>
                    <Image className='w-[80%] md:mt-10 sm:w-full' src={Globe} alt='background' />
                </div>
            </div>
        </div>
    );
}

export default Coursescoverblock;