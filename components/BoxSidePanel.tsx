import { useBoxDimensions } from '@/store/useBoxDimensions'
import Image from 'next/image'
import React from 'react'

export default function BoxSidePanel() {
  const { boxDepth, boxHeight, faction, deckName, deckNameFontSize } = useBoxDimensions()
  return (
    <div style={{ width: `${boxDepth}mm`, height: `${boxHeight}mm` }} className={`relative items-center border border-s-0 border-black ${faction}`}>
      <div className="relative items-center bg-white ms-[12%] mt-[12%] rounded w-3/4 h-[90%]">
        {faction !== 'NEUTRAL' ? (
          <Image src={`nsg-assets/NISEI_${faction}.svg`} alt="Box side panel" width={36} height={36} className="left-[calc(50%-1.125rem)] absolute" />
        ) : (
          <div className="w-9 h-9"></div>
        )}
        {/* <div className="grow"> */}
        <span
          className="top-4 left-1/2 absolute px-2 font-bold text-lg text-center rotate-90 origin-left"
          style={{ fontSize: deckNameFontSize, width: `${boxHeight - 26}mm` }}
        >
          {deckName}
        </span>
        {/* </div> */}
        {faction !== 'NEUTRAL' ? (
          <Image
            src={`nsg-assets/NISEI_${faction}.svg`}
            alt="Box side panel"
            width={36}
            height={36}
            className="bottom-0 left-[calc(50%-1.125rem)] absolute"
          />
        ) : (
          <div className="w-9 h-9"></div>
        )}
      </div>
    </div>
  )
}
