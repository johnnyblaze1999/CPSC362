import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {FaLinkedin, FaGoogle} from 'react-icons/fa';
import Image from 'next/image';
import deved from '../public/dev-ed-wave.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>BookDeal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>BookDeal</h1>
            <ul className='flex items-center gap-5'>
              <li>
                <BsFillMoonStarsFill className=' cursor-pointer text-2xl'/>
              </li>
              <li><a className='text-base cursor-pointer' href='#'>Home</a></li>
              <li><a className='text-base cursor-pointer' href='#'>Products</a></li>
              <li><a className='text-base cursor-pointer' href='#'>Contact</a></li>
              <li><a className='text-base cursor-pointer' href='#'>About</a></li>
              <li><a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">CPSC362</a></li>
            </ul>
          </nav>
          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Kevin Nguyen</h2>
            <h3 className=' text-2xl py-2'>Developer and designer</h3>
            <p className=' text-sm py-5 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <FaGoogle/>
            <FaLinkedin/>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden'>
            <Image src={deved} layout='fill' objectFit='cover'/>
          </div>
        </section>
      </main>

    </div>
  )
}
