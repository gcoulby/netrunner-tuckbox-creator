import { useBoxDimensions } from '@/store/useBoxDimensions'
import React from 'react'
import BoxSidePanel from './BoxSidePanel'

export default function RightSide() {
  const { boxDepth, flapHeight, faction } = useBoxDimensions()
  return (
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-s-0 border-b-0  rounded-tr-[15mm] ${faction}`}
      ></div>
      <BoxSidePanel />
      <div
        style={{ width: `${boxDepth}mm`, height: `${flapHeight}mm` }}
        className={`relative flex flex-col items-center border border-s-0 border-t-0  rounded-br-[15mm] ${faction}`}
      ></div>
    </div>
  )
}
