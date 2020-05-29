import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../components/dashboard';
import NewRoutes from './new-routes';
import Profile from '../components/profile';
import PetList from '../components/pets';

const Tab = createBottomTabNavigator();

function AppRoutes() {
  const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#FFF',
    inactiveTintColor: '#47E3FF',
    style: {
      backgroundColor: '#0E2D33'
    }
  }

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} initialRouteName="New">
      <Tab.Screen
        name="Dashboard"
        options={{ tabBarLabel: 'Agendamentos', tabBarIcon: () => <Icon name="event" size={20} color="#47E3FF" /> }}
        component={Dashboard} />

      <Tab.Screen
        name="New"
        options={{ tabBarIcon: () => <Icon name="add-circle-outline" size={20} color="#47E3FF" /> }} component={NewRoutes} />

      <Tab.Screen
        name="Pets"
        options={{ tabBarLabel: 'Pets', tabBarIcon: ({ tintColor }) => (<Icon name="pets" size={20} color="#47E3FF" />) }}
        component={PetList} />

      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: 'Perfil', tabBarIcon: ({ tintColor }) => (<Icon name="person" size={20} color="#47E3FF" />) }}
        component={Profile} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
