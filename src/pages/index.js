import React from 'react';

import * as S from '../styles/index';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Index() {
  return(
    <S.Container>
      <Header />
      <Menu />
      <Footer />
    </S.Container>
  )
}

export default Index;