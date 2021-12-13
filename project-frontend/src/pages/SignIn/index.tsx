import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import backgroundImage from "../../assets/images/background-login.jpg"
import logoImage from "../../assets/images/Inter-orange.png"
import Card from '../../components/card'
import Input from '../../components/input'
import Button from '../../components/button/Button'

import {Wrapper, Background, InputContainer, ButtonContainer} from "./styles"

import useAuth from '../../hooks/useAuth'


const SignIn = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const {userSignIn} = useAuth()

    async function handleSignIn(){
        const data = {
            email,
            password
        }

        const response =  await userSignIn(data)

        if(response.id){
        
        navigate("/dashboard")
        return
        }

        alert("Usuario com senha inválida")
    }

    return (
        <Wrapper>
            <Background image={backgroundImage}/>
            <Card width='403px' >
            <img src = {logoImage} width={172} height={61} alt='logo inter'/>
            <InputContainer>
                <Input placeholder='EMAIL' value={email} onChange={e => setEmail(e.target.value)}/> 
                <Input placeholder='SENHA' type= "password" value={password} onChange={e => setPassword(e.target.value)}/>
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
