import * as S from './styles';
import { FaAngleRight } from "react-icons/fa";

export default function Index() {

  return (
    <S.Container>
        <S.Breadcrumb>
         <span>INÍCIO</span> <FaAngleRight />
         <span>PRODUTOS</span> <FaAngleRight />
         <strong>LUVAS PARA BANHO E LIMPEZA EM GERAL  BIOSOMA - 25 UN - HARTMANN</strong>
        </S.Breadcrumb>

        <S.Product>

          <S.BoxLeft>
          IMAGEM AQUI
          </S.BoxLeft>

          <S.BoxRigth>
            <h2>LUVAS PARA BANHO E LIMPEZA EM GERAL BIOSOMA - 25 UN - HARTMANN</h2>
            <span className="infoProduct">Marca do Produto: hartmann | Código: CRWG01BR</span>

            <div className="contador">
              <span> R$ 10,00</span>
              <div className="form">
                <div>-</div>
                <div>1</div>
                <div>+</div>
              </div>
            </div>

            <button className="buttonBuyItem">COMPRAR</button>
            <span className="infoProduct2">Venda permitida para pessoa <strong>Física</strong></span>

            <S.Freight>
              <span>Calcule o frete e prazo de entrega</span>
              <input type="text" placeholder="Digite o CEP"></input>
              <button>CALCULAR</button>
            </S.Freight>
          </S.BoxRigth>

        </S.Product>
    </S.Container>
  )
}