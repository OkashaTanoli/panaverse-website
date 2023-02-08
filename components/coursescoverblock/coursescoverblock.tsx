import Image from 'next/image';
import React from 'react';
import Globe from '../../public/assets/globeimg.png'

function Coursescoverblock({ trackName, id, objective }: { trackName?: string, id: number, objective: string }) {
    return (
        <div className='w-full pt-10 pb-10 bg-slate-100 flex justify-center'>
            <div className='flex w-[1200px] items-center justify-between gap-2 '>
                <div className='w-1/2 text-4xl'>
                    <p className='font-bold text_gradient leading-normal'>{trackName ? trackName : 'Common In All'}</p>
                    <p className='font-bold text-zinc-800 leading-normal'>{trackName ? 'Specialization' : 'Specializations'}</p>
                    <div className='mt-10 bg-slate-200 p-5 rounded-lg'>
                        <p className='text-zinc-800 text-3xl font-bold'>Quarter : {id}</p>
                        <p className='text-gray-500 text-sm mt-5'>{objective}</p>
                        <p className='text-sm mt-5 bg-zinc-800 w-48 pt-5 pb-5 text-center rounded-lg text-white'>Duration: 13 Weeks</p>
                    </div>
                </div>
                <div className='w-1/2 relative flex justify-end'>
                    <Image className='w-[80%]' src={Globe} alt='background' />
                </div>
            </div>
        </div>
    );
}

export default Coursescoverblock;