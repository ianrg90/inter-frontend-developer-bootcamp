import React, { useEffect, useState, Fragment } from "react";
import useAuth from "../../hooks/useAuth";
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

import {pay, request} from "../../services/resources/pix"

const Dashboard = () => {
  const { user, getCurrentUser } = useAuth();
  const wallet = user?.wallet || 0;

  const [key, setKey] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");
  const [value, setValue] = useState("");

  const handleNewPayment = async () => {
    const {data} = await request(Number(value))

    if(data.copyPastKey){
      setGeneratedKey(data.copyPasteKey)
    }
  };

  const handleReceivePix = async () => {
    try{
      const {data} = await pay(key)

      if(data.msg){
        alert(data.msg)
        return
      }

      alert("Não foi possível fazer o pagamento")

    }catch(e){
      console.log(e)
      alert("Não é possível receber o PIX do mesmo usuário")
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (!user) {
    return null;
  }

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%" noBorder={false}>
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
          <Card noShadow width="90%" noBorder={false}>
            <InlineTitle>
              <h2 className="h2">Receber Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                value={value}
                style={{ flex: 1 }}
                placeholder="Valor"
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={handleNewPayment}>Gerar Código</Button>
            </InlineContainer>
            {generatedKey && (
              <Fragment>
                <p className="primary-color">Pix copia e cola</p>
                <p className="primary-color">{generatedKey}</p>
              </Fragment>
            )}
          </Card>
          <Card noShadow width="90%" noBorder={false}>
            <InlineTitle>
              <h2 className="h2">Pagar Pix</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="Insira a chave"
                value={key}
                onChange={(e) => setKey(e.target.value)}
              />
              <Button onClick={handleReceivePix}>Pagar Pix</Button>
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
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  );
};

export default Dashboard;
