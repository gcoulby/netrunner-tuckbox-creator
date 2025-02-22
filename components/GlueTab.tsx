import { useBoxDimensions } from '@/store/useBoxDimensions'
import { useLCGStore } from '@/store/useLCGStore'
import React, { useEffect, useState } from 'react'

export default function GlueTab() {
  const { boxDepth, boxHeight, flapHeight, printOffset } = useBoxDimensions()
  const { lcg, faction, getTextureClasses } = useLCGStore()

  const [textureClasses, setTextureClasses] = useState('')

  useEffect(() => {
    setTextureClasses(getTextureClasses())
  }, [lcg, faction, getTextureClasses])

  return (
    <div className="flex flex-col">
      <div className="flex" style={{ height: `${flapHeight + boxDepth - printOffset}mm` }}></div>
      <div
        style={{ width: `${boxDepth}mm`, height: `${boxHeight}mm`, transform: 'perspective(200px) rotateY(-30deg)', transformOrigin: 'right' }}
        className={`flex flex-col border border-black ${textureClasses}`}
      ></div>
      <div className="flex" style={{ height: `${flapHeight + boxDepth - printOffset}mm` }}></div>
    </div>
  )
}
