import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../HomeScreen/HomeScreen";
import LoginScreen from "../LoginScreen/LoginScreen";
import Salvos from "../Salvos/Salvos";
const {Screen, Navigator} = createNativeStackNavigator();

export function MainNavigator(){

    return (
        <Navigator  screenOptions={{
          headerShown: false
        }}>
           <Screen
              name="LoginScreen"
              component={LoginScreen} 
              options={{headerShown:false}}      
            />
            <Screen
              name="HomeScreen"
              component={HomeScreen} 
              options={{headerShown:false}}      
            />
             <Screen
              name="Salvos"
              component={Salvos}
              options={{headerShown:false}}            
            />
           
        </Navigator>
    )
    
    
    }
    