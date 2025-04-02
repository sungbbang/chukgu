import React from 'react';
import FixturesCover from '../components/Cover/FixturesCover';
import RecordCover from '../components/Cover/RecordCover';
import BoardCover from '../components/Cover/BoardCover';

function HomePage() {
  return (
    <main className='pt-20 space-y-20'>
      <div className='container mx-auto px-4 py-6 md:px-10 md:py-10 space-y-30'>
        <FixturesCover />
        <RecordCover />
        <BoardCover />
      </div>
    </main>
  );
}

export default HomePage;
