import Image from 'next/image';
import React from 'react';
import Logo from '../../public/assets/panaverse-logo.png'

function Content() {
    return (
        <div className='py-10 relative'>
            <Image src={Logo} alt='logo' className='h-[90%] w-auto md:w-80% md:h-auto absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-0 grayscale opacity-10' />
            <div className='z-10 w-[1200px] m-auto text-zinc-800 xl:w-[95%]'>
                <h1 className='font-bold text-xl'>The Program in a Nutshell:&nbsp; <span className='text_gradient'>Earn While You Learn</span></h1>
                <p className='tracking-wide mt-2 sm:text-sm'>In this brand-new type of curriculum, students will learn how to make money and boost exports
                    in the classroom and will begin doing so within six months of the program&#39; beginning.
                    It resembles a cross between a corporate venture and an educational project.
                </p>
                <h1 className='font-bold text-xl mt-10'>Program of Studies</h1>
                <p className='tracking-wide mt-2 sm:text-sm'>This curriculum is intended for beginners who want to learn
                    software development from the ground up. The first three quarters are shared by all
                    specialties and are dedicated to studying Object-Oriented Programming and cutting-edge
                    Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that
                    includes both onsite and online classes and is divided into five quarters of 13 weeks each.
                    The emphasis will be on hands-on learning by educating students to produce projects.
                    To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m.
                    (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes
                    complemented by online Zoom laboratories and recorded videos.
                </p>
            </div>
        </div>
    );
}

export default Content;