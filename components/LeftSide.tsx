import { useBoxDimensions } from '@/store/useBoxDimensions'
import React from 'react'
import BoxSidePanel from './BoxSidePanel'

export default function LeftSide() {
  const { boxHeight, boxWidth, boxDepth, flapHeight, faction } = useBoxDimensions()
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-e-0 border-b-0  rounded-tl-[15mm] ${faction}`}
      ></div>
      <BoxSidePanel />
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-e-0 border-t-0  rounded-bl-[15mm]  ${faction}`}
      ></div>
    </div>
  )
}
