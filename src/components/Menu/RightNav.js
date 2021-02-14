import React from 'react'
import * as S from './styles';

function RightNav({ open }) {
  return (
    <S.Ul open={open}>
      <img src='img/logo.png' alt="SupreVida" />
      <li>Mais Sobre Saúde</li>
      <li>Estomia</li>
      <li>Sua Pele</li>
      <li>Circulação</li>
      <li>Reabilitação</li>
      <li>Nutrição e Alimentação</li>
      <li>Movimenta-se</li>
      <li>Longevidade</li>
      <li>Família</li>
      <li>Negocios da Saúde</li>
      <li>Nossa Loja</li>
    </S.Ul>
  )
}

export default RightNav
