'use client'

import { useState } from "react"
import { BiSearch } from 'react-icons/bi'
import Image from "next/image"

import '../styles/header.css'

export default function Header() {
  const [visibility, setVisibility] = useState('hidden')

  function toggleMenu() {
    visibility === 'hidden' ? setVisibility('') : setVisibility('hidden')
  }

  return (
    <header className="bg-sky-950">
      <div className={`${visibility} absolute w-full h-full top-0 left-0 flex items-center justify-center`}>
        <div className="fixed w-full h-screen top-0 left-0 z-40 bg-gradient-to-tr from-sky-950 to-sky-800/70 backdrop-blur-sm"></div>

        <nav className="w-full relative z-50 text-slate-100 text-xl font-bold flex flex-col gap-9 justify-center">
          <ul className="flex flex-col items-center gap-4">
            <li>Movies</li>
            <li>TV Shows</li>
            <li>People</li>
            <li>More</li>
          </ul>

          <div className="options flex flex-col items-center gap-5">
            <p className="cursor-pointer text-3xl font-black">+</p>
            <p>EN</p>
            <p>Login</p>
            <p>Join TMDB</p>
            <p>
              <BiSearch
                color="#0ea5e9"
                fontSize="1.5rem"
              />
            </p>
          </div>
        </nav>
      </div>

      <div className="container mx-auto text-slate-100 flex items-center py-4 gap-6 justify-between relative">
        <a className="text-3xl font-bold" href="/">
          <Image
            src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
            alt="TMDB logo"
            width={200}
            height={200}
          />
        </a>

        <button className='text-5xl md:hidden relative z-50' onClick={toggleMenu}>=</button>

        <nav className="w-full hidden md:flex justify-between">
          <ul className="flex items-center gap-4">
            <li id="movies" className="cursor-pointer">
              Movies
              <div id="dropdown" className="absolute z-50 hidden flex-col gap-3 bg-slate-100 shadow-md text-black p-2 w-36 rounded-md border border-slate-300">
                <a href="/">Popular</a>
                <a href="/movies/upcoming">Upcoming</a>
                <a href="/movies/top-rated">Top Rated</a>
              </div>
            </li>
            <li className="cursor-pointer">TV Shows</li>
            <li className="cursor-pointer">People</li>
            <li className="cursor-pointer">More</li>
          </ul>

          <div className="options flex items-center gap-5">
            <p className="cursor-pointer text-3xl font-black">+</p>
            <p className="cursor-pointer border px-1 rounded-sm">EN</p>
            <p className="cursor-pointer">Login</p>
            <p className="cursor-pointer">Join TMDB</p>
            <p className="cursor-pointer">
              <BiSearch
                color="#0ea5e9"
                fontSize="1.5rem"
              />
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}