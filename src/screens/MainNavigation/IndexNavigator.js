import React, { useState, useEffect, useRef } from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from '../MainNavigation/MainNavigation';

export function IndexNavigation (){
    return(
     <NavigationContainer>
        <MainNavigator/>
     </NavigationContainer>
    )
} 