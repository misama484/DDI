/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';


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
      <TextInput  placeholder="Modulo" />
    </View>
  );
};

const InformesBtn = () => {
  return (
    <View>
      <Button title="Informes"/>
    </View>
  );
};

const estilo = 'florida';

const isAdmin = true;

const modulos2Dam = [
  { nombre: 'Nombre', profesor: 'Profesor', horas: 'Horas'},
  { nombre: 'DIN', profesor: 'Manel', horas: 120 },
  { nombre: 'ADA', profesor: 'Juanmi', horas: 120 },
  { nombre: 'PMDM', profesor: 'Fran', horas: 100 },
  { nombre: 'PSP', profesor: 'Fran', horas: 60 },
  { nombre: 'SGE', profesor: 'Belén', horas: 100 },
  { nombre: 'Inglés', profesor: 'Caterina', horas: 40 },
  { nombre: 'EIE', profesor: 'Manuel', horas: 60 },
  ];


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
            <Text style={styles.arrayStyle}>
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
    backgroundColor: 'red',
  },
});

export default App;
