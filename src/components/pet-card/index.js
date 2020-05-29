import React from 'react';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Header, Title, Avatar, TextContent, InformationRow, InformationItem, HeaderBox, StatusText, ServiceBox, ServiceItem } from './styles';

export default function PetCard() {
  return (
    <Container>
      <HeaderBox>
        <Avatar source={{ uri: 'https://api.adorable.io/avatars/285/abott@adorable.png' }} />
        <Header>
          <Title>Joselito</Title>
          <TextContent>Cachorro</TextContent>
        </Header>
        <TouchableOpacity style={{ paddingRight: 40, marginTop: 10 }}>
          <Icon name="more-vert" size={20} color="#000" />
        </TouchableOpacity>
      </HeaderBox>

      <ServiceBox>
        <ServiceItem>Joselito roer ossos e biscoitos</ServiceItem>
      </ServiceBox>

      <InformationRow>
        <InformationItem>
          <TextContent>7 anos</TextContent>
        </InformationItem>

        <InformationItem>
          <TextContent>Bulldog</TextContent>
        </InformationItem>

      </InformationRow>
    </Container>
  );
}
