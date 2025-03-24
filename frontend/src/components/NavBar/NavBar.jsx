import React, { useState } from 'react';
import { BiFootball } from 'react-icons/bi';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/fixtures', label: '일정' },
  { path: '/record', label: '순위표' },
  { path: '/board', label: '게시판' },
  { path: '/contact', label: '문의하기' },
];

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => setIsOpened(prev => !prev);

  return (
    <nav className='fixed top-0 left-0 w-full bg-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center lg:ml-10'>
          <h1 className='text-3xl font-bold p-4'>ChuGu</h1>
          <button className='text-4xl'>
            <BiFootball />
          </button>
        </div>

        <div className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex gap-8 text-lg'>
            {menuItems.map(menu => (
              <li>{menu.label}</li>
            ))}
          </ul>
        </div>

        <div className='hidden lg:block mr-4'>
          <button
            onClick={() => setIsLoggedIn(prev => !prev)}
            className='text-2xl'
          >
            {isLoggedIn ? <FaUser /> : <FaSignInAlt />}
          </button>
        </div>

        <div className='mr-4'>
          <button onClick={toggleMenu} className='lg:hidden text-2xl'>
            {isOpened ? <HiX /> : <HiMenu />}
          </button>
        </div>
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
            isOpened ? 'translate-x-0' : 'translate-x-full'
          } lg:hidden`}
        >
          <div className='p-4'>
            <button
              className='text-2xl mb-8 float-right'
              onClick={toggleMenu}
              aria-label='닫기'
            >
              <HiX />
            </button>
            <ul className='clear-both space-y-6 pt-8 text-lg'>
              {menuItems.map(menu => (
                <li
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {menu.label}
                </li>
              ))}
            </ul>
            <div className='py-6 text-sm'>
              <div
                onClick={() => {
                  setIsLoggedIn(prev => !prev);
                }}
              >
                {isLoggedIn ? <span>로그아웃</span> : <span>로그인</span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
