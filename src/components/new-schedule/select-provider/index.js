import React from 'react';
import Background from '../../../components/background';

import { Container, Provider, ProvidersList, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = React.useState([1, 2]);

  return (
    <Background>
      <Container>
        <ProvidersList
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item }) => (
            <Provider onPress={() => navigation.navigate('SelectDateTime', { provider: item })}>
              <Avatar
                source={{
                  uri: item.avatar ? item.avatar.url
                    : `https://api.adorable.io/avatar/50/${item.name}.png`
                }} />
              <Name>PetShop</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}
