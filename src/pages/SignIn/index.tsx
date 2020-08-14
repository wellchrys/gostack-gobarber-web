import React from 'react';

import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../../components/input';
import Button from '../../components/button';

import logo from '../../assets/Logo.svg';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber" />

      <form>
        <h1>Faça Login</h1>
        <Input name="email" icon={FiMail} placeholder="email" />
        <Input
          name="password"
          icon={FiLock}
          type="password"
          placeholder="Senha"
        />
        <Button type="submit">Entrar</Button>

        <a href="forgot">esqueci minha senha</a>
      </form>

      <a href="forgot">
        <FiLogIn />
        Criar Conta
      </a>
    </Content>
    <Background />
  </Container>
);

export default SignIn;
