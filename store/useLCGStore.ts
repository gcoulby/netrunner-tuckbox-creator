import { Faction, IdentityCard, LCG } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ILCGStore {
  lcg: LCG
  setLcg: (Lcg: LCG) => void
  faction: Faction
  identities: IdentityCard[]
  selectedIdentity: string
  identityImageUrl: string
  identitiesLastUpdated: Date

  getImageUrl: () => string
  setFaction: (faction: Faction) => void
  setIdentities: (identities: IdentityCard[]) => void
  setSelectedIdentity: (identity: string) => void
  setIdentityImageUrl: (url: string) => void
  setIdentitiesLastUpdated: (date: Date) => void
}

export const useLCGStore = create<ILCGStore>()(
  persist(
    (set, get) => ({
      lcg: LCG.NETRUNNER,
      setLcg: (lcg) => set({ lcg }),
      faction: Faction.NEUTRAL,
      identities: [],
      selectedIdentity: '',
      identityImageUrl: '',
      identitiesLastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),

      getImageUrl: () => {
        switch (get().lcg) {
          case LCG.NETRUNNER:
            return `https://card-images.netrunnerdb.com/v2/large/${get().selectedIdentity}.jpg`
          case LCG.ARKHAM:
            return `https://arkhamdb.com/bundles/cards/${get().selectedIdentity}.png`
          default:
            return ''
        }
      },
      setFaction: (faction) => set({ faction }),
      setIdentities: (identities) => set({ identities }),
      setSelectedIdentity: (identity) => set({ selectedIdentity: identity }),
      setIdentityImageUrl: (url) => set({ identityImageUrl: url }),
      setIdentitiesLastUpdated: (date) => set({ identitiesLastUpdated: date }),
    }),
    {
      name: 'lcg-tuckbox-game-store', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
)
