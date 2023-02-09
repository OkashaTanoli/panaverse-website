import Image from 'next/image';
import React from 'react';
import Background from '../../public/assets/background.png'
import { BiLinkExternal } from 'react-icons/bi'

function Coverblock() {
    return (
        <div className={`flex justify-center w-full bgLines mt-10`}>
            <div className='flex w-[1200px] items-center justify-between gap-2 xl:w-[95%] md:block'>
                <div className='w-1/2 text-5xl md:w-full sm:text-4xl'>
                    <h1 className='font-bold text_gradient'>Web 3.0 And</h1>
                    <h1 className='font-bold mt-4 text_gradient sm:mt-1'>Metaverse</h1>
                    <h1 className='mt-4 text-zinc-800 font-bold sm:mt-1'>Development</h1>
                    <p className='text-base text-gray-500 mt-5 font-normal sm:text-sm'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</p>
                    <div className='w-20 h-2 piaic_bg_gradient sm:h-[0.3rem] sm:mt-2'></div>
                    <p className='text-base text-zinc-800 mt-5 font-normal sm:text-sm'>First two quarters are compulsary for everyone and remaining two are the specialization in different domains </p>
                    <a href={'https://www.piaic.org/'} target='_blank' rel="noreferrer" className='btn mt-10 flex items-center gap-3 md:px-7 md:py-4 md:mt-5 sm:px:5 sm:font-normal sm:text-xs w-fit' >Apply Now <BiLinkExternal size={18} /></a>
                </div>
                <div className='w-1/2 relative flex justify-end md:w-full md:mt-10 md:justify-center'>
                    <div className='z-30 absolute -top-10 right-0 w-3/6 h-3 rotate-45 rounded-lg bg-[#D46A8E] blur-2xl'></div>
                    <div className='z-30 absolute -top-10 right-[25%] w-3/6 h-3 rotate-45 rounded-lg bg-[#8A34D1] blur-2xl'></div>
                    <div className='z-30 absolute -top-10 left-0 w-3/6 h-3 rotate-45 rounded-lg bg-[#634ccd] blur-2xl'></div>
                    <Image className='w-[90%] lg:w-[500px] sm:w-full' src={Background} alt='background' />
                </div>
            </div>
        </div>
    );
}

export default Coverblock;