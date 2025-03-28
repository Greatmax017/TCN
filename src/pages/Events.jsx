import React from 'react'
import HeroInner from '../features/Hero/HeroInner'
import Events from '../features/Events/Events'

function EventsPage() {
  return (
    <>
        <HeroInner
            image="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/p9sl1aep8hsl7zvtlaoc"
            title="Events"
        />

        <Events/>
    </>
  )
}

export default EventsPage
