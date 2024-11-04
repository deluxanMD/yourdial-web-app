import React from 'react'
import { SidebarTrigger } from './ui/sidebar'

const Topbar = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b py-2 pr-2">
      <SidebarTrigger />
    </div>
  )
}

export default Topbar
