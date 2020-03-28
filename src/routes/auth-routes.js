import React from 'react';

function NewRoutes() {
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

export default NewRoutes;
