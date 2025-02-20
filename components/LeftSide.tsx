import { useBoxDimensions } from '@/store/useBoxDimensions'
import React from 'react'
import BoxSidePanel from './BoxSidePanel'
import { useLCGStore } from '@/store/useLCGStore'

export default function LeftSide() {
  const { boxDepth, flapHeight } = useBoxDimensions()
  const { faction } = useLCGStore()
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
