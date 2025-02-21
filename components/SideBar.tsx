import { useBoxDimensions } from '@/store/useBoxDimensions'
import { useLCGStore } from '@/store/useLCGStore'
import { Faction, IdentityCard, LCG } from '@/types'
import React, { useEffect } from 'react'

export default function SideBar() {
  const {
    scale,
    boxDepth,
    boxHeight,
    boxWidth,
    tuckFlapHeight,
    flapHeight,
    printOffset,
    deckName,
    deckNameFontSize,

    setBoxDepth,
    setBoxHeight,
    setBoxWidth,
    setFlapHeight,
    setScale,
    setTuckFlapHeight,
    setPrintOffset,
    setDeckName,
    setDeckNameFontSize,
  } = useBoxDimensions()

  const {
    faction,
    netrunnerIdentities,
    arkhamIdentities,
    selectedIdentity,
    netrunnerIdentitiesLastUpdated,
    arkhamIdentitiesLastUpdated,
    setFaction,
    setNetrunnerIdentities,
    setArkhamIdentities,
    setSelectedIdentity,
    setNetrunnerIdentitiesLastUpdated,
    setArkhamIdentitiesLastUpdated,
  } = useLCGStore()

  const { lcg, setLcg } = useLCGStore()

  useEffect(() => {
    if (lcg === LCG.NETRUNNER) {
      if (new Date(netrunnerIdentitiesLastUpdated as unknown as string)?.getTime() > Date.now() - 24 * 60 * 60 * 1000) return
      // if identities were updated in the last 24hrs, don't fetch them again
      fetch('https://netrunnerdb.com/api/2.0/public/cards')
        .then((res) => res.json())
        .then((data) => {
          const normalizedData = data.data.map((card: any) => ({
            ...card,
            image: `${card.code}.jpg`,
          }))
          const ids = normalizedData.filter((card: IdentityCard) => card.type_code === 'identity')
          setNetrunnerIdentities(ids.map((id: IdentityCard) => id))
          setNetrunnerIdentitiesLastUpdated(new Date())
        })
    } else if (lcg === LCG.ARKHAM) {
      if (new Date(arkhamIdentitiesLastUpdated as unknown as string)?.getTime() > Date.now() - 24 * 60 * 60 * 1000) return
      fetch('https://arkhamdb.com/api/public/cards/')
        .then((res) => res.json())
        .then((data) => {
          const normalizedData = data.map((card: any) => ({
            ...card,
            title: card.title || card.name, // Use `title` if available, otherwise `name`
            image: card.imagesrc ?? `bundles/cards/${card.code}.jpg`,
          }))
          const ids = normalizedData.filter((card: IdentityCard) => card.type_code === 'investigator')
          setArkhamIdentities(ids.map((id: IdentityCard) => id))
          setArkhamIdentitiesLastUpdated(new Date())
        })
    }
  }, [
    lcg,
    netrunnerIdentitiesLastUpdated,
    arkhamIdentitiesLastUpdated,
    setNetrunnerIdentities,
    setArkhamIdentities,
    setNetrunnerIdentitiesLastUpdated,
    setArkhamIdentitiesLastUpdated,
  ])

  return (
    <aside className="print:hidden flex flex-col gap-2 bg-slate-800 px-4 w-[300px] h-svh text-xs">
      <h1 className="text-white text-lg">Game</h1>
      <div className="flex flex-row items-center gap-2">
        <div className="w-1/3 text-white">Game</div>
        <select className="p-2 w-2/3" value={lcg} onChange={(e) => setLcg(e.target.value as LCG)}>
          {Object.values(LCG).map((game) => (
            <option key={game}>{game}</option>
          ))}
        </select>
      </div>

      <h1 className="text-white text-lg">Deck Details</h1>
      <div className="flex flex-row items-center gap-2">
        <label className="w-1/3 text-white">Deck Name</label>
        <input className="p-2 w-2/3" type=" text" value={deckName} onChange={(e) => setDeckName(e.target.value)} />
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-1/3 text-white">Faction</div>
        <select className="p-2 w-2/3" value={faction} onChange={(e) => setFaction(e.target.value as Faction)}>
          {Object.values(Faction).map((faction) => (
            <option key={faction}>{faction}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-row items-center gap-2">
        <div className="w-1/3 text-white">Identity</div>
        {/* select with search */}
        <select className="p-2 w-2/3" value={selectedIdentity} onChange={(e) => setSelectedIdentity(e.target.value)}>
          <option value="">Select Identity</option>
          <>
            {lcg === LCG.NETRUNNER &&
              netrunnerIdentities
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((identity) => (
                  <option key={identity.code} value={identity.code}>
                    {identity.title}
                  </option>
                ))}
          </>
          <>
            {lcg === LCG.ARKHAM &&
              arkhamIdentities
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((identity) => (
                  <option key={identity.code} value={identity.code}>
                    {identity.title}
                  </option>
                ))}
          </>
        </select>
      </div>

      <h1 className="text-white text-lg">Box Dimension Overrides</h1>

      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Font Size</label>
          <input className="p-2 w-2/3" type=" number" value={deckNameFontSize} onChange={(e) => setDeckNameFontSize(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Width</label>
          <input className="p-2 w-2/3" type=" number" value={boxWidth} onChange={(e) => setBoxWidth(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Height</label>
          <input className="p-2 w-2/3" type=" number" value={boxHeight} onChange={(e) => setBoxHeight(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Depth</label>
          <input className="p-2 w-2/3" type=" number" value={boxDepth} onChange={(e) => setBoxDepth(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Flap Height</label>
          <input className="p-2 w-2/3" type=" number" value={flapHeight} onChange={(e) => setFlapHeight(parseInt(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Tuck Flap Height</label>
          <input className="p-2 w-2/3" type=" number" value={tuckFlapHeight} onChange={(e) => setTuckFlapHeight(parseInt(e.target.value))} />
        </div>

        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Scale</label>
          <input className="p-2 w-2/3" type=" number" step={0.1} value={scale} onChange={(e) => setScale(parseFloat(e.target.value))} />
        </div>
        <div className="flex flex-row items-center gap-2">
          <label className="w-1/3 text-white">Print Offset</label>
          <input className="p-2 w-2/3" type=" number" value={printOffset} onChange={(e) => setPrintOffset(parseInt(e.target.value))} />
        </div>
      </div>
    </aside>
  )
}
