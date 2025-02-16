import { useBoxDimensions } from '@/store/useBoxDimensions'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ThumbTab from './ThumbTab'

export default function Front() {
  const { boxHeight, boxWidth, faction, selectedIdentity } = useBoxDimensions()

  return (
    <div
      style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm` }}
      className={`relative flex flex-col items-center border border-s-0 border-black ${faction}`}
    >
      <img
        className="w-full h-full"
        src={`https://card-images.netrunnerdb.com/v2/large/${selectedIdentity}.jpg`}
        alt="Box front"
        width={boxWidth}
        height={boxHeight}
      />
      <ThumbTab />
    </div>
  )
}
