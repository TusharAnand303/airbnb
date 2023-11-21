"use client"


import React, { useState, useCallback, useEffect, useRef } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItems from './MenuItems';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/userLoginModel';
import {signOut} from 'next-auth/react';
import { SafeUser } from '@/app/types';

interface userMenuProps{
  currentUser?: SafeUser | null
}

const UserMenu: React.FC<userMenuProps> = ({
  currentUser
}) => {

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [closeMenu]);

  return (
    <div className='relative' ref={menuRef}>
      <div className='flex flex-row items-center gap-3'>
        <div
          className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-gray-100/70 transition cursor-pointer'
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        <div
          onClick={toggleOpen}
          className='p-4 md:py-1 md:px-2 border-[1px] border-gray-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden top-14 right-0 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            { currentUser ? (
              <>
              <MenuItems onClick={()=>{}} label='My trips' />
              <MenuItems onClick={()=>{}} label=' Favrouites' />
              <MenuItems onClick={()=>{}} label='Reservations' />
              <MenuItems onClick={()=>{}} label=' properties' />
              <MenuItems onClick={()=>{}} label='Airbnb My Home' />
              <hr />
              <MenuItems onClick={()=>signOut()} label='Logout' />
            </>
            ) : (
              <>
              <MenuItems onClick={loginModal.onOpen} label='Login' />
              <MenuItems onClick={registerModal.onOpen} label='SignUp' />
            </>
            )}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
