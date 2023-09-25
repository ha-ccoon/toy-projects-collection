import React from 'react';
import Board from './Board';

import { useTranslation } from 'next-i18next';

function Main(props) {
  const { t } = useTranslation('common');
  return (
    <div>
      <p>{t('test')}</p>
      <h1>홈페이지</h1>
    </div>
  );
}

export default Main;
