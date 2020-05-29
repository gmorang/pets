import React from 'react';

import Background from '../../../components/background';
import DatePicker from '../../../components/datepicker';

import { Container, HourList, Hour, Title } from './styles';

export default function SelectDateTime({ route, navigation }) {
  const [date, setDate] = React.useState(new Date());
  const [hours, setHours] = React.useState([1])

  function handleSelectHour(time) {
    navigation.navigate('confirm')
  }

  return (
    <Background>
      <Container>
        <DatePicker date={date} onChange={setDate} />
        <HourList
          data={hours}
          extraData={date}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour onPress={() => handleSelectHour(item.value)} enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
