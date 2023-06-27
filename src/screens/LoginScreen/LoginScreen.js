import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View,
    Dimensions,
} from 'react-native';
import mapa from "../Assets/Jpg/mapa.png";
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import styles from "../Styles/LoginScreenStyles";


const LoginScreen = () => {
    const navigation = useNavigation();
    const { width, height } = Dimensions.get('screen');
  
    return (  
        <View style={styles.container}>
                <Image
                    source={mapa}
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