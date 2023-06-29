
import React, { useState } from 'react';
import {
  Alert,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  StatusBar
} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import styles from "../Styles/HomeScreenStyles";
import api from '../service/api';
import { useNavigation } from '@react-navigation/native';
import realm, { getCadastro } from '../Database/realm';
import uuid from 'react-native-uuid';
import LottieView from "lottie-react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const HomeScreen = () => {
  const navigation = useNavigation();
  const [searchCep, setSearchCep] = useState("")
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [localidade, setLocalidade] = useState("");
  const [uf, setUf] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [loading, setLoading] = useState(false)
  const [upModal, setUpModal] = useState(false)
  async function getCep() {
    try {
      const response = await api.get(`/${searchCep}/json/`)
      setLogradouro(response.data.logradouro)
      setLocalidade(response.data.localidade)
      setUf(response.data.uf)
      setBairro(response.data.bairro)
      setComplemento(response.data.complemento)
      setCep(response.data.cep)
      console.log(response)

    }
    catch (error) {
      console.log(error)
    }
  }


  async function SaveCep() {

    try {
      realm.write(() => {
        const create = realm.create('cadastro_cep', {
          id_cep: uuid.v4(),
          cep_cep: cep,
          id_logradouro: logradouro,
          id_localidade: localidade,
          id_bairro: bairro,
          id_estado: uf,
          id_complemento: complemento,
        }, 'modified')
        console.log(create, ' cadastro')
      })

      setUpModal(true)
      setLoading(!loading)
      setTimeout(() => {
        setUpModal(false);
        setLoading(false)
      }, 2100);
    }

    catch (error) {
      console.log(error, 'ERRO')
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={false} barStyle={'dark-content'}/>
      <View style={styles.body}>
        <View style={{ top: "6%", }}>
          <TextInput
            placeholder='Digite o cep'
            value={searchCep}
            onChangeText={(text) => setSearchCep(text)}
            style={styles.Input}
          />
          <TouchableOpacity style={styles.Icon} onPress={getCep}>
            <AntDesign name="search1" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.txtNames}>
          Cep
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={cep}
            onChangeText={(cep) => setCep(cep)}
            placeholder='Cep'
            style={styles.inputForm}
          />
        </View>
        <Text style={styles.txtNames}>
          Logradouro
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={logradouro}
            onChangeText={(logradouro) => setLogradouro(logradouro)}
            placeholder='Logradouro'
            style={styles.inputForm}
          />
        </View>
        <Text style={styles.txtNames}>
          Localidade
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={localidade}
            onChangeText={(localidade) => setLocalidade(localidade)}
            placeholder='Localidade'
            style={styles.inputForm}
          />
        </View>
        <Text style={styles.txtNames}>
          Bairro
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={bairro}
            onChangeText={(bairro) => setBairro(bairro)}
            placeholder='Bairro'
            style={styles.inputForm}
          />
        </View>
        <Text style={styles.txtNames}>
          Estado
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={uf}
            onChangeText={(uf) => setUf(uf)}
            placeholder='Estado'
            style={styles.inputForm}
          />
        </View>
        <Text style={styles.txtNames}>
          Complemento
        </Text>
        <View style={styles.infoContainer}>
          <TextInput
            value={complemento}
            onChangeText={(complemento) => setComplemento(complemento)}
            placeholder='Complemento'
            style={styles.inputForm}
          />
        </View>
        <TouchableOpacity style={styles.btnMapa} onPress={() => SaveCep()}>
          {loading && <ActivityIndicator size={20} color={"#fff"} />}
          <Text style={styles.txtBtn}>
            Salvar
          </Text>
          <MaterialIcons name="save-alt" left={'5%'} size={30} color="#fff" />
        </TouchableOpacity>
        <Modal
          animationType="fade"
          transparent={true}
          visible={upModal}
        >
          <View style={styles.centeredModal} />
          <LottieView
            source={require('../Assets/Svg/check.json')}
            loop
            autoPlay
            size="md"
            bottom={'20%'}
          />
        </Modal>
      </View>
      <View>
      </View>
    </SafeAreaView>

  );
}


export default HomeScreen;