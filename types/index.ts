export enum LCG {
  NETRUNNER = 'Android: Netrunner',
  ARKHAM = 'Arkham Horror: The Card Game',
}

export enum Faction {
  NEUTRAL = 'NEUTRAL',
  ADAM = 'ADAM',
  ANARCH = 'ANARCH',
  APEX = 'APEX',
  CRIMINAL = 'CRIMINAL',
  HAAS_BIOROID = 'HB',
  JINTAKI = 'JINTEKI',
  NBN = 'NBN',
  SHAPER = 'SHAPER',
  SUNNY = 'SUNNY',
  WEYLAND = 'WEYLAND',
}

// export type NetrunnerCard = {
//   code: string
//   type_code: string
//   title: string
//   faction: Faction
//   type: string
//   subtype: string
//   influence: number
//   cost: number
//   strength: number
//   text: string
//   flavor: string
//   illustrator: string
//   set: string
//   number: number
//   rarity: string
//   image: string
// }

export type IdentityCard = {
  code: string
  title: string
  type_code: string
  image: string
}
