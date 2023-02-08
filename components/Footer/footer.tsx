import React from 'react';
import { TracksData, CompulsaryQuarterData } from '@/data/data';
import Link from 'next/link';
import { FaFacebookF, FaGithub, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
        <div className='w-full py-28 mt-28 bg-slate-200'>
            <div className='w-[1200px] m-auto grid grid-cols-3 gap-10'>
                <div className='text-zinc-800'>
                    <h1 className='font-bold text-xl'>Compulsory Quarters</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        {
                            CompulsaryQuarterData.map((val, index) => {
                                return (
                                    <Link href={`/compulsory/${val.id}`} className='truncate' key={index}>Quarter {val.id} : {val.objective}</Link>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='text-zinc-800'>
                    <h1 className='font-bold text-xl'>Specialization Tracks</h1>
                    <div className='mt-5 flex flex-col gap-3'>
                        {
                            TracksData.map((val, index) => {
                                return (
                                    <Link href={`/tracks/${val.id}?quarter=4`} className='' key={index}>{val.name}</Link>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='text-zinc-800'>
                    <h1 className='font-bold text-xl'>Social Links</h1>
                    <div className='mt-5 flex gap-3'>
                        <Link href={'https://www.facebook.com/groups/panaverse'} className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center text-white'>
                            <FaFacebookF size={16} />
                        </Link>
                        <Link href={'https://twitter.com/Panaverse_edu'} className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center text-white'>
                            <FaTwitter size={16} />
                        </Link>
                        <Link href={'https://www.youtube.com/@panaverse/streams'} className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center text-white'>
                            <FaYoutube size={16} />
                        </Link>
                        <Link href={'https://github.com/panaverse'} className='w-10 h-10 bg-slate-700 rounded-full flex justify-center items-center text-white'>
                            <FaGithub size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;