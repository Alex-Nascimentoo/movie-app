import Image from "next/image"

export default function Banner() {
  return (
    <div className="border-b border-gray-300 py-6 min-w-fit">
      <div className="shadow-md rounded-lg overflow-hidden aspect-video w-full max-h-64">
        <Image
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"
          alt="Movie banner"
          width={10000}
          height={10000}
          objectFit="cover"
          quality={100}
        />
      </div>
    </div>
  )
}