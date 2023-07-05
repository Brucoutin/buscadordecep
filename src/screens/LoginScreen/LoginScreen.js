import React, {  useEffect} from "react";
import {Text, TouchableOpacity, Image, View, Dimensions, BackHandler,} from 'react-native';
import localizacao from "../Assets/Jpg/localizacao.png"
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from "../Styles/LoginScreenStyles";
const LoginScreen = () => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');

      useEffect(()=>{
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
          return () => backHandler.remove();
    
      }, []);
      
      const backAction = () => {
        BackHandler.exitApp()
        return true;
      };
    return (
        <View style={styles.container}>
            <View style={styles.divCepView}> 
                <Text style={styles.txtCepView}>
                    Encontre o Cep
                </Text>
            </View>

            <Image
                source={localizacao}
                style={[styles.logo, { height: height * 0.6, }]}
                resizeMode="contain"
            />
            <View style={styles.ViewCard}>
                <View style={styles.btnButtons}>
                    <TouchableOpacity style={styles.btnCep} onPress={() => navigation.navigate('HomeScreen')}>
                        <MaterialCommunityIcons name="google-maps" size={40} color="#05811a" />
                        <Text style={styles.txtCep}>
                            Buscar cep
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSalvos} onPress={() => navigation.navigate('Salvos')}>
                        <MaterialIcons name="save-alt" size={40} color="#d68b00" />
                        <Text style={styles.txtSalvos}>
                            Salvos
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}

export default LoginScreen;