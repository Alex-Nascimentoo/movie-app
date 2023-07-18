'use client'

import { useState, useEffect } from "react"

type ProgressCircleProps = {
  percentage: number,
  absolute?: boolean
}

export default function ProgressCircle({ percentage, absolute }: ProgressCircleProps) {
  const [position, setPosition] = useState('absolute -top-1/4')
  const [statusColor, setStatusColor] = useState('')

  const style = {
    background: `conic-gradient(${statusColor}, ${percentage * 3.6}deg, rgb(51, 65, 85) 0deg)`
  }

  useEffect(() => {
    if(absolute !== true) {
      setPosition('')
    }

    if(percentage <= 39) {
      setStatusColor('#dc2626')
    } else if(percentage <= 49) {
      setStatusColor('#facc15')
    } else {
      setStatusColor('#22c55e')
    }
  }, [absolute, percentage])

  return (
    <div
      id="progress"
      className={`${position} w-fit aspect-square rounded-full bg-slate-700 p-1 flex`}
      style={style}
    >
      <div className="rounded-full p-2 flex items-center justify-center bg-slate-900">
        <p className="text-slate-100 m-0 font-bold text-sm">{Math.round(percentage)}%</p>
      </div>
    </div>
  )
}