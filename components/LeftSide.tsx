import { useBoxDimensions } from '@/store/useBoxDimensions'
import React, { useEffect, useState } from 'react'
import BoxSidePanel from './BoxSidePanel'
import { useLCGStore } from '@/store/useLCGStore'

export default function LeftSide() {
  const { boxDepth, flapHeight } = useBoxDimensions()
  const { lcg, faction, getTextureClasses } = useLCGStore()

  const [textureClasses, setTextureClasses] = useState('')

  useEffect(() => {
    setTextureClasses(getTextureClasses())
  }, [lcg, faction, getTextureClasses])
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-e-0 border-b-0  rounded-tl-[15mm] ${textureClasses}`}
      ></div>
      <BoxSidePanel />
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-e-0 border-t-0  rounded-bl-[15mm] ${textureClasses}`}
      ></div>
    </div>
  )
}
