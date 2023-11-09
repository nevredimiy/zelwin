import { useRef, useState } from 'react';
import chewronIconRight from '../../assets/images/icons/chevron-right.svg';
import {Draggable} from '../../inc/Draggable'

interface DropdownProps {
  submenu: {
    title: string;
    url: string;
    subSubmenu: {
      title: string;
      description?: string;
      url: string;
    }[],
  }[],
  isShow: boolean;
  sizeScreen: number;
  setIsShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const Dropdown = ({ submenu, isShow, sizeScreen, setIsShowDropdown }: DropdownProps) => {
  const [isAciveSubmenu, setIsActiveSubmenu] = useState(0);
  const [touchdown, setTouchdown] = useState(false);
  const submenuRef = useRef<HTMLUListElement>(null);
  const [startX, setStartX] = useState(0);
  const[scrollLeft, setScrollLeft] = useState(0)

  const handleDown = (e: { pageX: number; }) => {
    setTouchdown(true);
    if(submenuRef.current?.offsetLeft) setStartX(e.pageX - submenuRef.current.offsetLeft);
    if(submenuRef.current?.scrollLeft) setScrollLeft(submenuRef.current.scrollLeft);
  }
  const handleUp = () => {
    setTouchdown(false);
  }
  const handleLeave = () => {
    setTouchdown(false);
  }
  const handleMove = (e: { preventDefault: () => void; pageX: number; }) => {
    if (!touchdown) return;
    e.preventDefault();
    let x: number = 0;
    console.log(submenuRef.current?.offsetLeft);

    if(submenuRef.current?.offsetLeft) x = e.pageX - submenuRef.current.offsetLeft;
    const walk: number = x - startX;
    if(submenuRef.current?.scrollLeft) submenuRef.current.scrollLeft = scrollLeft - walk;
  }

  return (

    <div className={`
    ${isShow ? 'block lg:flex' : 'hidden'} absolute top-0 left-0 right-0 bg-white
    md:top-14 md:left-3 md:right-3 md:rounded-3xl

    `}>
      <Draggable rootClass={``}>
      <ul
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        onMouseLeave={ handleLeave}
        onMouseMove={handleMove}
        ref={submenuRef}
        className={`
        text-regal-black p-6 md:flex md:overflow-hidden
        lg:flex-col lg:max-h-screen lg:border-r lg:max-w-xs lg:w-fit
        md:relative md:whitespace-nowrap md:select-none
        `}>
        {
          isShow && sizeScreen < 768 &&
          <li>
            <button type='button' onClick={() => setIsShowDropdown(false)} className="flex items-center gap-2 text-base mb-6">
              <img className="rotate-180" src={chewronIconRight} alt="Back" />
              <span>Back</span>
            </button>
          </li>
        }
        {submenu.map((submenuItems, index) => (
          <>
            <li
              onClick={() => setIsActiveSubmenu(index)}
              key={index}
              className={`menu-items cursor-pointer p-2
          ${isAciveSubmenu === index ? 'text-regal-blue' : 'text-regal-gray'}
           flex-shrink-0
          `}
            >
              <div className="">{submenuItems.title}</div>
            </li>

          </>
        ))}
        </ul>
        </Draggable>
      <nav className='
      hidden
      relative top-full lg:static lg:top-0 md:grid grid-cols-2 p-2 gap-5
      lg:w-full
      '>
        {submenu[isAciveSubmenu].subSubmenu.map((submenuTab, index) => {
          return (
            <a key={index*20} className='w-full text-regal-black hover:bg-active-gray p-3 rounded-2xl' href={submenuTab.url}>
              <h2 className='pb-2'>{submenuTab.title}</h2>
              {submenuTab.description && <div className='text-sm font-normal'>{submenuTab.description}</div>}
            </a>
          )
        })
        }
      </nav>
    </div>

  );
};

export default Dropdown;