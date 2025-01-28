import React from 'react'
import HeroInner from '../features/Hero/HeroInner'
import OurHistory from '../features/About/OurHistory'
import Vision from '../features/About/Vision'
// import Team from '../features/Team/Team'
import PastorMessage from '../features/About/PastorMessage'

function AboutUsPage() {
  return (
    <>
     <HeroInner
      image="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/basq7viriwnypcvh0vwr"
      title="About Us"
     />
     <OurHistory/>
     <Vision/>
     <PastorMessage/>
     {/* <Team/> */}
    </>
  )
}

export default AboutUsPage
