import localFont from 'next/font/local'

export const ArkhamFont = localFont({
  src: [
    {
      path: './Arkham.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-arkham', // Optional: for using in CSS variables
  display: 'swap',
})
