import React, { useState, useEffect } from "react";
import { View, StatusBar } from 'react-native'
import AnimatedSplash from "react-native-animated-splash-screen";
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    const [isLoaded, setIsLoaded] = useState(false);
    const [animationLoaded, setAnimationLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 1000);
    }, []);

    useEffect(() => {
        if (isLoaded && setAnimationLoaded) {
            navigation.navigate('LoginScreen');
        }
    }, [isLoaded, animationLoaded, navigation.navigate]);

    return (
        <>
          <StatusBar animated={false} barStyle={'dark-content'} />
            <AnimatedSplash
                translucent={true}
                isLoaded={isLoaded}
                logoImage={require("../Assets/Jpg/mapa.png")}
                backgroundColor={"#fff"}
                logoHeight={150}
                logoWidth={150}
            >
            </AnimatedSplash>
        </>

    )
}


export default Splash;