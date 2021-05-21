import React from "react";
import alimentacao from "../assets/images/alimentacao.svg";
import outros from "../assets/images/outros.svg";
import saude from "../assets/images/saude.svg";
import transporte from "../assets/images/transporte.svg";
import utilidades from "../assets/images/utilidades.svg";

import { StyledIconeTema } from "../Components/UI";

export default (type) => {
  const Images = {
    Restaurante: <StyledIconeTema src={alimentacao} alt="Restaurante" />,
    Utilidades: <StyledIconeTema src={utilidades} alt="Utilidades" />,
    Saude: <StyledIconeTema src={saude} alt="Saude" />,
    Transporte: <StyledIconeTema src={transporte} alt="Transporte" />,
    default: <StyledIconeTema src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
};
