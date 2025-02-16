import './globals.css'

export const metadata = {
  title: 'Netrunner Tuckbox Creator',
  description: 'A tool for creating Tuckboxes for Netrunner cards',
  metadataBase: 'http://gcoulby.github.io/netrunner-tuckbox-creator',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'http://gcoulby.github.io/netrunner-tuckbox-creator',
    title: 'Netrunner Tuckbox Creator',
    description: 'A tuckbox generation tool specifically designed for Android Netrunner.',
    image: 'http://gcoulby.github.io/netrunner-tuckbox-creator/images/apple-touch-icon.png',
    site_name: 'Netrunner Tuckbox Creator',
    imageWidth: 785,
    imageHeight: 411,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },

  manifest: '/netrunner-tuckbox-creator/images/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
