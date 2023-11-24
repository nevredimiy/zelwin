import { useState } from 'react';

import CartIcon from '../../assets/images/icons/cart-icon.svg?react';

import logo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/icons/burger-icon.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import Menu from './Menu';
import Search from './Search';
import { Link } from 'react-router-dom';

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
            <div className="container">
               <div className="flex justify-between items-center p-3 h-full relative z-20 before:absolute before:top-0 before:w-full before:left-0 before:h-full
            before:z-20 before:bg-regal-blue">
                <Link to="/" title='Logo'><img className='hover:opacity-75 transition relative z-30' src={logo} alt="Logo" /></Link>

                {/* burger menu */}
                <button className='md:hidden relative z-20 w-6 flex justify-center items-center' onClick={handleOnOpen} type='button'>
                    <img className={`absolute hover:opacity-75 transition ${burgerClass}`} src={burgerIcon} alt="Menu" />
                    <img className={`absolute hover:opacity-75 transition ${closeClass}`} src={closeIcon} alt="Close Menu" />
                </button>

                <nav className={`${menuClass} transition-all duration-700 fixed left-0 w-full px-4 py-6 bg-white md:flex md:justify-center md:translate-y-0 md:bg-transparent  md:p-0 md:z-20`}>
                    <Menu />
                </nav>

                <div className="flex items-center gap-4 relative">
                   <Search />

                    <div className='group relative z-20'>
                        <button title='Cart' type="button" className='border border-transparent rounded-full px-5 py-2 bg-white hover:border-white transition hover:bg-regal-blue'>
                            <CartIcon className="fill-regal-blue transition group-hover:fill-white" />
                        </button>
                    </div>
                </div>
            </div>
            </div>

        </header>
    )
}

export default Header
