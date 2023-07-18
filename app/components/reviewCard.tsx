'use client'

import Image from "next/image"

function ReviewCard() {

  return (
    <div className="shadow-md min-w-fit h-fit rounded-lg px-3 py-4 mb-4">

      <div className="flex items-center mb-3">
        <div className="w-24 aspect-square rounded-full overflow-hidden">
          <Image
            src="https://www.themoviedb.org/t/p/w138_and_h175_face/jCrjAt7L1SO4TOC0O6Nr7ZZU8vS.jpg"
            alt="Profile picture"
            width={1000}
            height={1000}
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="p-3 relative">
          <h2 className="font-bold text-2xl">A review by Someone</h2>
          <p>Written by <span className="font-semibold">Someone</span> on May 22, 2023</p>

        </div>
      </div>

      <p className="md:pl-28 md:pr-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo dignissimos rerum perferendis labore, perspiciatis cupiditate eum vel sunt, praesentium inventore rem, consequatur officiis ut distinctio qui voluptas placeat error dolorem harum quis. Quibusdam reprehenderit rem, quia quos facere asperiores deserunt sapiente aut tempore ipsum sit recusandae est maiores neque incidunt.</p>
    </div>
  )
}

export default ReviewCard