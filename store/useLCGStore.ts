import { NetrunnerFaction, IdentityCard, LCG } from '@/types'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ILCGStore {
  lcg: LCG
  setLcg: (Lcg: LCG) => void
  faction: string
  netrunnerIdentities: IdentityCard[]
  arkhamIdentities: IdentityCard[]
  selectedIdentity: string
  identityImageUrl: string
  netrunnerIdentitiesLastUpdated: Date
  arkhamIdentitiesLastUpdated: Date

  getImageUrl: () => string
  setFaction: (faction: string) => void
  setNetrunnerIdentities: (netrunnerIdentities: IdentityCard[]) => void
  setArkhamIdentities: (arkhamIdentities: IdentityCard[]) => void
  setSelectedIdentity: (identity: string) => void
  setIdentityImageUrl: (url: string) => void
  setNetrunnerIdentitiesLastUpdated: (date: Date) => void
  setArkhamIdentitiesLastUpdated: (date: Date) => void
}

export const useLCGStore = create<ILCGStore>()(
  persist(
    (set, get) => ({
      lcg: LCG.NETRUNNER,
      setLcg: (lcg) => set({ lcg }),
      faction: 'NEUTRAL',
      netrunnerIdentities: [],
      arkhamIdentities: [],
      selectedIdentity: '',
      identityImageUrl: '',
      netrunnerIdentitiesLastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      arkhamIdentitiesLastUpdated: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),

      getImageUrl: () => {
        switch (get().lcg) {
          case LCG.NETRUNNER:
            return `https://card-images.netrunnerdb.com/v2/large/${get().selectedIdentity}.jpg`
          case LCG.ARKHAM:
            const arid = get().arkhamIdentities.find((id) => id.code === get().selectedIdentity) as IdentityCard
            return `https://arkhamdb.com/${arid?.image}`
          default:
            return ''
        }
      },
      setFaction: (faction) => set({ faction }),
      setNetrunnerIdentities: (netrunnerIdentities) => set({ netrunnerIdentities }),
      setArkhamIdentities: (arkhamIdentities) => set({ arkhamIdentities }),
      setSelectedIdentity: (identity) => set({ selectedIdentity: identity }),
      setIdentityImageUrl: (url) => set({ identityImageUrl: url }),
      setNetrunnerIdentitiesLastUpdated: (date) => set({ netrunnerIdentitiesLastUpdated: date }),
      setArkhamIdentitiesLastUpdated: (date) => set({ arkhamIdentitiesLastUpdated: date }),
    }),
    {
      name: 'lcg-tuckbox-game-store', // Key in localStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
)
