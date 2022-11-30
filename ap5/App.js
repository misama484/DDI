/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
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
        label="Introduce tuas datos"
        left={<TextInput.Icon icon="eye" />}
        placeholder="nombre"
        placeholderTextColor={estilo === 'florida' ? 'white' : 'orange'}
      />
      <TextInput
        label="Introduce tuas datos"
        left={<TextInput.Icon icon="eye" />}
        placeholder="nombre"
        placeholderTextColor = {estilo === 'florida' ? 'white' : 'orange'}
      />
    </View>
  );
};


const InformesBtn = () => {
  return (
    <View>
      <Button mode="contained" icon="format-list-bulleted">INFORMES</Button>
    </View>
  );
};


let estilo = 'florida';


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


const muestraLisa = () => {
  return modulos2Dam.map((modulo, index) => {
    return (
      <View
        key={index}
        //si el index es par, cambia el color de fondo
        style={index % 2 === 0 ? styles.arrayStyle : styles.arrayStyle2}>
        <Text style={styles.textStyle}>{index + 1}</Text>
        <Text style={styles.textStyle}>{modulo.nombre}</Text>
        <Text style={styles.textStyle}>{modulo.profesor}</Text>
        <Text style={styles.textStyle}>{modulo.horas + ' horas'}</Text>
      </View>
    );
  });
};


class App extends Component {
  render() {
    return (
      <>
        <View>{Miguel('Miguel Sanchez')}</View>
        <View>{Datos()}</View>
        <View>{isAdmin && InformesBtn()}</View>
        <View>{muestraLisa()}</View>
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
    fontSize: 12,
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
