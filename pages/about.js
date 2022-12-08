import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Head from 'next/head'
import {FaLinkedin, FaGoogle, FaGithub, FaBars} from 'react-icons/fa';
import Image from 'next/image';
import bookstore from '../public/front-page.jpg'
import kevin from '../public/kevin.png'
import brian from '../public/brian.png'
import dharmesh from '../public/dharmesh.png'
import tuan from '../public/tuan.png'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>

      <Head>
        <title>BookDeal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/shopping-bag1.png" />
      </Head>

      <nav className="bg-gray-800 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  src='shopping-bag0.png'
                  alt="Icon"
                  className="h-10 w-10"
                />
              </div>
              <a className="text-white px-3 py-2 font-burtons text-3xl mt-3">BookDeal</a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <a
                    href="/"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Home
                  </a>

                  <a
                    href="products"
                    className=" hover:bg-gray-700 text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Products
                  </a>

                  <a
                    href="contact"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact
                  </a>

                  <a
                    href="about"
                    className="bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium cursor-default"
                  >
                    About
                  </a>

                  <a
                    href="#"
                    className="text-gray-400 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-gray-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>

                <a
                  href="products"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Products
                </a>

                <a
                  href="contact"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>

                <a
                  href="#"
                  className="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium cursor-default"
                >
                  About
                </a>

                <a
                  href="#"
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Login
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <div className=' text-center p-10'>
            <h2 className='text-5xl py-2 text-orange-500 font-medium'>About Us</h2>
            <h3 className=' text-2xl py-2'>Developer and designer</h3>
            <p className=' text-sm py-5 leading-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <FaGoogle/>
            <FaLinkedin/>
            <FaGithub/>
          </div>
          <div className='relative h-96 my-20 mx-auto overflow-hidden'>
            <Image src={bookstore}  layout='fill' objectFit='contain'/>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-center text-3xl py-1">Our Team Member</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="md:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={kevin} alt="Services" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Kevin Nguyen</h3>
              <p className="py-2">Front-end web developer and designer</p>
              <h4 className="py-4 text-orange-600">My Duty</h4>
              <p className="text-gray-800 py-1">I develop and design the look of the webpage. My goal is to make it reactive and clean looking with some of the modern feel. The most challenging part of my website is the navigation bar and its functionality. Because this is still my new language, parts of this website could be buggy or broken.</p>
              <h4 className=" py-4 text-orange-600">Tools I used</h4>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Tailwind CSS</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={brian} alt="Services" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Brian Nguyen</h3>
              <p className="py-2">Front-end web developer and designer</p>
              <h4 className="py-4 text-orange-600">My Work</h4>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={dharmesh} alt="Services" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Dharmesh Tewari</h3>
              <p className="py-2">Back-end developer</p>
              <h4 className="py-4 text-orange-600">My Work</h4>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={tuan} alt="Services" width={100} height={100}/>
              <h3 className="text-lg font-medium pt-8 pb-2">Tuan Nguyen</h3>
              <p className="py-2">Scrum master</p>
              <h4 className="py-4 text-orange-600">My Work</h4>
              <p className="text-gray-800 py-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}
