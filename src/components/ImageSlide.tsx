import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function ImageSlide() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide">Slide 1</div>
        <div className="embla__slide">Slide 2</div>
        <div className="embla__slide">Slide 3</div>
      </div>
    </div>
  )
}
