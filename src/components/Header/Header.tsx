import { useState, useRef, useEffect } from 'react';
import ButtonRounded from '../ButtonRounded';

import SearchIcon from '../../assets/images/icons/search-icon.svg?react';
import CartIcon from '../../assets/images/icons/cart-icon.svg?react';

import logo from '../../assets/images/logo.svg';
import burgerIcon from '../../assets/images/icons/burger-icon.svg';
import closeIcon from '../../assets/images/icons/close-icon.svg';

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const [isOpenMobileMenu, setIsOpenMobileMinu] = useState(false);
    const [burgerClass, setBurgerClass] = useState('opacity-100 visible');
    const [closeClass, setCloseClass] = useState('opacity-0 invisible');
    const [menuClass, setMenuClass] = useState('hidden');
    const [height, setHeight] = useState<number | undefined>(undefined);

    useEffect(() => {
        if (headerRef.current) {
            const newHeight: number = headerRef.current.offsetHeight;
            setHeight(newHeight);
        }
    }, []);


    const handleOnOpen = () => {
        setIsOpenMobileMinu(!isOpenMobileMenu);
        if (isOpenMobileMenu) {
            setBurgerClass('opacity-100 visible');
            setCloseClass('opacity-0 invisible');
            setMenuClass('hidden');
        } else {
             setBurgerClass('opacity-0 invisible');
            setCloseClass('opacity-100 visible');
            setMenuClass('flex top-[' + height +'px]');
        }
    }
    useEffect(() => {}, [])

    return (
        <header ref={headerRef} className='bg-regal-blue py-4'>
            <div className="flex justify-between items-center px-3">
                <a  href="#" title='Logo'><img className='hover:opacity-75 transition' src={logo} alt="Logo" /></a>
                <button className='relative w-6 flex justify-center items-center' onClick={handleOnOpen} type='button'>
                    <img className={`absolute hover:opacity-75 transition ${burgerClass}`} src={burgerIcon} alt="Menu" />
                    <img className={`absolute hover:opacity-75 transition ${closeClass}`} src={closeIcon} alt="Close Menu" />
                </button>
                <nav className={`${menuClass} md:flex absolute left-0 px-4 py-6 bg-white w-full`}>
                    <ul className={`flex flex-col text-regal-black text-2xl md:text-base md:flex-row md:items-center gap-6 md:text-white font-semibold`}>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Services</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">About us</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Cases</a></li>
                        <li ><a className='p-2 hover:opacity-75 md:hover:text-active-gray' href="">Contacts</a></li>
                    </ul>
                </nav>







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
