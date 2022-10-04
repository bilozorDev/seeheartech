import { ArrowDownCircleIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-scroll'
import SectionHeader from '../../../components/SectionHeader'


const AboutMe = () => {
  return (
    <div id='#about-me' className='min-h-screen bg-orange-200 relative'>


      <SectionHeader title="About me" text="Here you will find information about me, what I do, and my current skills " />

      <div className='flex flex-col space-y-8 md:flex-row px-8 md:space-y-0 justify-center '>
        <div className='w-full  md:px-12'>
          <div className='pb-6'>

          <h2 className='text-2xl font-bold mb-4'>Get to know me</h2>

          <p className='text-gray-500 font-light hover:cursor-pointer mb-2 hover:text-gray-600'>Hello, I'm Alex. I like coding. My journey began when I was 16 years old, and I started an e-commerce business in Ukraine. I started using PrestaShop and quickly figured out that basic functionality wasn't enough, and, at the time, I couldn't afford to hire a developer. So I learned PHP, HTML, CSS, and JS.</p>
          <p className='text-gray-500 font-light hover:cursor-pointer mb-2 hover:text-gray-600'>After that, I worked as a freelancer, making Landing Pages, corporate websites, and e-commerce stores.</p>
          <p className='text-gray-500 font-light hover:cursor-pointer mb-2 hover:text-gray-600'>In 2016 I moved to USA and switched my major to IT support. I continued doing web development on a side, but not as much as I wanted to. After moving on career ladder from level one tech to level 3 in 6 years, it is time to get back to programming.</p>
          <p className='text-gray-500 font-light hover:cursor-pointer mb-2 hover:text-gray-600'>For last year I've been dedicating all my free time to studying and mastering current technologies. Waking up at 4 AM to study before work and doing personal projects after work hours</p>
          <p className='text-gray-500 font-light hover:cursor-pointer  hover:text-gray-600'>I'm a 100% self-taught developer. I enjoy working with React JS and would like to continue working with it at my job.</p>

          </div>

          <div className='flex flex-col md:flex-row md:space-x-6'>
            <div>
              <h2 className='text-2xl font-bold pb-4'>Why hire me ?</h2>
              <p className='text-gray-500 text-sm hover:cursor-pointer mb-2 hover:text-gray-600'>These days, many people are switching to development, sometimes because of money, flexibility working remotely, etc.</p>
              <p className='text-gray-500 text-sm hover:cursor-pointer mb-2 hover:text-gray-600'>For me, it's doing what I enjoy, and everything else is just perks</p>
              <p className='text-gray-500 text-sm hover:cursor-pointer mb-2 hover:text-gray-600'>I enjoy "creating". Make something out of nothing. I'm the first one to pick up any challenges at my work. When my car brakes, I get happy that I get to fix it. And with my beet up 30 years Mercedes, I get to fix it every other week</p>
              <p className='text-gray-600 text-sm font-semibold hover:cursor-pointer mb-2 hover:text-gray-700'>I can confidently say that within a year, I will be in the top 3 most valuable team member</p>
            </div>
            <div>

              <h2 className='text-2xl font-bold pb-4'>Pros </h2>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>I'm quick to learn and adapt. I'm organized enough to learn by myself without guidance. And at the same time, I'm not stubborn to ask for help when I get stuck.</p>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>I'm a team player. Nobody likes outsiders, and I believe that teamwork makes the dream work.</p>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>I'm not afraid to pick up challenges. That's the only way to become a master at what you do.</p>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>I have good troubleshooting skills. At my current job, that's what I do every day, troubleshoot problems.</p>


            </div>
            <div>
              <h2 className='text-2xl font-bold pb-4'>Cons </h2>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>Nobody's perfect, and I'm not exclusion. Since I have limited expirience in team development, I will need some time to learn what is what. But no worries, I'm a fast learner.</p>
              <p className='text-gray-500 text-sm group hover:cursor-pointer mb-2 hover:text-gray-600'><ChevronRightIcon className='inline-block h-6 w-6 -translate-x-1 transition-all duration-75 group-hover:translate-x-0 '/>I wouldn't want to work with deprecated technologies. I want to advance in web development and preffer to work with modern technologies. Sorry</p>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/4 md:px-12'>
          <h2 className='text-2xl font-bold mb-4'>My Skills</h2>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>HTML</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>CSS</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>JavaScipt</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>React</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>GIT</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>Tailwind CSS</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>Responsive Design</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>Github</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>Firebase</div>
          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>SASS</div>

          <div className='bg-gray-200 inline-block px-6 py-2 rounded-md font-semibold mr-2 mb-2 text-gray-500 transition-all duration-100 hover:cursor-pointer hover:text-gray-200 hover:bg-gray-500'>Bootstrap</div>
        </div>
      </div>
      
    </div>
  )
}

export default AboutMe