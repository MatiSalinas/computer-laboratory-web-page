import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

// TODO mapear las imagenes desde un arreglo
function CarouselImages() {
  
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})

  //funciones para pasar de imagenes
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="carousel">
      <div className="carousel__viewport" ref={emblaRef}>
        <div className="carousel__container">
        <div className="carousel__slide"><img src="https://img.freepik.com/premium-photo/computer-room_38810-865.jpg?w=1380"  /></div>
        <div className="carousel__slide"><img src="https://live.staticflickr.com/7285/16415815706_ce95427779_k.jpg"  /></div>
        <div className="carousel__slide"><img src="https://fcefyn.unc.edu.ar/media/images/WhatsApp_Image_2020-10-23_at.2e16d0ba.fill-1100x390-c100.jpg"  /></div>
        </div>
      </div>
      <button className="carousel__prev" onClick={scrollPrev}>
        
        &lt;
      </button>
      <button className="carousel__next" onClick={scrollNext}>
        &gt;
      </button>
    </div>
  )
}
export default CarouselImages