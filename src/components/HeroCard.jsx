import React, { useState } from 'react'
import Cards from './Cards'

function HeroCard() {

    const [onSort, setOnSort] = useState(false);

    const onSortItem = () => {
        setOnSort(!onSort);
        console.log(onSort);
    }

    return (
        <div className='bg-[#F5F5F5]'>
            <div className="p-40">
                <div className="flex justify-between">
                    <div className="flex text-gray-600">
                        <p className="hover:text-black hover:border-b-4 hover:border-b-green-700 font-bold mx-4">All Submissions</p>
                        <p className="hover:text-black hover:border-b-4 hover:border-b-green-700 font-bold mx-4">Favourite Submissions</p>
                    </div>
                    <div className="flex">
                        <div className="relative mx-4">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </div>
                            <input type="search" id="default-search"
                                className="px-4 pl-8 py-1 text-sm text-gray-600 border border-gray-600 rounded-2xl bg-gray-50" placeholder="Search" />
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">
                                    <button onClick={onSortItem} className="cursor-pointer border border-gray-500 rounded-xl px-4 pt-1 mb-2">Sort</button>
                                    {onSort ? <div id='sort' className='absolute border border-gray-400 p-2 rounded-md bg-white'>
                                        <ul>
                                            <li className="border-b cursor-pointer border-b-gray-400">Newest</li>
                                            <li className="cursor-pointer">Oldest</li>
                                        </ul>
                                    </div> : null}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Cards />
            </div>
        </div>
    )
}

export default HeroCard
