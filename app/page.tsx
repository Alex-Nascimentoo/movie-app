'use client'

import { useState, useEffect } from "react"

import Sidebar from "./utils/sidebar"
import MovieCard from "./components/movieCard"

async function getMovieList() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`, {
    method: 'GET',
    headers: {
      "accept": "application/json"
    }
  }).then(response => response.json())
    .catch(err => console.log(err))

  return res.results
}

interface IMovie {
  id: number,
  vote_average: number,
  title: string,
  release_date: string,
  poster_path: string
}

export default function Home() {
  const [movieList, setMovieList] = useState<IMovie[]>([])

  const fetchMovies = async() => {
    const data = await getMovieList()
    setMovieList(data)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <main className="container mx-auto py-7">
      <h1 className="text-3xl font-bold">Popular Movies</h1>
      <div className="content mt-5 flex flex-col gap-7 md:flex-row">
        <Sidebar />
        <section id="grid-view" className="w-full grid gap-7 place-items-center">
          {
            movieList.map(movie => (
              <MovieCard
                key={0}
                percentage={movie.vote_average}
                title={movie.title}
                date={movie.release_date}
                img={movie.poster_path}
                id={movie.id}
              />
            ))
          }          
        </section>
      </div>
    </main>
  )
}
