import * as S from './styles';
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <div className="localizacao">
          <h1>Localização</h1>

          <article>
            <p>Av. Dr Enéas Carvalho de Aguiar, 255</p>
            <p>Cerqueira César, São Paulo/SP</p>
            <p>ajuda@suprevida.com.br</p>
            <p>+55 11 4200-0432</p>
          </article>
        </div>

        <div className="contato">
          <section>
            <button type="button">
              <img src="img/email.png" alt="Email" />
               ENTRE EM CONTATO
            </button>
            <button type="button">
              <BsFillQuestionCircleFill />
               PERGUNTAS FREQUENTES
            </button>
          </section>
        </div>

        <div className="share">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaWhatsapp />
        </div>
      </S.Content>
    </S.Container>
  )
}