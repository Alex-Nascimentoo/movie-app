import Image from "next/image"

type MiniBannerProps = {
  title: string,
  percentage: number,
  img: string
}

export default function MiniBanner(props: MiniBannerProps){
  return (
    <div className="min-w-fit max-w-xs inline-block">
      <div className="shadow-md rounded-lg overflow-hidden aspect-video min-w-fit h-fit max-h-40">
        <Image
          src={`https://www.themoviedb.org/t/p/w250_and_h141_face${props.img}`}
          alt="Movie banner"
          width={1000}
          height={1000}
          objectFit="cover"
          quality={100}
        />
      </div>

      <div className="flex justify-between gap-3 mt-1 px-1">
        <p className="w-4/5 overflow-hidden whitespace-nowrap text-ellipsis">{props.title}</p>
        <p className="text-right">{props.percentage}%</p>
      </div>
    </div>
  )
}