import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import me from '../assets/me.jpg'
import { Outlet } from 'react-router-dom'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Link } from "react-scroll"

export default function SharedTopMenu() {
  return (
    <>
      <Disclosure as="nav" className="bg-orange-300 w-full fixed  z-40 ">
        {({ open }) => (
          <>
            <div className=" px-4  sm:px-6 lg:px-8 ">
              <div className="flex h-16 justify-between uppercase mt-3">

                <div className="flex flex-shrink-0 items-center space-x-4">
                  <img
                    className="block h-12 w-12 rounded-full "
                    src={me}
                    alt="Your Company"
                  />
                  <span className='font-bold text-lg tracking-wider'>Alex Bilozor</span>
                  <AiFillLinkedin className='w-6 h-6 text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-all duration-150' />
                  <AiFillGithub className='w-6 h-6 text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-all duration-150' />
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}

                  <Link activeClass="active"
                    to="#home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}
                    className="inline-flex items-center border-b-2 border-gray-400 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >

                    Home
                  </Link>


                  <Link activeClass="active"

                    to="#about-me"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}
                    className="inline-flex items-center border-b-2 border-gray-400 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >

                    About
                  </Link>


                  <Link activeClass="active"

                    to="#projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}
                    className="inline-flex items-center border-b-2 border-gray-400 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >

                    Projects
                  </Link>


                  <Link activeClass="active"

                    to="#contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-76}
                    className="inline-flex items-center border-b-2 border-gray-400 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >

                    Contact
                  </Link>


                </div>



              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main>
        <Outlet />
      </main>
    </>
  )
}
