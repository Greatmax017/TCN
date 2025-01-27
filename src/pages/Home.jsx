import React from 'react'
import HeroHome from '../features/Hero/HeroHome'
import AboutSection from '../features/About/AboutSection'
import Worship from '../features/Worship/Worship'
import Sermons from '../features/Sermons/Sermons'
import EventSection from '../features/Events/EventSection'


function HomePage() {

  return (
    <>
     <HeroHome/>
     <AboutSection/>
     <Worship/>
     <Sermons/>
     <EventSection/>
    </>
  )
}

export default HomePage
