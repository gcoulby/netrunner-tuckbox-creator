import { useBoxDimensions } from '@/store/useBoxDimensions'
import React from 'react'

export default function Back() {
  const { boxDepth, boxHeight, boxWidth, tuckFlapHeight, faction, selectedIdentity, deckName, flapHeight, printOffset } = useBoxDimensions()

  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${boxWidth}mm`, height: `${tuckFlapHeight}mm` }}
        className={`relative flex flex-col items-center border border-b-0 border-black rounded-t-full overflow-hidden ${faction}`}
      >
        {selectedIdentity !== '' && (
          <img
            // className="w-full h-full"
            style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm`, rotate: '180deg', marginTop: `-${boxHeight - flapHeight + printOffset}mm` }}
            src={`https://card-images.netrunnerdb.com/v2/large/${selectedIdentity}.jpg`}
            alt="Box front"
            width={boxWidth}
            height={boxHeight}
          />
        )}
      </div>
      <div style={{ width: `${boxWidth}mm`, height: `${boxDepth}mm` }} className={`relative items-center border border-b-0 border-black  ${faction}`}>
        <div className="absolute inset-6 flex justify-items-center items-center bg-white rounded-md font-bold text-black text-center grow">
          <span className="w-full text-center">{deckName}</span>
        </div>
      </div>

      <div
        style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm` }}
        className={`relative flex flex-col items-center border border-s-0 border-black ${faction}`}
      >
        {selectedIdentity !== '' && (
          <img
            className="w-full h-full"
            src={`https://card-images.netrunnerdb.com/v2/large/${selectedIdentity}.jpg`}
            alt="Box front"
            width={boxWidth}
            height={boxHeight}
          />
        )}
      </div>
      <div
        style={{ width: `${boxWidth}mm`, height: `${boxDepth}mm` }}
        className={`relative flex flex-col items-center border border-t-0 border-black ${faction}`}
      ></div>

      <div
        style={{ width: `${boxWidth}mm`, height: `${tuckFlapHeight}mm` }}
        className={`relative flex flex-col items-center border border-t-0 border-black rounded-b-full ${faction}`}
      ></div>
    </div>
  )
}
