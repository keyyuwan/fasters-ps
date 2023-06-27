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
      "Tenho sido cliente do Raul por aproximadamente 12 anos. Meu primeiro contato foi por meio do meu pai, que já possui uma relação de décadas com o estimado Raul. O serviço excepcional desde o primeiro contato até o pós-venda, juntamente com a utilização de materiais de alta qualidade, coloca a Raul Dubois em um nível superior aos concorrentes do setor.",
    name: "William Lacerda",
    job: "Advogado | Nelson Lacerda Advogados Associados.",
  },
  {
    id: 2,
    avatar: depo2Img,
    depositionText:
      "O trabalho de corte nas camisas e ternos oferecido por vocês é excepcional, e muitos dos meus amigos têm elogiado o resultado final do vestuário. Eu recomendo a todos que valorizam a perfeição. Já somos clientes fiéis da Raul Dubois há mais de duas décadas, e continuaremos a contar com seus serviços.",
    name: "Vicente Orestes",
    job: "Advogado",
  },
  {
    id: 3,
    avatar: depo3Img,
    depositionText:
      "É com grande satisfação que afirmo que, enquanto existirmos, minha opinião sobre a excelência da Raul Dubois e seu time de profissionais competentes e íntegros só crescerá. Sempre pontuais, atenciosos e empenhados em atender os desejos de seus clientes da melhor maneira possível, incluindo a minha pessoa, é uma verdadeira honra poder contar com seus serviços.",
    name: "Francisco Marques Machado",
    job: "Advogado",
  },
  {
    id: 4,
    avatar: depo4Img,
    depositionText:
      "Há muitos anos sou testemunha do trabalho excepcional e altamente qualificado realizado pela equipe da Raul Dubois. Quando se trata de camisas e ternos, eles são imbatíveis, oferecendo preços justos e produtos de excelente qualidade. Além disso, tudo é feito com extrema atenção e cuidado, cumprindo prazos e proporcionando um atendimento de alto nível. O Raul se destaca pela perfeição nos detalhes do seu trabalho.",
    name: "Rene Pereira",
    job: "Advogado",
  },
];
