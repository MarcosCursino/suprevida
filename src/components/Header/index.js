import * as S from './styles';

export default function Index() {

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

          <S.Location>Você está em São Paulo. Clique <strong>Aqui</strong> para alterar.</S.Location>

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