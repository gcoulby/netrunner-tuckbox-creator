// import { getFontClasses } from '@/fonts'
import { ArkhamFont } from '@/fonts/arkham'
import { NetrunnerFont } from '@/fonts/netrunner'
import { useBoxDimensions } from '@/store/useBoxDimensions'
import { useLCGStore } from '@/store/useLCGStore'
import { LCG } from '@/types'
import React, { useEffect, useState } from 'react'

export default function Back() {
  const { boxDepth, boxHeight, boxWidth, tuckFlapHeight, deckName, flapHeight, printOffset, deckNameFontSize } = useBoxDimensions()
  const { lcg, faction, selectedIdentity, getImageUrl, getTextureClasses } = useLCGStore()
  useBoxDimensions()

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
    <div className="flex flex-col items-center">
      <div
        style={{ width: `${boxWidth}mm`, height: `${tuckFlapHeight}mm` }}
        className={`relative flex flex-col items-center border border-b-0 border-black rounded-t-full overflow-hidden ${textureClasses}`}
      >
        {selectedIdentity !== '' && (
          <img
            className="max-w-[200%]"
            style={{
              width: `${boxWidth * (lcg === LCG.ARKHAM ? 2 : 1)}mm`,
              height: `${boxHeight}mm`,
              rotate: '180deg',
              marginTop: `-${boxHeight - flapHeight + printOffset}mm`,
              marginLeft: `-${lcg === LCG.ARKHAM ? boxWidth : 0}mm`,
            }}
            src={getImageUrl()}
            alt="Box front"
            width={boxWidth}
            height={boxHeight}
          />
        )}
      </div>
      <div
        style={{ width: `${boxWidth}mm`, height: `${boxDepth}mm` }}
        className={`relative items-center border border-b-0 border-black ${textureClasses}`}
      >
        <div className="absolute inset-6 flex justify-items-center items-center bg-white rounded-md text-black text-center grow">
          <span className={`w-full text-center ${fontClasses}`} style={{ fontSize: deckNameFontSize, whiteSpace: 'pre-line' }}>
            {deckName}
          </span>
        </div>
      </div>

      <div
        style={{ width: `${boxWidth}mm`, height: `${boxHeight}mm` }}
        className={`relative flex flex-col items-center border border-s-0 border-black ${textureClasses} overflow-hidden`}
      >
        {selectedIdentity !== '' && (
          <img
            className="top-0 left-0 absolute max-w-[200%] h-full"
            src={getImageUrl()}
            alt="Box front"
            width={boxWidth}
            height={boxHeight}
            style={{
              width: `${boxWidth * (lcg === LCG.ARKHAM ? 2 : 1)}mm`,
              height: `${boxHeight}mm`,
            }}
          />
        )}
      </div>
      <div
        style={{ width: `${boxWidth}mm`, height: `${boxDepth}mm` }}
        className={`relative flex flex-col items-center border border-t-0 border-black ${textureClasses}`}
      ></div>

      <div
        style={{ width: `${boxWidth}mm`, height: `${tuckFlapHeight}mm` }}
        className={`relative flex flex-col items-center border border-t-0 border-black rounded-b-full ${textureClasses}`}
      ></div>
    </div>
  )
}
