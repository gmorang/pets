import React from 'react';

import Background from '../background';

import { Container, List } from './styles';
import Schedule from '../shedule';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <List
          data={['1']}
          keyExtractor={time => String(time)}
          renderItem={({ item }) => (<Schedule />)}
        />
      </Container>
    </Background>
  );
}
