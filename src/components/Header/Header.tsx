import { useState } from 'react';
import ButtonRounded from '../ButtonRounded';

import SearchIcon from '../../assets/images/icons/search-icon.svg?react';
import CartIcon from '../../assets/images/icons/cart-icon.svg?react';

import logo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/icons/burger-icon.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import Menu from './Menu';

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
            <div className="flex justify-between items-center p-3 h-full relative z-20 before:absolute before:top-0 before:w-full before:left-0 before:h-full
            before:z-20 before:bg-regal-blue">
                <a href="#" title='Logo'><img className='hover:opacity-75 transition relative z-20' src={logo} alt="Logo" /></a>

                {/* burger menu */}
                <button className='md:hidden relative z-20 w-6 flex justify-center items-center' onClick={handleOnOpen} type='button'>
                    <img className={`absolute hover:opacity-75 transition ${burgerClass}`} src={burgerIcon} alt="Menu" />
                    <img className={`absolute hover:opacity-75 transition ${closeClass}`} src={closeIcon} alt="Close Menu" />
                </button>

                <nav className={`${menuClass} transition-all duration-700 fixed left-0 w-full px-4 py-6 bg-white md:flex md:justify-center md:translate-y-0 md:bg-transparent  md:p-0 md:z-20`}>
                    <Menu />
                </nav>

                <div className="flex items-center gap-4">
                    <button className='xl:hidden' title='Search' type='button'><SearchIcon className='fill-white hover:opacity-75 relative z-20' /></button>

                    <form className='hidden xl:block relative z-20'>
                        <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                                <SearchIcon className='fill-white hover:opacity-75 relative z-20 w-4 h-4' />
                            </div>
                            <input type="search" id="search" className="block w-full p-2 ps-10 text-sm text-white border border-white rounded-lg bg-regal-blue focus:ring-blue-500 focus:border-blue-500 placeholder:text-light-blue" placeholder="Search a service" required />
                        </div>
                    </form>

                    <div className='group relative z-20'>
                        <ButtonRounded rootClass='px-5 py-2 bg-white hover:bg-active-gray'>
                            <CartIcon className="fill-regal-blue transition group-hover:translate-x-1" />
                        </ButtonRounded>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
