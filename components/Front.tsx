import { useBoxDimensions } from '@/store/useBoxDimensions'
import React from 'react'
import ThumbTab from './ThumbTab'
import { useLCGStore } from '@/store/useLCGStore'

export default function Front() {
  const { boxHeight, boxWidth } = useBoxDimensions()
  const { faction, selectedIdentity, getImageUrl } = useLCGStore()

  return (
    <div
      style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm` }}
      className={`relative flex flex-col items-center border border-s-0 border-black ${faction} `}
    >
      {selectedIdentity !== '' && <img className="w-full h-full" src={getImageUrl()} alt="Box front" width={boxWidth} height={boxHeight} />}
      <ThumbTab />
    </div>
  )
}
