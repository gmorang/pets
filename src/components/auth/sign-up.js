import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import Background from '../background';

import { Container, Form, FormInput, LogoText, SubmitButton, SignLink, SignLinkText } from './styled';

function SignUp({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = React.useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} style={{ width: 150, height: 150 }} />

        <LogoText>Pets</LogoText>

        <Form>
          <FormInput
            icon="person-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Nome completo"
            returnKeyType="next"

          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            returnKeyType="send"
          />

          <SubmitButton>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Fazer Login</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

export default SignUp;
