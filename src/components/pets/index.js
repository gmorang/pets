import React from 'react';

import Background from '../background';

import { Container, List } from './styles';
import PetCard from '../pet-card';

export default function PetList() {
  return (
    <Background>
      <Container>
        <List
          data={['1']}
          keyExtractor={time => String(time)}
          renderItem={({ item }) => (<PetCard />)}
        />
      </Container>
    </Background>
  );
}
