import Image from "next/image"
import { BiLogoFacebookCircle, BiLogoTwitter, BiLogoInstagram, BiLink } from 'react-icons/bi'

type DetailSidebarProps = {
  budget: number,
  revenue: number,
  lang: string,
  status: string,
  keywords: [{
    id: number,
    name: string
  }]
}

export default function DetailSidebar(props: DetailSidebarProps) {
  const money = new Intl.NumberFormat('en-US', {
    style: 'currency', currency: 'USD'
  })

  const language = new Intl.DisplayNames(['en'], {
    type: 'language',
  })

  return (
    <aside className="w-full max-w-xs mt-4">
      <div className="flex items-center justify-center lg:justify-between gap-3">
        <a className="" href="">
          <BiLogoFacebookCircle color="#27272a" fontSize="2.7rem" />
        </a>
        <a className="" href="">
          <BiLogoTwitter color="#27272a" fontSize="2.7rem" />
        </a>
        <a className="" href="">
          <BiLogoInstagram color="#27272a" fontSize="2.7rem" />
        </a>
        <p className="text-5xl font-extralight text-gray-300" >l</p>
        {/* <div className="border-l border-gray-300"> */}
          <a className="" href="">
            <BiLink color="#27272a" fontSize="2.7rem" />
          </a>
      </div>

      <div className="flex flex-col items-center lg:items-start">
        <h3 className="font-bold mt-5">Status</h3>
        <p>{props.status}</p>

        <h3 className="font-bold mt-5">Original language</h3>
        <p>{language.of(props.lang)}</p>

        <h3 className="font-bold mt-5">Budget</h3>
        <p>{money.format(props.budget)}</p>

        <h3 className="font-bold mt-5">Revenue</h3>
        <p>{money.format(props.revenue)}</p>
      </div>

      <div className="border-b border-gray-300 pb-6">
        <h3 className="font-bold mt-5">Keywords</h3>
        <div className="flex flex-wrap gap-3 pt-2">
          {
            props.keywords.map(keyword => (
              <a href="/" key={keyword.id} className="bg-gray-300 rounded-md py-1 px-2">{keyword.name}</a>
            ))
          }

        </div>
      </div>

      <div className="pt-3">
        <h3 className="font-bold mt-5">Content Score</h3>
        <p className="font-bold text-slate-100 p-3 bg-gray-800 rounded-md mt-2">100</p>
        <p>Yes! Looking good!</p>

        <h3 className="font-bold mt-5">Top Contributors</h3>
        <div className="flex gap-3 items-center mt-3">
          <div className="aspect-square rounded-full w-11">
            <Image
              src="https://www.themoviedb.org/t/p/w150_and_h150_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
              alt="Profile picture"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>

          <div>
            <h3 className="font-bold">000</h3>
            <a href="/">nickname</a>
          </div>
        </div>

        <div className="flex gap-3 items-center mt-3">
          <div className="aspect-square rounded-full w-11">
            <Image
              src="https://www.themoviedb.org/t/p/w150_and_h150_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
              alt="Profile picture"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>

          <div>
            <h3 className="font-bold">000</h3>
            <a href="/">nickname</a>
          </div>
        </div>

        <div className="flex gap-3 items-center mt-3 pb-5">
          <div className="aspect-square rounded-full w-11">
            <Image
              src="https://www.themoviedb.org/t/p/w150_and_h150_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg"
              alt="Profile picture"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>

          <div>
            <h3 className="font-bold">000</h3>
            <a href="/">nickname</a>
          </div>
        </div>

        <a href="/">View Edit History</a>

        <h3 className="font-bold mt-5 mb-4">Popularity Trend</h3>
        <a className="py-2 px-4 rounded-full bg-slate-800 text-slate-100 font-bold" href="">LOGIN TO EDIT</a>
      </div>
    </aside>
  )
}