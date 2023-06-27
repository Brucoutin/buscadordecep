'use strict';

import { NavigationContainer } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MainNavigator } from './src/screens/MainNavigation/MainNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>

  );

}

export default App;
