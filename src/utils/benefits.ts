import qualityIcon from "../assets/icons/quality.svg";
import confidenceIcon from "../assets/icons/confidence.svg";
import experienceIcon from "../assets/icons/experience.svg";

interface Benefits {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefits[] = [
  {
    id: 1,
    icon: qualityIcon,
    title: "Qualidade",
    description: "Camisaria e Alfaiataria 100% artesanal.",
  },
  {
    id: 2,
    icon: confidenceIcon,
    title: "Confiança",
    description: "Atendimento personalizado no escritório ou residência.",
  },
  {
    id: 3,
    icon: experienceIcon,
    title: "Experiência",
    description: "Tradição e modernidade proporcionando elegância.",
  },
];
