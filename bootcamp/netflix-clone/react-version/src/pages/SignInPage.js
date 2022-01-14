import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import FormElementsContainer from "../components/UI/FormElementsContainer";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";


function SignInPage() {

  const navigate = useNavigate();
 
  function signIn() {
    navigate("/mainpage");
  }

  return (
    <Card>
      <h1 class="logo signin-page-logo">NETFLIX</h1>
      <form>
        <FormElementsContainer>
          <Input
            type="email"
            placeholder="Email"
            autoComplete="off"
            
          />
          <Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            maxLength="8"
          />
        </FormElementsContainer>
        <FormElementsContainer>
          <Button type="button" text="Sign In" onClick={signIn} />
        </FormElementsContainer>
      </form>
      <p class="signin-page-p">
        Not a member yet ? <Link to="/signup">Sign Up!</Link>
      </p>
    </Card>
  );
}

export default SignInPage;
