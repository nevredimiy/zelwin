import React, { useState, useRef, useEffect } from 'react'

type DraggableProps = {
    children: React.ReactNode;
    rootClass?: string;
    sliding?: number;
}

export const DraggableX = ({ rootClass = "", children, sliding }: DraggableProps) => {
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
    const handleMouseUp = () => {
        setIsMouseDown(false);

    }
    const handleMouseLeave = () => {
        setIsMouseDown(false);

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
    useEffect(() => {
        if (mouseCoords.current.scrollLeft > 0) console.log("more than");

        if (sliderRef.current && sliding) {
            const slider = sliderRef.current.children[0];
            slider.scrollLeft = sliding;
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
            className={rootClass + "flex"}
        >
            {children}
        </div>
    );
}