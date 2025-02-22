import { useBoxDimensions } from '@/store/useBoxDimensions'
import React, { useEffect, useState } from 'react'
import ThumbTab from './ThumbTab'
import { useLCGStore } from '@/store/useLCGStore'
import { LCG } from '@/types'

export default function Front() {
  const { boxHeight, boxWidth } = useBoxDimensions()
  const { lcg, faction, selectedIdentity, getImageUrl, getTextureClasses } = useLCGStore()

  const [textureClasses, setTextureClasses] = useState('')

  useEffect(() => {
    setTextureClasses(getTextureClasses())
  }, [lcg, faction, getTextureClasses])

  return (
    <div
      style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm` }}
      className={`relative items-center border border-s-0 border-black ${textureClasses} `}
    >
      {selectedIdentity !== '' && (
        <img
          className="absolute max-w-[200%] h-full"
          src={getImageUrl()}
          alt="Box front"
          style={{ width: `${boxWidth * (lcg === LCG.ARKHAM ? 2 : 1)}mm`, height: `${boxHeight}mm` }}
        />
      )}
      <ThumbTab />
    </div>
  )
}
