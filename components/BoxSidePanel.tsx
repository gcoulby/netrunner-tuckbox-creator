import { ArkhamFont } from '@/fonts/arkham'
import { NetrunnerFont } from '@/fonts/netrunner'
import { useBoxDimensions } from '@/store/useBoxDimensions'
import { useLCGStore } from '@/store/useLCGStore'
import { LCG } from '@/types'
import React, { useEffect, useState } from 'react'

export default function BoxSidePanel() {
  const { lcg, faction, getTextureClasses } = useLCGStore()
  const { boxDepth, boxHeight, deckName, deckNameFontSize } = useBoxDimensions()

  const [textureClasses, setTextureClasses] = useState('')
  const [fontClasses, setFontClasses] = useState('')

  const getFontClasses = (lcg: LCG) => {
    switch (lcg) {
      case LCG.NETRUNNER:
        return NetrunnerFont.variable + ' font-netrunner small-caps'
      case LCG.ARKHAM:
        return ArkhamFont.variable + ' font-arkham'
      default:
        return ''
    }
  }

  useEffect(() => {
    setTextureClasses(getTextureClasses())
    setFontClasses(getFontClasses(lcg))
  }, [lcg, faction, getTextureClasses])

  return (
    <div
      style={{ width: `${boxDepth}mm`, height: `${boxHeight}mm` }}
      className={`relative items-center border border-s-0 border-black ${textureClasses}`}
    >
      <div className="items-center bg-white ms-[12%] mt-[12%] rounded w-3/4 h-[90%]">
        {faction !== 'NEUTRAL' ? (
          <img
            src={`${lcg === LCG.NETRUNNER ? 'nsg-assets/NISEI_' : 'ark-assets/'}${faction}.svg`}
            alt="Box side panel"
            width={36}
            height={36}
            className="left-[calc(50%-1.125rem)] absolute"
          />
        ) : (
          <div className="w-9 h-9"></div>
        )}
        {/* <div className="grow"> */}
        <span
          className={`${fontClasses} left-1/2 absolute inset-0 flex justify-center items-center px-12 py-4 text-lg text-center rotate-90 origin-left`}
          style={{ fontSize: deckNameFontSize, width: `${boxHeight}mm`, height: `${boxDepth}mm`, top: `-${boxDepth / 2}mm`, whiteSpace: 'pre-line' }}
        >
          {deckName}
        </span>
        {/* </div> */}
        {faction !== 'NEUTRAL' ? (
          <img
            src={`${lcg === LCG.NETRUNNER ? 'nsg-assets/NISEI_' : 'ark-assets/'}${faction}.svg`}
            alt="Box side panel"
            width={36}
            height={36}
            className="bottom-4 left-[calc(50%-1.125rem)] absolute"
          />
        ) : (
          <div className="w-9 h-9"></div>
        )}
      </div>
    </div>
  )
}
