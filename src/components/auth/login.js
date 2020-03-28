import React from 'react';
import { Image } from 'react-native';

import logo from '../../assets/logo.png';

import Background from '../background';

import { Container, Form, FormInput, LogoText, SubmitButton, SignLink, SignLinkText } from './styled';


function Login({ navigation }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const passwordRef = React.useRef();

  return (
    <Background>
      <Container>
        <Image source={logo} style={{ width: 150, height: 150 }} />

        <LogoText>Pets</LogoText>

        <Form>
          <FormInput icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput icon="lock-outline"
            secureTextEntry
            placeholder="Sua senha secreta"
            ref={passwordRef}
            returnKeyType="send"
            value={password}
            onChangeText={setPassword}
          />

          <SubmitButton>
            Acessar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Registre-se</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  )
}

export default Login;
