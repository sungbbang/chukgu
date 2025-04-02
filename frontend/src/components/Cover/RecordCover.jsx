import React from 'react';
import playerImg from '../../assets/player.svg';
import { Link } from 'react-router-dom';

function RecordCover() {
  return (
    <div className='flex flex-col lg:flex-row-reverse justify-between items-center gap-10'>
      <div className='flex-1 space-y-6 text-center lg:text-left'>
        <h1 className='text-3xl xl:text-4xl font-bold'>
          누가 가장 골을 많이 넣었나요?
        </h1>
        <p className=''>선수들의 스탯과 리그 순위 정보를 제공해요.</p>
        <Link to='/record'>
          <button className='bg-blue-400 text-xl text-white font-semibold hover:bg-blue-500 transition duration-300 rounded-lg px-4 py-2'>
            순위 보러가기
          </button>
        </Link>
      </div>
      <div className='flex-1 w-full max-w-2xl lg:max-w-none'>
        <img
          src={playerImg}
          alt=''
          className='relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300'
        />
      </div>
    </div>
  );
}

export default RecordCover;
