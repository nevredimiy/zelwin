import { useState, useEffect } from 'react';

import SearchIcon from '../../assets/images/icons/search-icon.svg?react';
import { submenu } from '../../inc/menuItemsData';
import { useResize } from '../../inc/useResize';

const Search = () => {
    const [activeSearch, setActiveSearch] = useState(false);
    const [value, setValue] = useState('');
    const widthScreen = useResize();

    useEffect(() => {
        if (widthScreen > 1279) setActiveSearch(true);
        if (widthScreen < 1280) setActiveSearch(false);

    }, [widthScreen]);
    return (
        <>
            <button onClick={() => setActiveSearch(!activeSearch)} className='xl:hidden' title='Search' type='button'><SearchIcon className='fill-white hover:opacity-75 relative z-20' /></button>

            <form
                className={`
                            ${activeSearch ? 'scale-100 visible opacity-100' : 'scale-0 invisible opacity-0'} absolute top-14 min-w-max right-10
                            xl:block xl:relative z-20 xl:top-0 xl:right-0 transition-transform
                            `}>
                <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                        <SearchIcon className='fill-regal-blue xl:fill-white relative z-20 w-4 h-4' />
                    </div>
                    <input
                        onChange={(e) => setValue(e.target.value)}
                        type="search"
                        id="search"
                        className="
                                    block w-full p-2 ps-10 text-sm xl:text-white border border-regal-blue xl:border-white rounded-lg
                                    bg-white xl:bg-regal-blue focus:ring-blue-500 focus:border-blue-500 xl:placeholder:text-light-blue placeholder:text-regal-gray
                                     outline-none
                                    "
                        placeholder="Search a services"
                        required
                    />
                </div>
                {(value !== '') &&
                    <div className="absolute bg-white top-full border border-regal-blue rounded-md p-2 w-full">
                        {
                            submenu.filter(item => {
                                if (item.title.toLowerCase().includes(value.toLowerCase()))
                                    return item;
                            }).map(item => (
                                <div key={item.id} className=" py-2">
                                    <a href={item.url}>
                                        {item.title}
                                    </a>

                                </div>
                            ))
                        }
                    </div>
                }

            </form>
        </>
    )
}

export default Search
