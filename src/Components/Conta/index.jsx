import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";

import { StyledIcone, StyledBox, StyledBotao, StyledSaldo, StyledDetalhe, StyledIconeTema } from "../../Components/UI/index";

import styled from "styled-components";

const StyledIconeMargin = styled(StyledIcone)`
  margin-top: 2px;
`;

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <StyledBox>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <StyledIconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <StyledSaldo>
            <StyledDetalhe>R$</StyledDetalhe> 0,00{" "}
          </StyledSaldo>
        ) : null}
      </div>

      <StyledBotao onClick={toggleHandler}>
        <StyledIconeMargin
          style={{ marginTop: "2px" }}
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </StyledBotao>
    </StyledBox>
  );
};

export default Conta;
