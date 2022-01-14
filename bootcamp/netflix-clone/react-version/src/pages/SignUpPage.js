import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../components/UI/Card";
import FormElementsContainer from "../components/UI/FormElementsContainer";
import Input from "../components/UI/Input";
import Button from "../components/UI/Button";

function SignUpPage() {
  const navigation = useNavigate()

  function signUp(){
    navigation("/signin")
  }

  return (
    <Card>
      <h1 class="logo signin-page-logo">NETFLIX</h1>
      <form>
        <FormElementsContainer>
          <Input type="text" placeholder="Full name" autoComplete="off" />
          <Input type="email" placeholder="Email" autoComplete="off" />
          <Input type="password" placeholder="Password" autoComplete="off" maxLength = "8"/>
          <Input type="password"placeholder="Confirm password"autoComplete="off" maxLength = "8"/>
        </FormElementsContainer>
        <FormElementsContainer>
          <Button type="button" text="Sign Up" onClick = {signUp}/>
        </FormElementsContainer>
      </form>
      <p class="signin-page-p"> Already have an account? <Link to = "/signin">Sign In!</Link></p>
    </Card>
  );
}

export default SignUpPage;
