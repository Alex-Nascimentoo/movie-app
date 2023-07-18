'use client'

import Image from "next/image"

type PersonCardProps = {
  name: string,
  character: string,
  img: string
}

function PersonCard({ name, character, img }: PersonCardProps) {

  return (
    <div id="person-card" className="shadow-md min-w-fit w-full h-full rounded-lg overflow-hidden">
      <div id="person-card" className="">
        <Image
          src={`https://www.themoviedb.org/t/p/w138_and_h175_face${img}`}
          alt="cast profile picture"
          width={1000}
          height={1000}
          quality={100}
        />
      </div>

      <div className="p-3 relative max-w-max">
        <h2 className="font-bold text-lg">{name}</h2>
        <p>{character}</p>
      </div>
    </div>
  )
}

export default PersonCard