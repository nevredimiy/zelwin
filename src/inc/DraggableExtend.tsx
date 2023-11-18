import React, { useState, useRef, useEffect, SetStateAction, Dispatch } from 'react'

type DraggableProps = {
    children: React.ReactNode;
    rootClass?: string;
    sliding: number;
    setSliding: Dispatch<SetStateAction<number>>;
    setSlideCount: Dispatch<SetStateAction<number>>;
    slideWidth?: number;
}

export const DraggableExtend = ({ rootClass = "", children, sliding, setSlideCount, slideWidth, setSliding }: DraggableProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        scrollLeft: 0,
    })
    const handleMouseDown:React.MouseEventHandler<HTMLDivElement> = (e) => {
        setIsMouseDown(true);
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            const startX: number = e.pageX - sliderRef.current.offsetLeft;
            const scrollLeft: number = slider.scrollLeft;
            mouseCoords.current = { startX, scrollLeft };
        }
    }
    const handleTouchDown: React.TouchEventHandler<HTMLDivElement> = (e) => {
        setIsMouseDown(true);
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            const startX: number = e.touches[0].pageX - sliderRef.current.offsetLeft;
            const scrollLeft: number = slider.scrollLeft;
            mouseCoords.current = { startX, scrollLeft };
        }
    }
    const handleMouseUp = () => {
        setIsMouseDown(false);
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            let step = 2;
            if (slideWidth) step = Math.round(slider.scrollLeft / slideWidth);
            setSlideCount(step);
            if (slideWidth) setSliding(slideWidth * step);
            console.log("Mouse Up - scrollLeft: " + slider.scrollLeft);
        }
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false);
    }
    const handleMouseMove:React.MouseEventHandler<HTMLDivElement>  = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            const x: number = e.pageX - sliderRef.current.offsetLeft;
            const walk: number = x - mouseCoords.current.startX;
            slider.scrollLeft = mouseCoords.current.scrollLeft - walk;
        }
    }
    const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
        if (!isMouseDown) return;
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            const x: number = e.touches[0].pageX - sliderRef.current.offsetLeft;
            const walk: number = x - mouseCoords.current.startX;
            slider.scrollLeft = mouseCoords.current.scrollLeft - walk;
        }

    }
    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            if (sliding !== undefined) slider.scrollLeft = sliding;
            console.log('scrollLeft: ' + slider.scrollLeft);
            console.log('sliding: ' + sliding);

        }
    }, [sliding]);

    useEffect(() => {
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0] as HTMLElement;
            slider.style.overflowX = 'hidden';
        }
    }, [])

    return (
        <div ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchDown}
            onTouchEnd={handleMouseUp}
            onTouchCancel={handleMouseLeave}
            onTouchMove={handleTouchMove}
            className={rootClass + "flex"}
        >
            {children}
        </div>
    );
}