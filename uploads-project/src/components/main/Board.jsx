import React from 'react';
import * as S from './Board.styled';

import { useTranslation } from 'next-i18next';

function Board(props) {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('test')}</h1>
      <S.LayoutDiv>
        <S.BoardH1>공지사항</S.BoardH1>
      </S.LayoutDiv>
    </div>
  );
}

export default Board;
