import * as S from './styles';
import { FaAngleRight, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaTelegram } from "react-icons/fa";
export default function Index() {
  const props = {width: 400, height: 300, zoomPosition: 'original', img: "https://fotos.suprevida.com.br/fotos/1545132967308-1580222776689.jpg"};

  return (
    <S.Container>
        <S.Breadcrumb>
         <span>INÍCIO</span> <FaAngleRight />
         <span>PRODUTOS</span> <FaAngleRight />
         <strong>LUVAS PARA BANHO E LIMPEZA EM GERAL  BIOSOMA - 25 UN - HARTMANN</strong>
        </S.Breadcrumb>

        <S.Product>

          <S.BoxLeft>
            <S.Mini>
              <img src="https://fotos.suprevida.com.br/fotos/1545132967308-1580222776689.jpg"></img>
              <img src="https://fotos.suprevida.com.br/fotos/1545132967308-1580222776689.jpg"></img>
            </S.Mini>
            <S.Img>
              <img src="https://fotos.suprevida.com.br/fotos/biosoma-luva-1592914339801.jpg.jpg"></img>
            </S.Img>

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

            <S.Share>
                <span>COMPARTILHE ESSA OFERTA!</span>
                <div>
                  <FaFacebook size="22"/>
                  <FaInstagram size="22"/>
                  <FaTwitter size="22"/>
                  <FaWhatsapp size="22"/>
                  <FaLinkedin size="22"/>
                  <FaTelegram size="22"/>
                </div>
            </S.Share>

          </S.BoxRigth>

        </S.Product>
    </S.Container>
  )
}