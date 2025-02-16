/*

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
*/
export const GetFactionGradient = (faction: string) => {
  switch (faction) {
    case 'NEUTRAL':
      return 'from-neutral to-neutral-dark'
    case 'ADAM':
      return 'from-adam to-adam-dark'
    case 'ANARCH':
      return ''
    case 'APEX':
      return 'from-apex to-apex-dark'
    case 'CRIMINAL':
      return 'from-criminal to-criminal-dark'
    case 'HB':
      return 'radial-gradient(circle, rgba(111,87,172,1) 0%, rgba(50,40,79,1) 100%)'
    case 'JINTEKI':
      return 'from-jinteki to-jinteki-dark'
    case 'NBN':
      return 'from-nbn to-nbn-dark'
    case 'SHAPER':
      return 'from-shaper to-shaper-dark'
    case 'SUNNY':
      return 'from-sunny to-sunny-dark'
    case 'WEYLAND':
      return 'from-weyland to-weyland-dark'
    default:
      return 'from-neutral to-neutral-dark'
  }
}
