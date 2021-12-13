import React from "react";

import {
  DashboardBackground,
  BodyContainer,
  InlineContainer,
  InlineTitle,
} from "./styles";
import Header from "../../components/header";
import Card from "../../components/card";
import Input from "../../components/input";
import Button from "../../components/button/Button";
import Statement from "./statement";

const Dashboard = () => {
  const wallet = 5000;

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%" noBorder = {false}>
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </InlineContainer>
          </Card>
          <Card noShadow width="90%" noBorder = {false}>
            <InlineTitle>
              <h2 className="h2">Receber Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} placeholder="Valor" />
              <Button>Gerar Código</Button>
            </InlineContainer>
            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">aughfuiaisfauishduiahsduigf</p>
          </Card>
          <Card noShadow width="90%" noBorder = {false}>
            <InlineTitle>
              <h2 className="h2">Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} placeholder="Insira a chave" />
              <Button>Pagar Pix</Button>
            </InlineContainer>
            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">aughfuiaisfauishduiahsduigf</p>
          </Card>
        </div>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Extrato da conta</h2>
            </InlineTitle>
            <Statement/>
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  );
};

export default Dashboard;
