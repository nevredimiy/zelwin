import React, {useState, useRef} from 'react'

type DraggableProps = {
    children: React.ReactNode;
    rootClass: string;
}

export const Draggable = ({ rootClass = "", children }: DraggableProps) => {
  const ourRef = useRef<HTMLDivElement>(null);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const mouseCoords = useRef({
        startX: 0,
        startY: 0,
        scrollLeft: 0,
        scrollTop: 0
    });

    const handleDragStart:React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!ourRef.current) return
        const slider = ourRef.current.children[0];
        let startX: number = 0;
        if(slider) startX = e.pageX - ourRef.current.offsetLeft;
        const startY = e.pageY - ourRef.current.offsetTop;
        const scrollLeft = slider.scrollLeft;
        const scrollTop = slider.scrollTop;
        mouseCoords.current = { startX, startY, scrollLeft, scrollTop }
        setIsMouseDown(true)
        document.body.style.cursor = "grabbing"
    }
    const handleDragEnd = () => {
        setIsMouseDown(false)
        if (!ourRef.current) return
        document.body.style.cursor = "default"
    }
    const handleDrag:React.MouseEventHandler<HTMLDivElement> = (e) => {
        if (!isMouseDown || ! ourRef.current) return;
        e.preventDefault();
        const slider = ourRef.current.children[0];
        const x = e.pageX - ourRef.current.offsetLeft;
        const y = e.pageY - ourRef.current.offsetTop;
        const walkX = (x - mouseCoords.current.startX) * 1.5;
        const walkY = (y - mouseCoords.current.startY) * 1.5;
        slider.scrollLeft = mouseCoords.current.scrollLeft - walkX;
        slider.scrollTop = mouseCoords.current.scrollTop - walkY;
        console.log(walkX, walkY)
    }

  return (
    <div ref={ourRef} onMouseDown={handleDragStart} onMouseUp={handleDragEnd} onMouseMove={handleDrag} className={rootClass + "flex"}>
      {children}
    </div>
  );
};