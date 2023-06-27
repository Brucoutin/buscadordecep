import React, { useState } from 'react';
import {Text, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import realm, {getEndereco, } from '../Database/realm';
import CepController from '../Database/Controller/CepController';
import styles from '../Styles/SalvosStyles';
import LottieView from "lottie-react-native";

function Salvos() {
  const navigation = useNavigation();
  const [openModal, setOpenModal] = useState(false)
  const [lista, setLista] = useState(false)
  const enderecos = getEndereco();
  console.log (enderecos,' aqui')

  function deletar_id(id_cep) {
    console.log(id_cep)
    const del_id = CepController.getEndereco(`"${id_cep}"`)
    realm.write(() => {
      realm.delete(del_id);
      console.log(del_id)
    })
    setOpenModal(true)
    setTimeout(() => {
      setOpenModal(false);
    }, 1000);
  }
  

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.propertyListContainer}
        data={enderecos}
        initialNumToRender={4}
        key={item => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.card}>
              <View style={styles.cardBody}>
                <Text style={styles.textCep}>{item.cep_cep}</Text>
                <Text style={styles.address}>{item.id_logradouro}</Text>
                <Text style={styles.textCard}>{item.id_localidade}</Text>
                <Text style={styles.textCard}>{item.id_estado}</Text>
                <Text style={styles.textCard}>{item.id_bairro}</Text>
                <Text style={styles.textCard}>{item.id_complemento}</Text>
              </View>
              <View style={styles.cardFooter}>
                <TouchableOpacity onPress={() => deletar_id(item.id_cep)}>
                <MaterialCommunityIcons name="trash-can-outline" size={20} color="#00008b" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
        <Modal
            animationType="fade"
            transparent={true}
            visible={openModal}
          >
            <View style={styles.centeredModal} />
            <LottieView
              source={require('../Assets/Svg/loadingSalvos.json')}
              loop
              autoPlay
              size="md" />
          </Modal>
    </View>
  )
}

export default Salvos;