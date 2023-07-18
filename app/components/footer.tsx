'use client'

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-sky-950 py-9">
      <div className="container mx-auto flex flex-col gap-7 justify-center items-center md:flex-row">
        <div className="flex flex-col items-center gap-5 md:items-end">
          <div>
            <Image
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="TMDB logo"
              width={150}
              height={150}
            />
          </div>
          <a className="bg-slate-100 p-2 rounded-md font-bold text-cyan-600" href="/">Gather with the community!</a>
        </div>
        <div className="flex flex-col text-center sm:flex-row sm:text-left gap-7 text-slate-100">
          <ul>
            <li><h1 className="font-bold text-xl">THE BASICS</h1></li>
            <li><a href="">About TMDB</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Support Forums</a></li>
            <li><a href="">API</a></li>
            <li><a href="">System Status</a></li>
          </ul>
          <ul>
            <li><h1 className="font-bold text-xl">GET INVOLVED</h1></li>
            <li><a href="">Contribution Bible</a></li>
            <li><a href="">Add New Movie</a></li>
            <li><a href="">Add New TV Show</a></li>
          </ul>
          <ul>
            <li><h1 className="font-bold text-xl">COMMUNITY</h1></li>
            <li><a href="">Guidelines</a></li>
            <li><a href="">Discussions</a></li>
            <li><a href="">Leaderboard</a></li>
            <li><a href="">Twitter</a></li>
          </ul>
          <ul>
            <li><h1 className="font-bold text-xl">LEGAL</h1></li>
            <li><a href="">Terms of Use</a></li>
            <li><a href="">API Terms of Use</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}