import { useBoxDimensions } from '@/store/useBoxDimensions'
import { useLCGStore } from '@/store/useLCGStore'
import React from 'react'

export default function GlueTab() {
  const { boxDepth, boxHeight, flapHeight, printOffset } = useBoxDimensions()
  const { faction } = useLCGStore()
  return (
    <div className="flex flex-col">
      <div className="flex" style={{ height: `${flapHeight + boxDepth - printOffset}mm` }}></div>
      <div
        style={{ width: `${boxDepth}mm`, height: `${boxHeight}mm`, transform: 'perspective(200px) rotateY(-30deg)', transformOrigin: 'right' }}
        className={`flex flex-col border border-black ${faction}`}
      ></div>
      <div className="flex" style={{ height: `${flapHeight + boxDepth - printOffset}mm` }}></div>
    </div>
  )
}
