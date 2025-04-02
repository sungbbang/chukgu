import React from 'react';
import footballImg from '../../assets/football.svg';

function FixturesCover() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
      <div className='flex-1 space-y-6 text-center lg:text-left'>
        <h1 className='text-3xl xl:text-4xl font-bold'>
          오늘은 어떤 경기가 있을까요?
        </h1>
        <p className=''>당신이 좋아하는 리그의 일정을 지금 확인해보세요.</p>
        <button className='bg-blue-400 text-xl text-white font-semibold hover:bg-blue-500 transition duration-300 rounded-lg px-4 py-2'>
          일정 보러가기
        </button>
      </div>
      <div className='flex-1 w-full max-w-2xl lg:max-w-none'>
        <div className='relative'>
          <img
            src={footballImg}
            alt=''
            className='relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300'
          />
        </div>
      </div>
    </div>
  );
}

export default FixturesCover;
