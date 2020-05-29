import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SelectProvider from '../components/new-schedule/select-provider';
import SelectDateTime from '../components/new-schedule/select-date-time';
import ConfirmRequest from '../components/new-schedule/confirm';

const Stack = createStackNavigator();

export default function NewRoutes() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerTintColor: "#FFF",
        headerLeftContainerStyle: { marginLeft: 20 },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
        )
      })}
    >
      <Stack.Screen name="SelectProvider" options={{ title: "Selecione o Prestador" }} component={SelectProvider} />
      <Stack.Screen name="SelectDateTime" options={{ title: "Selecione o horário" }} component={SelectDateTime} />
      <Stack.Screen name="confirm" options={{ title: "Confirme" }} component={ConfirmRequest} />
    </Stack.Navigator>
  )
}
