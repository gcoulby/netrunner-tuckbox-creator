import { IdentityCard } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

/*
const [identities, setidentities] = useState<NetrunnerCard[]>([])
  const [selectedIdentity, setSelectedIdentity] = useState('')
*/

interface BoxState {
  boxWidth: number
  boxHeight: number
  boxDepth: number
  flapHeight: number
  tuckFlapHeight: number
  scale: number
  printOffset: number
  deckName: string
  identities: IdentityCard[]
  selectedIdentity: string
  identityImageUrl: string
  identitiesLastUpdated: Date
  deckNameFontSize: number

  setBoxWidth: (width: number) => void
  setBoxHeight: (height: number) => void
  setBoxDepth: (depth: number) => void
  setFlapHeight: (height: number) => void
  setTuckFlapHeight: (height: number) => void
  setScale: (scale: number) => void
  setPrintOffset: (offset: number) => void
  setDeckName: (name: string) => void
  setIdentities: (identities: IdentityCard[]) => void
  setSelectedIdentity: (identity: string) => void
  setIdentityImageUrl: (url: string) => void
  setIdentitiesLastUpdated: (date: Date) => void
  setDeckNameFontSize: (size: number) => void
}

export const useBoxDimensions = create<BoxState>()(
  persist(
    (set) => ({
      boxWidth: 66,
      boxHeight: 91,
      boxDepth: 37,
      flapHeight: 20,
      tuckFlapHeight: 16,
      scale: 1,
      printOffset: 4,
      deckName: '',
      identities: [],
      selectedIdentity: '',
      identityImageUrl: '',
      identitiesLastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      deckNameFontSize: 17,

      setBoxWidth: (width) => set({ boxWidth: width }),
      setBoxHeight: (height) => set({ boxHeight: height }),
      setBoxDepth: (depth) => set({ boxDepth: depth }),
      setFlapHeight: (height) => set({ flapHeight: height }),
      setTuckFlapHeight: (height) => set({ tuckFlapHeight: height }),
      setScale: (scale) => set({ scale }),
      setPrintOffset: (offset) => set({ printOffset: offset }),
      setDeckName: (name) => set({ deckName: name }),
      setIdentities: (identities) => set({ identities }),
      setSelectedIdentity: (identity) => set({ selectedIdentity: identity }),
      setIdentityImageUrl: (url) => set({ identityImageUrl: url }),
      setIdentitiesLastUpdated: (date) => set({ identitiesLastUpdated: date }),
      setDeckNameFontSize: (size) => set({ deckNameFontSize: size }),
    }),
    {
      name: 'box-dimensions-store', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
)
