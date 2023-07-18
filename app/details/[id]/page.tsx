'use client'

import Image from "next/image"
import { BiListPlus, BiSolidHeart, BiSolidBookmark, BiSolidStar, BiPlay } from 'react-icons/bi'

import { Year, Full } from "@/app/utils/date"
import ProgressCircle from "@/app/utils/progressCircle"
import DetailSidebar from "@/app/components/detailSidebar"
import PersonCard from "@/app/components/personCard"
import ReviewCard from "@/app/components/reviewCard"
import Banner from "@/app/components/banner"
import MiniBanner from "@/app/components/miniBanner"
import { useEffect, useState } from "react"

async function getMovieInfo(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`, {
    method: 'GET',
    headers: {
      "accept": "application/json"
    }
  }).then(response => response.json())
    .catch(err => console.log(err))

  return res
}

async function getPeopleInfo(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.API_KEY}`, {
    method: 'GET',
    headers: {
      "accept": "application/json"
    }
  }).then(response => response.json())
    .catch(err => console.log(err))

    return res
    // console.log(res)
}

async function getKeywords(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${process.env.API_KEY}`, {
    method: 'GET',
    headers: {
      "accept": "application/json"
    }
  }).then(response => response.json())
    .catch(err => console.log(err))

    return res
}

async function getRecommendations(id: string) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.API_KEY}`, {
    method: 'GET',
    headers: {
      "accept": "application/json"
    }
  }).then(response => response.json())
    .catch(err => console.log(err))

    return res.results
}

type DetailsParams = {
  params: {
    id: string
  }
}

interface IKeywords {
  keywords: [{
    id: number,
    name: string
  }]
}

const sampleKeywords: IKeywords = {
  keywords: [{
    id: 0,
    name: 'keyword'
  }]
}

interface IMovie {
  title: string,
  poster_path: string,
  backdrop_path: string,
  overview: string,
  tagline: string,
  vote_average: number,
  release_date: string,
  budget: number,
  revenue: number,
  original_language: string
  status: string,
  genres: [{
    id: number,
    name: string
  }],
  runtime: number,
}

const sampleMovie: IMovie = {
  title: 'title',
  poster_path: 'path',
  backdrop_path: 'path',
  overview: 'overview',
  tagline: 'tagline',
  vote_average: 50,
  release_date: '2023-07-17',
  budget: 0,
  revenue: 0,
  original_language: 'en',
  status: 'testing',
  genres: [{
    id: 0,
    name: 'genre title'
  }],
  runtime: 0
}

type Crew = {
  id: number,
  name: string,
  job: string
}

type CastPerson = {
  id: number,
  name: string,
  character: string,
  profile_path: string
}

interface IPeople {
  cast: [CastPerson],
  crew: [Crew]
}

const samplePeople: IPeople = {
  cast: [{
    id: 0,
    name: 'username',
    character: 'character name',
    profile_path: 'profile_path'
  }],
  crew: [{
    id: 0,
    name: 'name',
    job: 'job'
  }]
}

interface IRecommendation {
  id: number,
  poster_path: string,
  title: string,
  vote_average: number
}

const sampleRecommendation: IRecommendation[] = [{
  id: 0,
  poster_path: 'poster_path',
  title: 'sample',
  vote_average: 0
}]

