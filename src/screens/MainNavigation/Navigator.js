import React from 'react';
import HomeScreen from '../HomeScreen/HomeScreen';
import LoginScreen from '../LoginScreen/LoginScreen';
import Salvos from '../Salvos/Salvos';

export function Navigator() {
  return (
    <Navigator>
      <Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }} />
        <Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }} />
         <Screen
        name="Salvos"
        component={Salvos}
        options={{ headerShown: false }} />
    </Navigator>
  );

}