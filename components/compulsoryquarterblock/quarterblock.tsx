import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowImg from '../../public/assets/arrow_img.svg'

let quarter_data = [
    { no: 1, objective: 'CS-101: Object-Oriented Programming using TypeScript' },
    { no: 2, objective: 'W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform' },
    { no: 3, objective: '$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development' },
]

function Quarterblock() {
    return (
        <div className='py-10 relative'>
            <Image className='z-0 absolute top-0 rotate-180 left-0' src={ArrowImg} alt="arrow" />
            <Image className='z-0 absolute top-0 right-0' src={ArrowImg} alt="arrow" />
            <div className='m-auto w-[1200px]'>
                <div className='w-full'>
                    <div className='flex gap-5'>
                        <h1 className=' z-10 text-center text-5xl font-bold text_gradient'>Compulsory </h1>
                        <h1 className=' z-10 text-center text-5xl font-bold text-zinc-800'>Courses</h1>
                    </div>
                    <h2 className='text-zinc-800 font-bold text-xl mt-5 z-10 relative'>Core Courses (Common in All Specializations)</h2>
                    <p className='text-zinc-800 z-10 relative'>Every participant of the program will start by completing the following three core courses:</p>
                </div>
                <div className='flex gap-10 w-full m-auto pb-20 pt-20'>
                    {
                        quarter_data.map((val, index) => {
                            return (
                                <Link key={index} href={`/compulsory/${val.no}`} className='flex items-center gap-5 relative p-5 bg-[#ffffff16] hover:bg-[rgba(167,31,49,0.25)] hover:scale-110 transition-all cursor-pointer border border-gray-200 rounded-3xl w-1/3 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.18)] overflow-hidden '>
                                    <div className={`absolute right-0 w-52 h-52 rotate-45 rounded-lg ${val.no === 1 ? 'bg-[rgba(212,106,141,0.3)]' : val.no === 2 ? 'bg-[rgba(99,76,205,0.3)]' : 'bg-[rgba(138,52,209,0.3)]'} blur-3xl`}></div>
                                    <p className='z-10  text-[10rem] text-[#00000017] font-[900] leading-none'>{val.no}</p>
                                    <div className='z-10 text-zinc-800'>
                                        <p className='font-bold text-2xl'>Quarter {val.no}</p>
                                        <p className='mt-5 z_index'>{val.objective}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    );
}

export default Quarterblock;