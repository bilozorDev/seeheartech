import React from 'react'
import AboutMe from './sections/AboutMe'
import ContactMe from './sections/ContactMe'
import Hero from './sections/Hero'
import ProjectPreview from './sections/ProjectPreview'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <ProjectPreview/>
      <ContactMe/>
    </>
  )
}

export default Home