"use client"

import React from 'react'
import Container from '../Container'
import {TbBeach, TbMountain, TbPool} from 'react-icons/tb'
import {GiBarn, GiBoatFishing, GiCactus, GiCampfire, GiCastle, GiCaveEntrance, GiIsland, GiWindmill} from 'react-icons/gi';
import {BsSnow} from 'react-icons/bs';
import {IoDiamond} from 'react-icons/io5'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { FaSkiing } from 'react-icons/fa';

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description:"This property is close to the Baech"
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description:"This property has Windmills"
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description:"This property is Modern"
    },
    {
        label: 'Country',
        icon: TbMountain,
        description:"This property is in the Country Side"
    },
    {
        label: 'Pools',
        icon: TbPool,
        description:"This property has a pool"
    },
    {
        label: 'Island',
        icon: GiIsland,
        description:"This property is on an Island"
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description:"This property is close to a Lake"
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description:"This property has Skiing activities"
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description:"This property is in a Castel"
    },
    {
        label: 'Camping',
        icon: GiCampfire,
        description:"This property has camping activities"
    },
    {
        label: 'Artic',
        icon: BsSnow,
        description:"This property is in Artic"
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description:"This property is in a Cave"
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description:"This property is in a Desert"
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description:"This property is the Barn!"
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description:"This property is Luxurious"
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathName = usePathname();
    const isMainPage = pathName === '/';

    if(!isMainPage){
        return null;
    }
  return (
   <Container>
    <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
    {
        categories.map((items)=>(
            <CategoryBox
            key={items.label}
            label={items.label}
            selected={category === items.label}
            icon={items.icon}
            />
        ))
    }
    </div>
   </Container>
  )
}

export default Categories
