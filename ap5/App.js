/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
//import { TextInput } from 'react-native-paper';
//import { Icon } from 'react-native-vector-icons/MaterialIcons';


const Miguel = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Miguel Sanchez Martinez</Text>
    </View>
  );
};

const Datos = () => {
  return (
    <View>
      <TextInput style = {estilo ? styles.florida : styles.upv} placeholder = "nombre"/>
      <TextInput placeholder="Modulo" />
    </View>
  );
};

//Problema al importar libreria, error.
//const myIcon = <Icon name="list" size={30} color="#900" />;



const InformesBtn = () => {
  return (
    <View>
      <Button title="Informes"/>
        <View>
          {modulos2Dam.map((modulo) => (
            <Text style = {fondoArray ? styles.arrayStyle : styles.arrayStyle2}>
              {modulo.nombre} - {modulo.profesor} - {modulo.horas}
            </Text>
          ))}
        </View>
    </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  textInputStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    placeholderTextColor: 'orange',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    placeholderTextColor: 'white',
  },
  arrayStyle: {
    fontSize: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    placeholderTextColor: 'white',
    backgroundColor: '#F48FB1',
  },
  arrayStyle2: {
    fontSize: 20,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
    placeholderTextColor: 'white',
    backgroundColor: '#F8BBD0',
  },
});

export default App;
