import { useState } from 'react';

import SearchIcon from '../assets/images/icons/search-icon.svg?react';
import { submenu } from '../inc/menuItemsData';

const Search = () => {
    const [value, setValue] = useState('');

    return (
        <form className=''>
            <label htmlFor="search" className="mb-2 text-sm font-medium text-regal-black/50 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <SearchIcon className='fill-regal-blue relative z-20 w-5 h-5' />
                </div>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    type="search"
                    id="search"
                    className="block w-full py-3 ps-12 font-medium rounded bg-white
                        focus:ring-blue-500 focus:border-blue-500 placeholder:text-regal-gray outline-regal-blue"
                    placeholder="Find a services"
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
    )
}
export default Search
