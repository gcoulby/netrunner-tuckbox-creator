'use client'
import BoxNet from '@/components/BoxNet'
import SideBar from '@/components/SideBar'

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen">
      <SideBar />
      <BoxNet />
    </div>
  )
}
