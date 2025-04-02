import React, { useState } from 'react';
import { BiFootball } from 'react-icons/bi';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/fixtures', label: '일정' },
  { path: '/record', label: '순위표' },
  { path: '/board', label: '게시판' },
  { path: '/contact', label: '문의하기' },
];

const MenuItem = ({ path, label, isActive, onClick }) => (
  <li>
    <Link
      to={path}
      onClick={onClick}
      className={`hover:text-blue-500 transition duration-300 ${
        isActive && 'text-blue-500 font-bold'
      }`}
    >
      {label}
    </Link>
  </li>
);

function NavBar() {
  const location = useLocation();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => setIsOpened(prev => !prev);

  return (
    <nav className='fixed top-0 left-0 w-full bg-white shadow-lg z-50'>
      <div className='container mx-auto flex justify-between items-center h-20'>
        <div className='flex items-center lg:ml-10 text-blue-500'>
          <h1 className='text-3xl xl:text-4xl font-bold p-4'>ChuGu</h1>
          <button className='text-4xl'>
            <BiFootball />
          </button>
        </div>

        <div className='hidden lg:flex flex-1 justify-center'>
          <ul className='flex gap-12 xl:gap-14 text-xl xl:text-2xl'>
            {menuItems.map(menu => (
              <MenuItem
                key={menu.path}
                {...menu}
                isActive={location.pathname === menu.path}
              />
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

        <button onClick={toggleMenu} className='lg:hidden text-2xl mr-4'>
          {isOpened ? <HiX /> : <HiMenu />}
        </button>
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
            <ul className='clear-both space-y-6 pt-8 text-lg font-semibold'>
              {menuItems.map(menu => (
                <MenuItem
                  key={menu.path}
                  {...menu}
                  isActive={location.pathname === menu.path}
                  onClick={() => {
                    if (location.pathname !== menu.path) {
                      toggleMenu();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                />
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
