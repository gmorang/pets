import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Header, Title, Avatar, TextContent, InformationRow, InformationItem, HeaderBox, StatusText, ServiceBox, ServiceItem } from './styles';

export default function Schedule() {
  return (
    <Container>
      <HeaderBox>
        <Avatar source={{ uri: 'https://api.adorable.io/avatars/285/abott@adorable.png' }} />
        <Header>
          <Title>Joselito</Title>
          <TextContent>16/04/2020 - 15h30</TextContent>
        </Header>
        <TouchableOpacity style={{ paddingRight: 40, marginTop: 10 }}>
          <Icon name="more-vert" size={20} color="#000" />
        </TouchableOpacity>
      </HeaderBox>

      <ServiceBox>
        <ServiceItem>Banho e tosa - R$45,00</ServiceItem>
        <ServiceItem>Tosa higienica - R$45,00</ServiceItem>
      </ServiceBox>

      <InformationRow>
        <InformationItem>
          <Icon name="location-on" size={14} color="#666" style={{ marginRight: 3 }} />
          <TextContent>Rua dos bobos, 0</TextContent>
        </InformationItem>

        <InformationItem>
          <Icon name="attach-money" size={14} color="#666" />
          <TextContent>R$220,00</TextContent>
        </InformationItem>

        <InformationItem>
          <Icon name="check" size={14} color="#39B6CC" style={{ marginRight: 3 }} />
          <StatusText status="done">Realizado</StatusText>
        </InformationItem>
      </InformationRow>
    </Container>
  );
}
