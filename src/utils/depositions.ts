import depo1Img from "../assets/depositions/depo1.png";
import depo2Img from "../assets/depositions/depo2.png";
import depo3Img from "../assets/depositions/depo3.png";
import depo4Img from "../assets/depositions/depo4.png";

interface Deposition {
  id: number;
  avatar: string;
  depositionText: string;
  name: string;
  job: string;
}

export const depositions: Deposition[] = [
  {
    id: 1,
    avatar: depo1Img,
    depositionText:
      "Sou cliente do Renee há uns 12 anos. Nosso primeiro contato foi por intermédio de meu pai, que já tem uma história de décadas com o querido Renee. O excelente atendimento antes e pós venda e a alta qualidade dos materiais usados colocam a Renee Trajar em um patamar acima dos demais do ramo.",
    name: "William H. M. Garey",
    job: "Advogado  |  Nelson Garey Advogados Associados.",
  },
  {
    id: 2,
    avatar: depo2Img,
    depositionText:
      "Seu corte tanto de camisas, bem como de ternos são impecáveis, muitos dos meus amigos tem elogiado a vestimenta. Recomendo para quem gosta de perfeição. Estamos nos servindo do trabalho do Renee Trajar há mais de vinte anos.",
    name: "Domingos Orestes Chiomento",
    job: "DOC Contabilidade Empresarial",
  },
  {
    id: 3,
    avatar: depo3Img,
    depositionText:
      "Tenho a honra de afirmar que enquanto nossas vidas perdurarem o meu conceito é sempre melhor em relação ao Renee Trajar, sua pessoa, ao profissional competente e idôneo, sempre pontual, atencioso e preocupado em atender da melhor maneira os anseios de seus clientes, incluindo este signatário.",
    name: "José Mauro Marques",
    job: "Advogado",
  },
  {
    id: 4,
    avatar: depo4Img,
    depositionText:
      "Conheço o excelente e qualificado trabalho do Renee Trajar e sua equipe há décadas. Para camisas e ternos, o Renee é imbatível, sempre com preços justos, produtos de excelente qualidade e especialmente tudo é feito com muito cuidado e qualidade. Cumpre os prazos com atendimento de alto nível. O Renee trabalha com perfeição nos detalhes.",
    name: "Custódio Pereira",
    job: "Membro do CONSOCIAL - Conselho Superior de Responsabilidade Social da FIESP-SP",
  },
];
