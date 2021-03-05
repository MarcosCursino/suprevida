import React from 'react'
import Image from 'next/image'
import * as S from './styles';

function RightNav({ open }) {
  return (
    <S.Ul open={open}>
      <div>
      <Image 
      src='/img/logo.png' 
      alt="SupreVida"
      width="100"
      height="50" />
      </div>
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
