"use client"

import React from 'react';
import { Range } from 'react-date-range';
import Calendar from '../inputs/Calendar';
import Button from '../Button';

interface ListingReservationProps {
    price: number;
    dateRange: Range;
    totalPrice: number;
    onChangeDate: (value: Range) => void;
    onSubmit: () => void;
    disabled?: boolean;
    disabledDates: Date[]
}

const ListingReservation:React.FC<ListingReservationProps> = ({
    price,
    dateRange,
    totalPrice,
    onChangeDate,
    onSubmit,
    disabledDates,
    disabled
}) => {
  return (
    <div className='ml-4 mb-5 bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden '>
        <div className='flex fex-row items-center gap-1 p-4'>
            <div className='text-2xl font-semibold'>
                ₹ {price} /-
            </div>
            <div className='font-bold text-gray-600'>
               night
            </div>
        </div>
        <hr />
        <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
        />
        <hr />
        <div className='p-4'>
        <Button disabled={disabled} label='Reserve' onClick={onSubmit}/>
        </div>
        <div className='p-4 flex flex-row items-center justify-between font-semibold text-lg'>
            <div>
                Total
            </div>
            <div>
                ₹ {totalPrice}
            </div>
        </div>
    </div>
  )
}

export default ListingReservation
