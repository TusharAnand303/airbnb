"use client"
interface MenuItemsProps {
    onClick:()=> void,
    label:string,
}
import React from 'react'

const MenuItems: React.FC<MenuItemsProps> =  ({
    onClick,
    label,
}) => {
  return (
    <div onClick={onClick} className='px-4 py-3 hover:bg-gray-100 transition font-semibold'>
      {label}
    </div>
  )
}

export default MenuItems
