import React from 'react';

import * as S from '../styles/index';
import Header from '../components/Header';
import Menu from '../components/Menu';

function Index() {
  return(
    <S.Container>
      <Header />
      <Menu />
    </S.Container>
  )
}

export default Index;