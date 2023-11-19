import React, { useState, useRef, useEffect } from 'react'

import ArrowRightSlider from '../assets/images/icons/arrow-right-for-slider.svg?react';
import { DraggableExtend } from './DraggableExtend';

interface DraggableSliderProps {
    sectionClass?: string;
    title: string;
    titleClass?: string;
    arrowClass?: string;
    arr: number[];
    dottesClass?: string;
    dottesActiveClass?: string;
    children: React.ReactNode;
}

const DraggableSlider = ({ sectionClass, title, titleClass, arrowClass, arr, dottesClass, dottesActiveClass, children }: DraggableSliderProps) => {
    const [slideCount, setSlideCount] = useState(0);
    const [offsetTransition, setOffsetTransition] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

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
        setTimeout(() => sliderRef.current?.classList.remove('scroll-smooth'), 300)
    }

    const handleRightClick = () => {
        setSlideCount(() => {
            if (slideCount >= arr.length - 1) return arr.length - 1;
            return slideCount + 1;
        });
        setOffsetTransition(() => {
            if (offsetTransition === slideWidth * (arr.length - 1)) return slideWidth * (arr.length - 1);
            return offsetTransition + slideWidth;
        });
        sliderRef.current?.classList.add('scroll-smooth');
        setTimeout(() => sliderRef.current?.classList.remove('scroll-smooth'), 300)
    }

    useEffect(() => {
    setSlideWidth(() => {
      if (sliderRef.current) return (sliderRef.current?.children[0].clientWidth + 20);
      return 0;
    })
  }, [offsetTransition])

    return (
        <section className={`${sectionClass} px-8 py-20`}>
            <div className="container">
                <div className="mb-6 ssm:flex justify-between">
                    <h2 className={`${titleClass}`}>{title}</h2>
                    <div className="hidden ssm:flex gap-4">
                        <div className='cursor-pointer' onClick={handleLeftClick}><ArrowRightSlider className={`${arrowClass} rotate-180`} /></div>
                        <div className='cursor-pointer' onClick={handleRightClick}><ArrowRightSlider className={`${arrowClass}`} /></div>
                    </div>
                </div>
                <DraggableExtend sliding={offsetTransition} setSlideCount={setSlideCount} slideWidth={slideWidth} setSliding={setOffsetTransition}>
                    <div ref={sliderRef} className="relative z-30 flex gap-5">
                        {children}
                    </div>
                </DraggableExtend>
                <div className="flex justify-center gap-2">
                    {
                        arr.map(((item, index) => {

                            if (index === slideCount) {
                                return <div key={index} className={`${dottesActiveClass} rounded-full w-8 h-2 md:h-3 my-6`}></div>
                            } else {
                                return <div key={index} className={`${dottesClass} rounded-full aspect-square w-2 border-2 md:w-3 my-6`}></div>
                            }
                        }))
                    }
                </div>
            </div>
        </section>
    )
}

export default DraggableSlider
