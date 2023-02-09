import Image from 'next/image'
import { Coverblock, Quarterblock, Specialization, Content, Outcomeblock } from '../components'
import Pattern from '../public/assets/bg-pattern.svg'
import { Poppins } from '@next/font/google';

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)


export default function Home() {
    return (
        <div className={`${poppins.className}`}>
            <Coverblock />
            <div className='mt-10' >
                <Image src={Pattern} alt='pattern'/>
            </div>
            <Content />
            <Quarterblock />
            <Specialization />
            <Outcomeblock />
        </div>
    )
}
