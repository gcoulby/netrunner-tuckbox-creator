import localFont from 'next/font/local'

export const NetrunnerFont = localFont({
  src: [
    {
      path: './Netrunner.woff2',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--font-netrunner', // Optional: for using in CSS variables
  display: 'swap',
})
