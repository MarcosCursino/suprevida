import React from 'react';
import * as S from './styles';
import { MdAddShoppingCart } from "react-icons/md";

import Burger from './Burger';

export default function Navbar({ children }) {
  return (
    <>
      <S.Nav>
        <S.Container>
          <div>Mais Sobre Saúde</div>
          <div>Estomia</div>
          <div>Sua Pele</div>
          <div>Circulação</div>
          <div>Reabilitação</div>
          <div>Nutrição e Alimentação</div>
          <div>Movimenta-se</div>
          <div>Longevidade</div>
          <div>Família</div>
          <div>Negocios da Saúde</div>
          <S.Store>
            <MdAddShoppingCart />
            <div>Nossa Loja</div>
          </S.Store>
        </S.Container>
      </S.Nav>
      <Burger />
      {children}
    </>
  )
}