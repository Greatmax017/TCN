import React from 'react'
import HeroInner from '../features/Hero/HeroInner'
import SermonsSection from '../features/Sermons/SermonsSection'

function SermonsPage() {
  return (
    <>
        <HeroInner
            image="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/rzrztjqkfsgiscikzn7h"
            title="Sermons"
        />
        <SermonsSection/>
    </>
  )
}

export default SermonsPage
