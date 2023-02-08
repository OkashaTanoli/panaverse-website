import Image from 'next/image'
import { Coverblock, Header, Quarterblock, Specialization, Content, Outcomeblock } from '../components'
import Pattern from '../public/assets/bg-pattern.svg'
import { Poppins } from '@next/font/google';
import Footer from '@/components/Footer/footer';

const poppins = Poppins(
    {
        weight: ['400', '700', '900'],
        subsets: ['latin']
    }
)


export default function Home() {
    return (
        <div className={`${poppins.className}`}>
            <div className='h-3 w-full bg-gradient-to-r from-[#D46A8E] via-[#634ccd] to-[#403079]'></div>
            <Header />
            <Coverblock />
            <div className='mt-10' >
                <Image src={Pattern} alt='pattern' />
            </div>
            <Content />
            <Quarterblock />
            <Specialization />
            <Outcomeblock />
            <Footer />
        </div>
    )
}
