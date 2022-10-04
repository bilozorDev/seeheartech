import { ArrowDownCircleIcon } from '@heroicons/react/24/outline'
import { TypeAnimation } from 'react-type-animation';
import React from 'react'
import { Link } from "react-scroll"
const Hero = () => {
    return (
        <div id='#home' className='min-h-screen flex'>
            <div className='block max-w-4xl m-auto px-4'>
                <TypeAnimation sequence={['Hi, I\'m Alex Bilozor']}
                    speed={25}
                    className='text-center md:leading-10 text-3xl md:text-6xl font-bold uppercase tracking-widest text-gray-800 mb-5 relative' />

                <p className='text-gray-500 uppercase text-center'>React Web Developer <span></span></p>
                <Link activeClass="active"

                    to="#projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}>


                    <button
                        type="button"
                        className="block mx-auto mt-24 items-center  shadow-gray-800 rounded-md border border-transparent uppercase tracking-wider font-light bg-orange-500 px-10 py-3 text-base  text-white shadow-sm hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >

                        My projects
                    </button>
                </Link>

            </div>
            <div className='absolute bottom-0 w-full text-center  animate-bounce group '>
                <Link activeClass="active"

                    to="#about-me"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}>

                    <p className='block text-gray-500 group-hover:text-gray-600 group-hover:cursor-pointer transition-all duration-150 '>About me </p>
                    <ArrowDownCircleIcon className='h-12 w-12 mx-auto  text-gray-400 group-hover:text-gray-500 hover:cursor-pointer transition-all duration-150 '></ArrowDownCircleIcon>
                </Link>

            </div>
        </div>
    )
}

export default Hero