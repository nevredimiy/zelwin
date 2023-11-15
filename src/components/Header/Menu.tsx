import { menuItemsData } from '../../inc/menuItemsData';
import MenuItems from './MenuItems';

const Menu = () => {
    return (
        <ul className="flex flex-col text-regal-black text-2xl md:text-base md:flex-row md:items-center gap-6 md:text-white font-semibold">
            {menuItemsData.map((menu, index) => {
                return <MenuItems key={index} items={menu}  />
            })}
        </ul>
    )
}

export default Menu
