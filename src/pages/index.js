import React from 'react';

import * as S from '../styles/index';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Product from '../components/Product';

function Index() {
  return(
    <S.Container>
      <Header />
      <Menu />
      <Product />
      <Footer />
    </S.Container>
  )
}

export default Index;