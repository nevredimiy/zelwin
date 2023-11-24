import { useState, useRef, useEffect } from "react";

import chewronIconDown from '../../assets/images/icons/chevron-down.svg';
import chewronIconRight from '../../assets/images/icons/chevron-right.svg';
import { useResize } from '../../inc/useResize';
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

interface MenuItemsProps {
    items: {
        title: string;
        url: string;
        submenu?: {
            id: string;
            title: string;
            url: string;
            subSubmenu: {
                id: number;
                title: string;
                description?: string;
                url: string;
            }[]
        }[]
    }
}
const MenuItems = ({ items }: MenuItemsProps) => {
    const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
    const sizeScreen = useResize();
    const dropmenuRef = useRef<HTMLLIElement | null>(null);

    useEffect(() => {
        document.addEventListener("mousedown", (event: MouseEvent) => {
            if (dropmenuRef.current && !dropmenuRef.current.contains(event.target as Node)) {
                setIsShowDropdown(false);
            }
        });
        return () => {
            document.removeEventListener("mousedown", () => {
               setIsShowDropdown(false);
        });
        }
    });

    return (
        <li  ref={dropmenuRef} className="p-2 group">
            {items.submenu ? (
                <>
                    <button
                        className='flex items-center gap-2 relative'
                        type="button"
                        onClick={() => setIsShowDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {
                            sizeScreen > 767 ?
                                <img className={`${isShowDropdown && 'rotate-180'} transition-transform`} src={chewronIconDown} alt="Dropdown Menu" /> :
                                <img className={`${isShowDropdown && 'rotate-180'} transition-transform`} src={chewronIconRight} alt="Dropdown Menu" />
                        }
                    </button>
                    {
                        isShowDropdown && sizeScreen > 767 &&
                        <div className="relative">
                            <div className="w-4 h-4 bg-white rotate-45 absolute top-4 left-1/2 -translate-x-1/2"></div>
                        </div>
                    }
                    <Dropdown submenu={items.submenu} sizeScreen={sizeScreen} isShow={isShowDropdown}setIsShowDropdown={setIsShowDropdown} />

                </>
            ) : (
                <Link className="group-hover:opacity-75" to={items.url}>{items.title}</Link>
            )}

        </li>
    )
}

export default MenuItems
