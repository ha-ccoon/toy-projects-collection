import React from 'react';
import Main from '@/components/main/Main';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { useTranslation } from 'next-i18next';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

function index(props) {
  const { t } = useTranslation('common');
  return (
    <div>
      <p>{t('serverSideTest')}</p>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default index;
