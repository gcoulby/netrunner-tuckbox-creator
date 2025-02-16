import { useBoxDimensions } from '@/store/useBoxDimensions'
import Image from 'next/image'
import React from 'react'

export default function BoxSidePanel() {
  const { boxDepth, boxHeight, faction, deckName } = useBoxDimensions()
  return (
    <div
      style={{ width: `${boxDepth}mm`, height: `${boxHeight}mm` }}
      className={`relative flex flex-col items-center border border-s-0 border-black ${faction}`}
    >
      <div className="flex flex-col items-center bg-white mt-[12%] rounded w-3/4 h-[90%]">
        {faction !== 'NEUTRAL' ? (
          <Image src={`nsg-assets/NISEI_${faction}.svg`} alt="Box side panel" width={boxDepth} height={boxHeight} />
        ) : (
          <div className="w-12 h-12"></div>
        )}
        <div className="grow">
          <span className="absolute inset-0 flex justify-center items-center font-bold text-lg rotate-90">{deckName}</span>
        </div>
        {faction !== 'NEUTRAL' ? (
          <Image src={`nsg-assets/NISEI_${faction}.svg`} alt="Box side panel" width={boxDepth} height={boxHeight} />
        ) : (
          <div className="w-12 h-12"></div>
        )}
      </div>
    </div>
  )
}
