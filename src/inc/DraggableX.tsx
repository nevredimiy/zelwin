import React, { useState, useRef } from 'react'

type DraggableProps = {
    children: React.ReactNode;
    rootClass?: string;
}

export const DraggableX = ({ rootClass = "", children }: DraggableProps) => {
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
            slider.classList.add('md:scale-105');
            console.log(slider);
            
        }
    }
    const handleMouseUp = () => {
        setIsMouseDown(false);
        rootClass = 'scale-100';
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            slider.classList.remove('md:scale-105');
        }
    }
    const handleMouseLeave = () => {
        setIsMouseDown(false);
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            slider.classList.remove('md:scale-105');
        }
    }
    const handleMouseMove:React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        if (sliderRef.current) {
            const slider = sliderRef.current.children[0];
            const x: number = e.pageX - sliderRef.current.offsetLeft;
            const walk: number = x - mouseCoords.current.startX;
            slider.scrollLeft = mouseCoords.current.scrollLeft - walk;
        }

    }

    return (
        <div ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={rootClass + "flex"}
        >
            {children}
        </div>
    );
}