import React, { useState, useEffect } from 'react';
import * as S from './styles';
import useGeoLocation from '../../hooks/useGeoLocation';
import Axios from 'axios';

import Image from 'next/image'

export default function Index() {
  const location = useGeoLocation();
  const [city, setCity] = useState('');
  const [search, setSearch] = useState('');
  const [option, setOption] = useState('artigo');

  const handleLocation = async () => {
    try {
      if (location.loaded) {
        const params = {
          key: 'f80204822e4a4c668116158c2cc662ea',
          q: `${location.coordinates.lat}+${location.coordinates.lng}`
        }
        const response = await Axios.get(`https://api.opencagedata.com/geocode/v1/json`, { params });
        setCity(response.data.results[0].components.city)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleClick = () => {
    window.open(`https://suprevida.com.br/busca_Loja.html?type=${option}&q=${search}`, '_blank');
  }

  useEffect(() => {
    handleLocation()
  }, [location])

  return (
    <S.Container>

      <S.Header>
        <S.Itens>
          <div>Produtos para Saúde </div>
          <S.Separator>|</S.Separator>
          <div>Biblioteca de Saúde </div>
          <S.Separator>|</S.Separator>
          <div>Profissionais de Saúde </div>
          <S.Separator>|</S.Separator>
          <div>Vender Produtos</div>
        </S.Itens>

        {city !== '' ?
          <S.Location>Você está em {city}. Clique <strong>Aqui</strong> para alterar.</S.Location> :
          <S.Location>Não foi possível encontrar sua localização.</S.Location>}
      </S.Header>

      <S.Nav>
        <div className="logo">
          <div className="flex">
            <div className="imgLogo">
              <Image src="/img/logo.webp" width={166} height={92} alt="Imagem Logo" />
            </div>

            <div className="contentInput">
              <select name="options" onChange={(e) => setOption(e.target.value)}>
                <option value="artigo">Conteúdo</option>
                <option value="produto">Produto</option>
              </select>
              <input type="text" placeholder="O que está procurando?" onChange={(e) => setSearch(e.target.value)} />
              <img src="img/lupa.svg" alt="Lupa" onClick={() => handleClick()} />
            </div>

            <div className="flexAccount">
              <div className="contentUser">
                <img src="img/user.svg" alt="Usuario" />
                <span>Minha Conta</span>
              </div>

              <S.Notification>
                <img className="shopping" src="img/shopping.svg" alt="Carrinho de compras" />
                <span>7</span>
              </S.Notification>
            </div>
          </div>
        </div>
      </S.Nav>
    </S.Container>
  )
}