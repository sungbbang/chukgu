import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { path: '/', label: '홈' },
  { path: '/fixtures', label: '일정' },
  { path: '/record', label: '순위표' },
  { path: '/board', label: '게시판' },
  { path: '/contact', label: '문의하기' },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      onClick={onClick}
      className='hover:text-blue-500 transition duration-300'
    >
      {label}
    </Link>
  </li>
);

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='bg-gray-100 mt-40'>
      <div className='container mx-auto px-4 py-12'>
        <div className='flex md:justify-center items-center'>
          <ul className='grid grid-cols-1 md:grid-cols-5 gap-8 text-lg text-gray-400 font-semibold'>
            {menuItems.map(menu => (
              <MenuItem
                key={menu.label}
                {...menu}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              />
            ))}
          </ul>
        </div>

        <div className='md:text-center mt-6 space-y-4'>
          <p>해외축구 좋아하는 사람이 만들었습니다.</p>
          <p>&copy; {currentYear} chugu. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
