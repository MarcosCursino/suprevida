import React, { useState, useEffect } from 'react';
import * as S from './styles';
import useGeoLocation from '../../hooks/useGeoLocation';
import Axios from 'axios';

export default function Index() {
  const location = useGeoLocation();
  const [city, setCity] = useState('');

  const handleLocation = async () => {
    try {
      if (location.loaded) {
        const params = {
          key: 'f80204822e4a4c668116158c2cc662ea',
          q: `${location.coordinates.lat}+${location.coordinates.lng}`
        }
        const response = await Axios.get(`https://api.opencagedata.com/geocode/v1/json`, {params});
        setCity(response.data.results[0].components.city)
      }
    } catch (err) {
      console.log(err)
    }
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
          <S.Location>Não foi possível encontrar sua localização.</S.Location> }
      </S.Header>

      <S.Nav>
        <div className="logo">
          <div className="flex">
            <img className="imgLogo" src="img/logo.png" alt="Imagem Logo" />

            <div className="contentInput">
              <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </select>
              <input type="text" placeholder="O que está procurando?" />
              <img src="img/lupa.svg" alt="Lupa" />
            </div>

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
      </S.Nav>
    </S.Container>
  )
}