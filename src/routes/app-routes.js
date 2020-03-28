import React from 'react';


function AppRoutes() {
  const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#FFF',
    inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
    style: {
      backgroundColor: '#8d41a8'
    }
  }

  return (
    <Tab.Navigator tabBarOptions={tabBarOptions} initialRouteName="Dashboard">
      <Tab.Screen
        name="Dashboard"
        options={{ tabBarLabel: 'Agendamentos', tabBarIcon: () => <Icon name="event" size={20} color="#FFF" /> }}
        component={Dashboard} />

      <Tab.Screen
        name="New"
        options={{ tabBarVisible: false, tabBarIcon: () => <Icon name="add-circle-outline" size={20} color="rgba(255, 255, 255,0.6)" /> }} component={NewRoutes} />

      <Tab.Screen
        name="Profile"
        options={{ tabBarLabel: 'Perfil', tabBarIcon: ({ tintColor }) => (<Icon name="person" size={20} color="#FFF" />) }}
        component={Profile} />
    </Tab.Navigator>
  );
}

export default AppRoutes;
