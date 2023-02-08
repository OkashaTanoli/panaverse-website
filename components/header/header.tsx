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
import { TracksData } from '@/data/data';

const poppins = Poppins({
    weight: '400',
    subsets: ["latin"]
})

function Header() {

    return (
        <ChakraProvider>
            <div className={`bg-[#ffffff84] backdrop-blur-xl w-full flex justify-center ${poppins.className} sticky top-0 z-20`}>
                <div className='w-[1200px] py-4 flex justify-between items-center'>
                    <Link href={'/'}>
                        <Image className='h-auto' src={logo} alt='logo' width={100} />
                    </Link>
                    <div className='flex items-center text-zinc-600 text-sm font-bold'>
                        <Link href={'/'} className='px-5 cursor-pointer'>
                            <Button fontSize='0.875rem' bgColor={'transparent'}>Home</Button>
                        </Link>
                        <Menu>
                            <MenuButton as={Button} fontSize='0.875rem' bgColor={'transparent'} rightIcon={<ChevronDownIcon />}>
                                Tracks
                            </MenuButton>
                            <MenuList padding={'10px 0'} bgColor='rgba(255,255,255,1)' zIndex={50}>
                                {
                                    TracksData.map((val, index) => {
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