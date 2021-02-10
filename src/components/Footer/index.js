import * as S from './styles';

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
              {/* <img src={Email} alt="Email" /> */}
               ENTRE EM CONTATO
            </button>
            <button type="button">
              {/* <img src={Audio} alt="Audio" /> */}
               PERGUNTAS FREQUENTES
            </button>
          </section>
        </div>

        <div className="patriocinio">
          <div className="content_patriocinio">
            <p>Created by</p>
            {/* <img src={LogoWhite} alt="Logo" /> */}
          </div>

          <div className="content_patriocinio">
            <p>Powered by</p>
            {/* <img src={Vtex} alt="Vtex" /> */}
          </div>
        </div>
      </S.Content>
    </S.Container>
  )
}