import * as S from './styles';
import { AiOutlineMail } from "react-icons/ai";

export default function Index() {

  return (
    <S.Container>
     <div>
     <AiOutlineMail size="19" />
     <span>Participe de nossas newsletter e fique por dentro das promoções e novidades!</span>
     </div>
     <input placeholder="Seu Nome"></input>
     <input placeholder="Seu Email"></input>
     <button>CADASTRAR</button>
    </S.Container>
  )
}