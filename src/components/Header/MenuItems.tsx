import { useState } from "react";

import chewronIconDown from '../../assets/images/icons/chevron-down.svg';
import chewronIconRight from '../../assets/images/icons/chevron-right.svg';
import Dropdown from './Dropdown';
import {useResize} from '../../inc/useResize';

interface MenuItemsProps {
    items: {
        title: string;
        url: string;
        submenu?: {
            title: string;
            url: string;
            subSubmenu: {
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
    return (
        <li className="p-2 group">
            {items.submenu ? (
                <>
                    <button
                        className='flex items-center gap-2 relative'
                        type="button"
                        onClick={() => setIsShowDropdown((prev) => !prev)}
                    >
                        {items.title}
                        {
                            sizeScreen > 768 ?
                                <img className={`${isShowDropdown && 'rotate-180'} transition-transform`} src={chewronIconDown} alt="Dropdown Menu" /> :
                                <img className={`${isShowDropdown && 'rotate-180'} transition-transform`} src={chewronIconRight} alt="Dropdown Menu" />
                        }
                    </button>
                    {
                        isShowDropdown && sizeScreen > 768 &&
                        <div className="relative">
                            <div className="w-4 h-4 bg-white rotate-45 absolute top-4 left-1/2 -translate-x-1/2"></div>
                        </div>
                    }
                    <Dropdown submenu={items.submenu} isShow={isShowDropdown} sizeScreen={sizeScreen} setIsShowDropdown={setIsShowDropdown} />

                </>
            ) : (
                <a className="group-hover:opacity-75" href={items.url}>{items.title}</a>
            )}

        </li>
    )
}

export default MenuItems
