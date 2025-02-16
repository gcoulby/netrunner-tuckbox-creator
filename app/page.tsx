'use client'
import BoxNet from '@/components/BoxNet'
import SideBar from '@/components/SideBar'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    document.documentElement.style.setProperty('--asset-path', process.env.NODE_ENV === 'production' ? '/netrunner-tuckbox-creator' : '')
  }, [])
  return (
    <div className="flex flex-row min-h-screen">
      <SideBar />
      <BoxNet />
    </div>
  )
}
