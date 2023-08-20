import React from 'react';
import Board from '@/components/main/Board';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function board(props) {
  return (
    <div>
      <Header />
      <h1>This is board</h1>
      <Board />
      <Footer />
    </div>
  );
}

export default board;
