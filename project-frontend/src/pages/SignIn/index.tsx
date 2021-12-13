import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backgroundImage from "../../assets/images/background-login.jpg"
import logoImage from "../../assets/images/Inter-orange.png"
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button/Button'

import {Wrapper, Background, InputContainer, ButtonContainer} from "./styles"

const SignIn = () => {

    const navigate = useNavigate()

    function handleSignIn(){
        navigate("/dashboard")
    }

    return (
        <Wrapper>
            <Background image={backgroundImage}/>
            <Card width='403px' >
            <img src = {logoImage} width={172} height={61} alt='logo inter'/>
            <InputContainer>
                <Input placeholder='EMAIL'/> 
                <Input placeholder='SENHA' type= "password"/>
            </InputContainer>
            <ButtonContainer>
                <Button type='button' onClick={handleSignIn}>Entrar</Button>
                <p>Ainda não é cadastrado ? <Link to = "/signup"> Cadastre-se já</Link></p>
            </ButtonContainer>
            </Card>
        </Wrapper>
    )
}

export default SignIn;
