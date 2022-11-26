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
    </View>
  );
};

let nombre = 'upv';
let estilo = true;
if (nombre === 'florida'){ estilo = true; } else { estilo = false; }


const isAdmin = true;

const modulos2Dam = [
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];

  //solo cambia el color del bloque entero, no caba el ded las lineas pares
let fondoArray = true;
if (modulos2Dam.length % 2 === 0){ fondoArray = true; } else { fondoArray = false; }

class App extends Component {
  render() {
    return (
      <>
        <View>
          {Miguel()}
        </View>
        <View>
          {Datos()}
        </View>
        <View>
          {isAdmin && InformesBtn()}
        </View>
        <View>
          {modulos2Dam.map((modulo) => (
            <Text style = {fondoArray ? styles.arrayStyle : styles.arrayStyle2}>
              {modulo.nombre} - {modulo.profesor} - {modulo.horas}
            </Text>
          ))}
        </View>
      </>
    );
  }
}

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
