import React from 'react';
import Background from '../../../components/background';

import { Container, Avatar, Name, Time, SubmitButton } from './styles';

function ConfirmRequest({ navigation, route }) {
  return (
    <Background>
      <Container>
        <Avatar
          source={{
            uri: `https://api.adorable.io/avatar/50/gabriel.png`
          }} />

        <Name>Pet shop top</Name>

        <Time>29/05/2020</Time>

        <SubmitButton>Confirmar agendamento</SubmitButton>
      </Container>
    </Background>
  );
}

export default ConfirmRequest;
