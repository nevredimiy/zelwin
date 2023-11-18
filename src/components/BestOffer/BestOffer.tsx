import Slider from './Slider';
import arrowRightSlider from '../../assets/images/icons/arrow-right-for-slider.svg';
import { DraggableX } from '../../inc/DraggableX'
import { useEffect, useRef, useState } from 'react';

const arr = [1, 2, 3, 4, 5];

const BestOffer = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [offsetTransition, setOffsetTransition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  const handleRightClick = () => {
    setSlideCount(() => {
      if (slideCount >= arr.length - 1) return arr.length - 1;
      return slideCount + 1;
    } );
    setOffsetTransition(() => {
      if (offsetTransition === slideWidth * (arr.length-1)) return slideWidth * (arr.length-1);
      return offsetTransition + slideWidth;
    });
    sliderRef.current?.classList.add('scroll-smooth');
    setTimeout(() =>sliderRef.current?.classList.remove('scroll-smooth'), 300 )
  }

  const handleLeftClick = () => {
    setSlideCount(() => {
      if (slideCount <= 0) return 0;
      return slideCount - 1;
    });
    setOffsetTransition(() => {
      if (offsetTransition <= 0) return 0;
      return (offsetTransition - slideWidth)
    });
    sliderRef.current?.classList.add('scroll-smooth');
    setTimeout(() =>sliderRef.current?.classList.remove('scroll-smooth'), 300 )
  }
  useEffect(() => {
    setSlideWidth(() => {
      if (sliderRef.current) return (sliderRef.current?.children[0].clientWidth + 20);
      return 0;
    })
  }, [])

  return (
    <section className="bg-regal-blue pt-16 pb-20">
      <div className="container px-8">
        <div className="mb-6 ssm:flex justify-between">
          <h2 className="text-white">Best Offers</h2>
          <div className="hidden ssm:flex gap-4">
            <button onClick={handleLeftClick} type='button'><img className='rotate-180' src={arrowRightSlider} alt="Left" /></button>
            <button onClick={handleRightClick} type='button'><img src={arrowRightSlider} alt="Right" /></button>

          </div>
        </div>
        <DraggableX sliding={offsetTransition} setSliding={setOffsetTransition}>
          <div ref={sliderRef} className="relative z-30 flex gap-5">
            {arr.map((item, index) => {
              return <Slider key={index} service={item} />
            })}
          </div>
        </DraggableX>
        <div className="flex justify-center gap-2">
          {
            arr.map(((item, index) => {

              if (index === slideCount) {
                  return <div key={index} className="rounded-full bg-white w-8 h-3 my-6"></div>
              } else {
                  return <div key={index} className="rounded-full aspect-square border-2 border-white w-3 my-6"></div>
              }
            }))
          }
        </div>
      </div>
    </section>
  )
}

export default BestOffer
