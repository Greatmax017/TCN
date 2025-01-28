import React from 'react'
import HeroInner from '../features/Hero/HeroInner'
import Gallery from '../features/Gallery/Gallery'

function GalleryPage() {
  return (
    <>
        <HeroInner
            image="https://res.cloudinary.com/doqvfemo3/image/upload/f_auto,q_auto/v1/TCN/elu5aqe6ktprodsvemkl"
            title="Gallery"
        />

        <Gallery/>
    </>
  )
}

export default GalleryPage
