import React, { useState, useRef, useEffect } from 'react'

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