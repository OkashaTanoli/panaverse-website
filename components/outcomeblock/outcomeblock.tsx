import Image from 'next/image';
import React from 'react';
import Background from '../../public/assets/background2.png'
import { CgEditBlackPoint } from 'react-icons/cg'
import { HiExternalLink } from 'react-icons/hi'

let data = [
    {
        text: `Top 5 'Metaverse' jobs that will rule the future of tech industry`,
        link: 'https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms'
    },
    {
        text: `Blockchain Developer Salary - Jun 2022`,
        link: 'https://web3.career/web3-salaries/blockchain-developer'
    },
    {
        text: `Web3 Salaries Soar to $750,000 for Rank-and-File Devs`,
        link: 'https://thedefiant.io/web3-soaring-salaries/'
    },
    {
        text: `The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters`,
        link: 'https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022'
    },
    {
        text: `How To Become Metaverse Developer: Scope, Skills, and Salary`,
        link: 'https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/'
    },
]

function Outcomeblock() {
    return (
        <div className={`flex justify-center w-full mt-10`}>
            <div className='flex w-[1200px] items-center justify-between gap-2 '>
                <div className='w-1/2 relative flex justify-start'>
                    <Image className='w-[80%]' src={Background} alt='background' />
                </div>
                <div className='w-1/2 text-4xl'>
                    <h1 className='font-bold text_gradient'>The Outcome for Participants of the Program</h1>
                    <p className='text-sm text-zinc-800 mt-5 font-normal'>
                        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs)
                        that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by
                        offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals
                        and students a fantastic opportunity to better their financial situation while also giving the economy
                        a much-needed boost by expanding software exports.
                    </p>
                    <div className='mt-10'>
                        {
                            data.map((val, index) => {
                                return (
                                    <div key={index} className='flex gap-5 items-center mb-2'>
                                        <span className='w-5'>
                                            <CgEditBlackPoint className='text-[#8A34D1]' size={18} />
                                        </span>
                                        <div className='text-sm'>
                                            {val.text}
                                            <a href={val.link} className='bg-blue-500' target='_blank' rel='noreferrer' ><HiExternalLink className='text-gray-400' size={18} /></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Outcomeblock;