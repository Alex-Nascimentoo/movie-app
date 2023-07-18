'use client'

import { useState } from 'react';

function Sidebar() {
  const [visibilitySort, setVisibilitySort] = useState('closed')
  const [visibilityWhere, setVisibilityWhere] = useState('closed')
  const [visibilityFilters, setVisibilityFilters] = useState('closed')

  function toggleCardViewSort() {
    visibilitySort === '' ? setVisibilitySort('closed') : setVisibilitySort('')
  }

  function toggleCardViewWhere() {
    visibilityWhere === '' ? setVisibilityWhere('closed') : setVisibilityWhere('')
  }

  function toggleCardViewFilters() {
    visibilityFilters === '' ? setVisibilityFilters('closed') : setVisibilityFilters('')
  }

  return (
    <aside className='md:w-1/4 md:max-w-xs'>
      <div className={`p-2 rounded-md shadow-md ${visibilitySort}`}>
        <h1
          className="text-xl font-semibold my-2 cursor-pointer"
          onClick={toggleCardViewSort}
        >Sort</h1>
        <div className="border-t border-gray-300 p-2">
          <p>Sort Results By</p>
          <select className='p-2 rounded-md mt-2' name="" id="">
            <option value="">Value 1</option>
            <option value="">Value 2</option>
          </select>
        </div>
      </div>

      <div className={`p-2 rounded-md shadow-md mt-4 ${visibilityWhere}`}>
        <h1
          className="text-xl font-semibold my-2 cursor-pointer"
          onClick={toggleCardViewWhere}
        >Where To Watch</h1>
        <div className="border-t border-gray-300 p-2">
          <p>My services</p>

          <label htmlFor="" className='block pb-2 border-b border-gray-300'>
            <input type="checkbox" className='mr-2' name="" id="" />
            Restrict searches to my subscribed services?
          </label>

          <p className='my-2'>Country</p>
          <select className='p-2 rounded-md' name="" id="">
            <option value="">Brazil</option>
            <option value="">Canada</option>
            <option value="">England</option>
          </select>

          <div id='grid-view-min' className="w-full grid place-items-center mt-3 gap-3">
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
            <div className="w-20 h-20 bg-blue-300 rounded-md"></div>
          </div>
        </div>
      </div>

      <div className={`p-2 rounded-md shadow-md mt-4 ${visibilityFilters}`}>
        <h1
          className="text-xl font-semibold my-2 cursor-pointer"
          onClick={toggleCardViewFilters}
        >Filters</h1>
        <div className="border-t border-gray-300 p-2">
          <p>Show Me</p>

          <label className='block mt-1'>
            <input className='mr-2' type="radio" name="" id="" />
            Everything
          </label>

          <label className='block'>
            <input className='mr-2' type="radio" name="" id="" />
            Movies I Haven&apos;t Seen
          </label>

          <label className='block border-b border-gray-300 pb-4'>
            <input className='mr-2' type="radio" name="" id="" />
            Movies I Have Seen
          </label>

          <p className='mt-3 mb-1'>Availabilities</p>
          <label className='block border-b border-gray-300 pb-4'>
            <input className='mr-2' type="checkbox" name="" id="" />
            Search all availabilities?
          </label>

          <p className='mt-3 mb-1'>Release Date</p>
          <label htmlFor="">
            <input className='mr-2' type="checkbox" name="" id="" />
            Search all releases?
          </label>

          <div className='flex justify-between items-center my-4'>
            <p className='inline-block'>from</p>
            <input className='bg-gray-300 rounded-md ml-4 p-2' type="date" name="" id="" />
          </div>

          <div className='flex justify-between items-center border-b border-gray-300 pb-4'>
            <p className='inline-block'>to</p>
            <input className='bg-gray-300 rounded-md ml-4 p-2' type="date" name="" id="" />
          </div>

          <p className='mt-3 mb-2'>Genres</p>
          <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-4">
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Action</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Adventure</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Animation</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Comedy</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Crime</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Documentary</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Drama</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Family</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">Fantasy</a>
          </div>

          <p className='mt-3 mb-2'>Certification</p>
          <div className="flex flex-wrap gap-2 border-b border-gray-300 pb-4">
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">L</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">10</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">12</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">14</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">16</a>
            <a className='border-2 border-slate-300 py-1 px-2 rounded-full hover:bg-blue-500 hover:text-slate-100 duration-200' href="/">18</a>
          </div>

          <p className='mt-3 mb-2'>Language</p>
          <div className="border-b border-gray-300 pb-4">
            <select className='p-2 rounded-md' name="" id="">
              <option value="">Portuguese</option>
              <option value="">English</option>
              <option value="">Spanish</option>
            </select>
          </div>

          <p className='mt-3 mb-2'>User Score</p>
          <div className="border-b border-gray-300 pb-4">
            <input type="range" name="" id="" />
          </div>

          <p className='mt-3 mb-2'>Minimum User Votes</p>
          <div className="border-b border-gray-300 pb-4">
            <input type="range" name="" id="" />
          </div>

          <p className='mt-3 mb-2'>Runtime</p>
          <div className="border-b border-gray-300 pb-4">
            <input type="range" name="" id="" />
          </div>

          <p className='mt-3 mb-2'>Runtime</p>
          <div>
            <input className='border-2 border-slate-300 p-2 rounded-md outline-none' type="text" placeholder='Filter by keywords...' name="" id="" />
          </div>
        </div>
      </div>

      <a className='block rounded-full p-1 mt-4 bg-blue-500 text-slate-100 text-center text-xl font-semibold' href="/">Search</a>
    </aside>
  )
}

export default Sidebar