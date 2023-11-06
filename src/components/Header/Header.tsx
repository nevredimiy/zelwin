import { useState } from 'react';
import ButtonRounded from '../ButtonRounded';

import SearchIcon from '../../assets/images/icons/search-icon.svg?react';
import CartIcon from '../../assets/images/icons/cart-icon.svg?react';

import logo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/icons/burger-icon.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';

const Header = () => {
    const [isOpenMobileMenu, setIsOpenMobileMinu] = useState(false);
    const [burgerClass, setBurgerClass] = useState('opacity-100 visible');
    const [closeClass, setCloseClass] = useState('opacity-0 invisible');
    const [menuClass, setMenuClass] = useState('-translate-y-full');


    const handleOnOpen = () => {
        setIsOpenMobileMinu(!isOpenMobileMenu);
        if (isOpenMobileMenu) {
            setBurgerClass('opacity-100 visible');
            setCloseClass('opacity-0 invisible');
            setMenuClass('-translate-y-full');
        } else {
             setBurgerClass('opacity-0 invisible');
            setCloseClass('opacity-100 visible');
            setMenuClass('top-16 translate-y-0');
        }
    }

    return (
        <header className='bg-regal-blue fixed z-50 top-0 left-0 w-full h-16'>
            <div className="flex justify-between items-center py-3 px-3 h-full relative z-20 before:absolute before:top-0 before:w-full before:left-0 before:h-full
            before:z-20 before:bg-regal-blue">
                <a  href="#" title='Logo'><img className='hover:opacity-75 transition relative z-20' src={logo} alt="Logo" /></a>
                <button className='md:hidden relative z-20 w-6 flex justify-center items-center' onClick={handleOnOpen} type='button'>
                    <img className={`absolute hover:opacity-75 transition ${burgerClass}`} src={burgerIcon} alt="Menu" />
                    <img className={`absolute hover:opacity-75 transition ${closeClass}`} src={closeIcon} alt="Close Menu" />
                </button>
                <nav className={`${menuClass} transition-all duration-700 fixed left-0 w-full px-4 py-6 bg-white md:flex md:justify-center md:translate-y-0 md:bg-transparent md:relative md:p-0 md:z-20`}>
                    <ul className="flex flex-col text-regal-black text-2xl md:text-base md:flex-row md:items-center gap-6 md:text-white font-semibold">
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Services</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">About us</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Cases</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Contacts</a></li>
                    </ul>
                </nav>
                <div className="flex items-center gap-4">
                    <button title='Search' type='button'><SearchIcon className='fill-white hover:opacity-75 relative z-20' /></button>
                    <button className='group relative z-20' title='cart' type='button'>
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
