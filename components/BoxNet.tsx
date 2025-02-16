import React from 'react'
import GlueTab from './GlueTab'
import { useBoxDimensions } from '@/store/useBoxDimensions'
import Front from './Front'
import LeftSide from './LeftSide'
import Back from './Back'
import RightSide from './RightSide'

export default function BoxNet() {
  const { scale } = useBoxDimensions()
  return (
    <main className="flex flex-col">
      <div className="p-4 print:p-0">
        <div className="flex flex-row items-center w-full h-full box-net" style={{ transform: `scale(${scale})` }}>
          <GlueTab />
          <Front />
          <LeftSide />
          <Back />
          <RightSide />
        </div>
      </div>
    </main>
  )
}
