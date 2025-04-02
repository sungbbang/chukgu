import React from 'react';
import talkingImg from '../../assets/talking.svg';
import { Link } from 'react-router-dom';

function FixturesCover() {
  return (
    <div className='flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-16'>
      <div className='flex-1 space-y-6 text-center lg:text-right'>
        <h1 className='text-3xl xl:text-4xl font-bold'>
          응원하는 팀이 이겼나요?
        </h1>
        <p className=''>사람들과 이런저런 이야기를 나눌 수 있어요.</p>
        <Link to='/board'>
          <button className='bg-blue-400 text-xl text-white font-semibold hover:bg-blue-500 transition duration-300 rounded-lg px-4 py-2'>
            게시판 가기
          </button>
        </Link>
      </div>
      <div className='flex-1 w-full max-w-2xl lg:max-w-none'>
        <img
          src={talkingImg}
          alt=''
          className='relative rounded-2xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-300'
        />
      </div>
    </div>
  );
}

export default FixturesCover;
