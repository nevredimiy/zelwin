import logo from '../assets/images/logo.svg';
import burgerIcon from '../assets/images/icons/burger-icon.svg';
import SearchIcon from '../assets/images/icons/search-icon.svg?react';
import CartIcon from '../assets/images/icons/cart-icon.svg?react';
import ButtonRounded from './ButtonRounded';
import { useState } from 'react';


const Header = () => {
    const [isOpenMobileMenu, setIsOpenMobileMinu] = useState(false);
    const handleBurger = () => {
        setIsOpenMobileMinu(!isOpenMobileMenu);
    }

    return (
        <header className='bg-regal-blue py-4'>
            <div className="flex justify-between px-3">
                <a href="#" title='Logo'><img className='hover:opacity-75 transition' src={logo} alt="Logo" /></a>

                    <button onClick={handleBurger} className='md:hidden' type='button'><img className='hover:opacity-75 transition' src={burgerIcon} alt="Menu" /></button>
                    <ul className='hidden md:flex items-center gap-6 text-white font-semibold hover:text-active-gray'>
                        <li><a href="">Services</a></li>
                        <li><a href="">About us</a></li>
                        <li><a href="">Cases</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>

                <div className="flex items-center gap-4">
                    <button title='Search' type='button'><SearchIcon className='fill-white hover:opacity-75' /></button>
                    <button className='group' title='cart' type='button'>
                        <ButtonRounded bgButton='bg-white hover:bg-active-gray'>
                            <CartIcon className="fill-regal-blue transition group-hover:opacity-75" />
                        </ButtonRounded>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header
