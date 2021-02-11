import React from 'react';
import Head from 'next/head';
import * as S from '../styles/index';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Description from '../components/Description';

function Index() {
  return(

    <S.Container>
      <Head>
        <title>LUVAS PARA BANHO E LIMPEZA EM GERAL BIOSOMA - 25 UN - HARTMANN</title>
      </Head>
      <Header />
      <Menu />
      <Product />
      <Description />
      <Footer />
    </S.Container>
  )
}

export default Index;
