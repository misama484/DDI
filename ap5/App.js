/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/MaterialIcons';

const Miguel = nombre => {
  return (
    <View>
      <Text style={styles.textStyle}>{nombre}</Text>
    </View>
  );
};

const Datos = () => {
  return (
    <View style={estilo === 'florida' ? styles.florida : styles.upv} >
      <TextInput
        left={<TextInput.Icon icon="eye" />}
        placeholder="nombre"
      />
      <TextInput placeholder="Modulo" left={<TextInput.Icon icon="eye" />} />
    </View>
  );
};

//Problema al importar libreria, error. --> libreria instalada, OK
//const myIcon = <Icon name="list" size={30} color="#900" />;

const InformesBtn = () => {
  return (
    <View>
      <Button title="Informes" icon="format-list-bulleted"/>
    </View>
  );
};


let estilo = 'upv';


const isAdmin = true;

const modulos2Dam = [
  {nombre: 'DIN', profesor: 'Manel', horas: 120},
  {nombre: 'ADA', profesor: 'Juanmi', horas: 120},
  {nombre: 'PMDM', profesor: 'Fran', horas: 100},
  {nombre: 'PSP', profesor: 'Fran', horas: 60},
  {nombre: 'SGE', profesor: 'Belén', horas: 100},
  {nombre: 'Inglés', profesor: 'Caterina', horas: 40},
  {nombre: 'EIE', profesor: 'Manuel', horas: 60},
];

//solo cambia el color del bloque entero, no caba el ded las lineas pares
let fondoArray = true;


class App extends Component {
  render() {
    return (
      <>
        <View>{Miguel('Miguel Sanchez')}</View>
        <View>{Datos()}</View>
        <View>{isAdmin && InformesBtn()}</View>
        <View>
          {modulos2Dam.map(modulo => (
            <Text style={fondoArray ? styles.arrayStyle : styles.arrayStyle2}>
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
    fontSize: 18,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
    placeholderTextColor: 'orange',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 18,
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
