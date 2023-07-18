'use client'

import { useRouter } from "next/navigation"
import Image from "next/image"

import ProgressCircle from "../utils/progressCircle"
import Date from "../utils/date"

type MovieCardProps = {
  id: number,
  percentage: number,
  title: string,
  date: string,
  img: string
}

function MovieCard(props: MovieCardProps) {
  const router = useRouter()

  return (
    <div className="shadow-md min-w-fit max-w-xs h-full rounded-md overflow-hidden">
      <div className="max-w-xs cursor-pointer" onClick={() => router.push(`/details/${props.id}`)}>
        <Image
          src={`https://www.themoviedb.org/t/p/w220_and_h330_face${props.img}`}
          alt="Movie poster image"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="p-3 relative">
        <ProgressCircle percentage={props.percentage * 10} absolute={true} />

        <h2 className="font-bold mt-5">{props.title}</h2>
        <p><Date dateString={props.date}/></p>
      </div>
    </div>
  )
}

export default MovieCard