'use client'

import Image from 'next/image';
import React from 'react';
import logo from '../../public/assets/panaverse-logo.png'
import { Poppins } from '@next/font/google';
import Link from 'next/link';
import { ChakraProvider } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'

const poppins = Poppins({
    weight: '400',
    subsets: ["latin"]
})

function Header() {
    let tracks = [
        { name: "Web 3 and Metaverse", id: 'wmd' },
        { name: "Cloud-Native Computing", id: 'cnc' },
        { name: "Artificial Intelligence (AI) and Deep Learning", id: 'ai' },
        { name: "Ambient Computing and IoT", id: 'iot' },
        { name: "Genomics and Bioinformatics", id: 'gbs' },
        { name: "Network Programmability and Automation", id: 'npa' }
    ]

    return (
        <ChakraProvider>
            <div className={`bg-[#ffffff9d] backdrop-blur-xl w-full flex justify-center ${poppins.className} sticky top-0 z-20 border-b border-gray-200`}>
                <div className='w-[1200px] py-4 flex justify-between items-center xl:w-[95%]'>
                    <Link href={'/'}>
                        <Image className='h-auto' src={logo} alt='logo' width={100} />
                    </Link>
                    <div className='flex items-center gap-5 sm:gap-3 text-zinc-600 text-sm font-bold'>
                        <Link href={'/'} className='px-5 cursor-pointer md:px-0'>
                            <Button px={0} fontSize='0.875rem' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} bgColor={'transparent'}>Home</Button>
                        </Link>
                        <Menu>
                            <MenuButton as={Button} px={0} width='auto' _hover={{ bg: 'transparent' }} _active={{ bg: 'transparent' }} className='sm:px-0' fontSize='0.875rem' bgColor={'transparent'} rightIcon={<ChevronDownIcon />}>
                                Tracks
                            </MenuButton>
                            <MenuList padding={'10px 0'} bgColor='rgba(255,255,255,1)' className='sm:w-[100vw] sm:text-sm' >
                                {
                                    tracks.map((val, index) => {
                                        return (
                                            <Link key={index} href={`/tracks/${val.id}?quarter=4`}><MenuItem padding={'10px 20px'}>{val.name}</MenuItem></Link>
                                        )
                                    })
                                }
                            </MenuList>
                        </Menu>
                    </div>
                </div>
            </div>
        </ChakraProvider>
    );
}

export default Header;