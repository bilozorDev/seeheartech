import React from 'react'

const SectionHeader = ({title, text}) => {
  return (
   
    <div className="m-auto block max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="mt-1 text-4xl font-bold tracking-tight uppercase text-gray-900 sm:text-5xl lg:text-4xl">
         {title}
        </h2> 
        <div className='w-40 h-2 bg-gray-400 mx-auto rounded-lg mt-2'></div>
        <p className="mx-auto mt-5 max-w-xl text-md text-gray-500">
          {text}
        </p>
      </div>
    </div>
  
  )
}

export default SectionHeader