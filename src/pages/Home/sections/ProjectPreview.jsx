import React from 'react'
import SectionHeader from '../../../components/SectionHeader'
import seeheartech from '../../../assets/seeheartech.png'
import npmGenerator from '../../../assets/npm-generator.png'
import gasCalculator from '../../../assets/gas-calculator.png'
import deliveries from '../../../assets/deliveries.png'
const ProjectPreview = () => {
  return (
    <div id='#projects' className='bg-gray-200'>
      <SectionHeader title="Projects" text="Here you will find some of the personal and clients projects that I created with each project containing its own case study" />

      {/* See Hear Tech */}
      <div className='flex flex-col   md:flex-row   justify-center bg-orange-200'>
        <div className='w-full md:w-1/2 md:px-0 mb-5 md:mb-0'>
          <img src={seeheartech} alt="See Hear Tech preview" className='object-cover' />
        </div>
        <div className='w-full md:w-1/2 md:px-0 px-4 flex flex-col mb-4 md:mb-0'>
          <div className='m-auto max-w-2xl'>
            <ul >
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Project name:
                </p>
                <p className='font-light '>See Hear Tech</p>

              </li>
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Description:
                </p>
                <p className='font-light'>Website template for audio\video company</p>
              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Technologies:
                </p>
                <p className='font-light mb-2'>Website template build using React with Tailwind CSS.
                  Smooth anchor links build using <a className='text-orange-600 hover:text-orange-500' href='https://www.npmjs.com/package/react-scroll' target="_blank">React Scroll</a><br />
                </p>
                <p className='font-light  mb-2'>
                  Cool typing effect with<a className='text-orange-600 hover:text-orange-500' href='https://www.npmjs.com/package/react-type-animation' target="_blank"> react-type-animation </a>
                </p>
                <p className='font-light mb-2'>Website is fully responsive. No custom css used, only native <a className='text-orange-600 hover:text-orange-500' href="https://tailwindcss.com/" target="_blank"> Tailwind CSS</a></p>
                
              </li>
            </ul>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Code
            </button>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border hover:text-orange-300 border-gray-300 bg-gray-400 px-4 py-2 text-base font-medium text-gray-200 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Website
            </button>
          </div>
        </div>
      </div>


      {/* NPM Generator */}
      <div className='flex flex-col    md:flex-row-reverse pb-4 md:pb-0  justify-center  bg-yellow-100 '>
        <div className='w-full md:w-1/2 md:px-0  mb-5 md:mb-0'>
          <img src={npmGenerator} alt="See Hear Tech preview" className='object-cover' />
        </div>
        <div className='w-full md:w-1/2 md:px-0 px-4 flex flex-col'>
          <div className='m-auto max-w-2xl'>
            <ul >
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Project name:
                </p>
                <p className='font-light '>Npm Generator</p>

              </li>
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Description:
                </p>
                <p className='font-light'>Studying React invloves creating hundrets of projects, and sometimes it takes 30 minutes to setup new project, folders, etc.</p>
                <p className='font-light'>I created this tool for myself to streamline process </p>
                <p className='font-light'>Second version of app is in process, it will include custom folder structure selection via drag-and-drop interface, and adding custom npm packages via live search using <a className='text-orange-600 hover:text-orange-500' href="https://npms.io/" target="_blank">NPMS</a> </p>
              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Technologies:
                </p>
                <p className='font-light mb-2'>Website  build using React with Tailwind CSS.

                </p>

              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Cool features:
                </p>
                <p className='font-light mb-2'>
                  App checks if you using invalid charachters in name and fix it for you <sup>*</sup>

                </p>
                <p className='text-gray-500'><sup>*</sup>Try type space or any character in app name</p>
              </li>
            </ul>

            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Code
            </button>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border hover:text-orange-300 border-gray-300 bg-gray-400 px-4 py-2 text-base font-medium text-gray-200 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Website
            </button>
          </div>
        </div>

      </div>


      {/* Gas calculator */}
      <div className='flex flex-col   md:flex-row   justify-center bg-orange-200'>
        <div className='w-full md:w-1/2 md:px-0  mb-5 md:mb-0'>
          <img src={gasCalculator} alt="Gas Calcualtor preview" className='object-cover' />
        </div>
        <div className='w-full md:w-1/2 md:px-0 px-4 flex flex-col mb-4 md:mb-0'>
          <div className='m-auto max-w-2xl'>
            <ul >
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Project name:
                </p>
                <p className='font-light '>Gas calculator</p>

              </li>
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Description:
                </p>
                <p className='font-light'>App let you select your car, and calculate how much gas you will need based on lenth of your trip and your car MPG</p>
                <p className='font-light mb-2'>It was challenging to work with goverment API, since documentation is not very good

                </p>
              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Technologies:
                </p>
                <p className='font-light mb-2'>Website  build using React with Tailwind CSS.
                </p>
                <p className='font-light mb-2'>Car data gets oulled from  <a className='text-orange-600 hover:text-orange-500' href='https://www.fueleconomy.gov/' target="_blank">goverment API</a>
                </p>



              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Cool features:
                </p>
                <p className='font-light mb-2'>
                  Dark mode using Tailwind CSS. Selection get written in LocalStorage to keep same settings if page refresh

                </p>

              </li>
            </ul>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Code
            </button>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border hover:text-orange-300 border-gray-300 bg-gray-400 px-4 py-2 text-base font-medium text-gray-200 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Website
            </button>
          </div>
        </div>
      </div>

      {/* Delivery status */}
      <div className='flex flex-col   md:flex-row-reverse   justify-center mb-4 md:mb-0 bg-yellow-100'>
        <div className='w-full md:w-1/2 md:px-0  mb-5 md:mb-0'>
          <img src={deliveries} alt="Deliveries preview" className='object-cover' />
        </div>
        <div className='w-full md:w-1/2 md:px-0 px-4 flex flex-col'>
          <div className='m-auto max-w-2xl'>
            <ul >
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Project name:
                </p>
                <p className='font-light '>Delivery status</p>

              </li>
              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Description:
                </p>
                <p className='font-light'>While working in IT Support company I noticed how much time get wasted tracking packages</p>
                <p className='font-light'>There was no centralized way to track packages, and who they belong to </p>
                <p className='font-light'>I build this simple tool that saves hours of time for company</p>


              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Technologies:
                </p>
                <p className='font-light mb-2'>Website  build using React with Tailwind CSS. Data get stored in Firebase DB

                </p>

              </li>

              <li className='mb-5'>
                <p className='font-normal text-xl'>
                  Cool features:
                </p>
                <p className='font-light mb-2'>
                  App check if some packages will be delivered today, and display in notification section in header

                </p>
                <p className='font-light mb-2'>
                  Dark mode using Tailwind CSS. Selection get written in LocalStorage to keep same settings if page refresh.

                </p>

              </li>
            </ul>

            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              View Code
            </button>
            <button
              type="button"
              className="inline-flex mr-5 items-center rounded-md border hover:text-orange-300 border-gray-300 bg-gray-400 px-4 py-2 text-base font-medium text-gray-200 shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Website
            </button>
          </div>
        </div>

      </div>



    </div>
  )
}

export default ProjectPreview