export default function Details({ params }: DetailsParams) {
  const [movie, setMovie] = useState<IMovie>(sampleMovie)
  const [people, setPeople] = useState<IPeople>(samplePeople)
  const [keywords, setKeywords] = useState<IKeywords>(sampleKeywords)
  const [recommendations, setRecommendations] = useState<IRecommendation[]>(sampleRecommendation)
  const id = params.id

  const fetchData = async(id: string) => {
    const movieInfo = await getMovieInfo(id)
    const peopleInfo = await getPeopleInfo(id)
    const keywords = await getKeywords(id)
    const recommendations = await getRecommendations(id)

    setMovie(movieInfo)
    setPeople(peopleInfo)
    setKeywords(keywords)
    setRecommendations(recommendations)
  }

  useEffect(() => {
    fetchData(id)
  }, [id])
  
  return (
    <main>
      <nav className="flex justify-center p-3">
        <ul className="flex gap-8">
          <li>Overview</li>
          <li>Media</li>
          <li>Fandom</li>
          <li>Share</li>
        </ul>
      </nav>

      <section
        className="relative overflow-hidden text-slate-100 font-bold"
      >
        <div className="flex justify-end bg-black absolute w-full h-full -z-10 before:content-[''] before:absolute before:bg-black before:opacity-80 before:w-full before:h-full before:top-0 before: left-0 before:z-1">
          <Image
            src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.backdrop_path}`}
            alt="Movie backdrop image"
            width={1000}
            height={1000}
            objectFit="cover"
            quality={100}
        />
        </div>
        <div className="container mx-auto p-5 flex flex-col items-center gap-5 md:flex-row">
          <div className="w-72 h-fit md:w-full md:max-w-xs">
            <Image
              src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
              alt="Movie poster image"
              width={1000}
              height={1000}
              objectFit="cover"
              className="relative rounded-md"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="leading-loose">
              <h2 className="text-2xl">{movie.title} <span className="font-normal">(<Year dateString={movie.release_date} />)</span></h2>
              {/* <p><span className="border p-1 rounded-sm mr-1">14</span> <Full dateString={movie.release_date} /> (BR) · Action, Crime, Thriller · 2h 22m</p> */}
              <p><span className="border p-1 rounded-sm mr-1">14</span> <Full dateString={movie.release_date} /> (BR) · {movie.genres.map(genre => genre.name).join(', ')} · {`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}</p>
            </div>

            <div className="flex flex-wrap gap-3">
              <ProgressCircle percentage={movie.vote_average * 10} />

              <p className="ml-2">User <br /> Score</p>

              <a className="p-3 w-max rounded-full mr-3 bg-sky-950" href="/">
                <BiListPlus fontSize="1.5rem" />
              </a>
              <a className="p-3 w-max rounded-full mr-3 bg-sky-950" href="/">
                <BiSolidHeart fontSize="1.5rem" />
              </a>
              <a className="p-3 w-max rounded-full mr-3 bg-sky-950" href="/">
                <BiSolidBookmark fontSize="1.5rem" />
              </a>
              <a className="p-3 w-max rounded-full mr-3 bg-sky-950" href="/">
                <BiSolidStar fontSize="1.5rem" />
              </a>
              <a className="p-3 rounded-ful flex" href="/">
                <BiPlay fontSize="1.5rem" /> Play Trailer
              </a>
            </div>

            <div>
              <p className="font-normal">{ movie.tagline }</p>

              <h2 className="text-xl mt-4">Overview</h2>
              <p className="font-normal">{ movie.overview }</p>
            </div>

            <div className="grid grid-cols-3 gap-y-5">
              {
                people.crew.slice(0, 6).map(person => (
                  <div key={person.id}>
                    <h3>{person.name}</h3>
                    <p className="font-normal">{person.job}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-6 flex flex-col lg:flex-row gap-5">
        <div className="w-full overflow-hidden">
          <div className="border-b border-gray-300 pb-4">
            <h1 className="text-2xl font-bold">Top Billed Cast</h1>
            <div className="py-3 mb-3 flex gap-5 overflow-x-scroll">
              {
                people.cast.slice(0, 12).map(person => (
                  <PersonCard
                    key={person.id}
                    name={person.name}
                    character={person.character}
                    img={person.profile_path}
                  />
                ))
              }
            </div>
            <a className="text-xl font-bold" href="/">Full Cast & Crew</a>
          </div>
          <div className="border-b border-gray-300 pb-4">
            <header className="flex gap-7 my-4">
              <h1 className="text-2xl font-bold">Social</h1>
              <nav className="flex items-center">
                <a className="font-semibold" href="">Reviews</a>
                <a className="ml-4 font-semibold" href="">Discussions</a>
              </nav>
            </header>
            <ReviewCard />
            <a className="text-xl font-bold" href="">Read All Reviews</a>
          </div>
          <div className=" pt-4">
            <header className="flex gap-7 my-4">
              <h1 className="text-2xl font-bold">Media</h1>
              <nav className="flex items-center">
                <a className="font-semibold" href="">Most Popular</a>
                <a className="ml-4 font-semibold" href="">Videos</a>
                <a className="ml-4 font-semibold" href="">Backdrops</a>
                <a className="ml-4 font-semibold" href="">Posters</a>
              </nav>
            </header>
            <Banner />
            <hr />
            <Banner />
          </div>
          <div>
            <h1 className="text-xl font-bold my-3">Recomendations</h1>
            <div className="flex gap-5 overflow-x-scroll">
              {
                recommendations.map(item => (
                  <MiniBanner
                    key={item.id}
                    title={item.title}
                    percentage={Math.round(item.vote_average * 10)}
                    img={item.poster_path}
                  />
                ))
              }
            </div>
          </div>
        </div>

        <DetailSidebar
          budget={movie.budget}
          revenue={movie.revenue}
          lang={movie.original_language}
          status={movie.status}
          keywords={keywords.keywords}
        />
      </section>
    </main>
  )
}