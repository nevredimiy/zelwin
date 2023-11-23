import { useRef, useState, useEffect } from 'react';
import chevron from '../assets/images/faq/chevron.svg';

interface CustomSelectProps {
    rootClass: string;
    items: string[];
}

const CustomSelect = ({ rootClass, items }: CustomSelectProps) => {
    const [countItem, setCountItem] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const listRef = useRef<HTMLUListElement>(null);
    const listHeightRef = useRef('');

    const handleSelect = () => {
        setIsOpen(!isOpen);
        console.dir(listRef.current);
    }
    const handleSelectItem = (index: number) => {
        setCountItem(index);
        setIsOpen(false);
    }

    useEffect(() => {
        if (listRef.current) listHeightRef.current = 'h-[' + listRef.current.clientHeight + 'px]';
    }, [isOpen])

    return (
        <div className={`${rootClass} relative`}>
            <button onClick={handleSelect} className='bg-white border border-transparent font-medium w-full py-3 px-4 rounded-md flex justify-between items-center focus:border focus:border-regal-black' type='button'>
                {items[countItem]}
                <img className={`${isOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} src={chevron} alt="" />
            </button>
            <ul ref={listRef} className={`${isOpen ? `visible opacity-100 ${listHeightRef.current}` : 'invisible opacity-0 h-0'} duration-500 transition bg-white rounded-md py-3 absolute top-full inset-x-0`}>
                {items.map((item, index) => {
                    return <li className='hover:bg-accent-blue px-4 py-2 cursor-pointer' onClick={() => handleSelectItem(index)} key={index}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default CustomSelect
