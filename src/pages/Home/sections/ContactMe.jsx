import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'

const ContactMe = () => {
  return (
    <footer id='#contact' className="bg-orange-300 py-8 text-center">
          <p className=" text-xl text-gray-800 mb-5">You can contact me via email: <a href="mailto:bilozor.dev@gmail.com" className='text-gray-900 font-bold '>bilozor.dev@gmail.com</a></p>
          <span className="text-xl text-gray-800">Or in my LinkedIn   <a href="https://www.linkedin.com/in/alex-bilozor-a9b2531a2/" target="_blank"><AiFillLinkedin className='w-8 h-8 inline-block text-gray-500 hover:text-gray-700 hover:cursor-pointer transition-all duration-150' /></a></span>
        
    </footer>
  )
}

export default ContactMe