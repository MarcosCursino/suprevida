import * as S from './styles';

import Image from 'next/image'


export default function Index() {

  return (
    <S.Container>
        <h3>OUTROS CLIENTES TAMBÉM COMPRARAM</h3>

        <S.Itens>
          <S.Item>
            <Image 
              src="https://fotos.suprevida.com.br/fotos/01-1603114825747.jpg_mini.jpg"
              alt="Thubmanil Item 1"
              width='auto'
              height='auto'
            />
            <span>Luva de Banho by Take & Care - 20 un - WipeDerm</span>
            <div>R$ 161,14 <strong>cada</strong></div>
            <button>COMPRAR</button>
          </S.Item>

          <S.Item>
            <Image 
              src="https://fotos.suprevida.com.br/fotos/%2001049-0.jpg.jpg" 
              alt="Thubmanil Item 2" 
              width='auto' 
              height='auto' />
            <span>Lenços Umedecidos FeelClean Antissépticos - 2un -Feel Clean</span>
            <div>R$ 8,00 <strong>cada</strong></div>
            <button>COMPRAR</button>
          </S.Item>

          <S.Item>
            <Image 
              src="https://fotos.suprevida.com.br/fotos/leonco-umedecidos-biosoma-1592858940683.jpg.jpg" 
              alt="Thubmanil Item 2" 
              width='auto' 
              height='auto' />
            <span>Lenço umedecido Biosoma - 50 un caixa - 2un embalagem -Hartmann</span>
            <div>R$ 56,50 <strong>cada</strong></div>
            <button>COMPRAR</button>
          </S.Item>

          <S.Item>
            <Image 
              src="https://fotos.suprevida.com.br/fotos/1545135519860-1580222776700.jpg"
              alt="Thubmanil Item 2"
              width='auto'
              height='auto' />
            <span>Curativo Hidrogel Hartmann Hydrosorb 10X10cm 5un</span>
            <div>R$ 203,50 <strong>cada</strong></div>
            <button>COMPRAR</button>
          </S.Item>

          <S.Item>
            <Image 
              src="https://fotos.suprevida.com.br/fotos/1548253270724-1580222776715.jpg" 
              alt="Thubmanil Item 2" 
              width='auto' 
              height='auto' />
            <span>Convacare Lenço Barreira Protetora 100un</span>
            <div>R$ 285,60 <strong>cada</strong></div>
            <button>COMPRAR</button>
          </S.Item>
        </S.Itens>
      </S.Container>
  )
}