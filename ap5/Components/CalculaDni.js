import React, { useState } from 'react';
import { View, TextInput, Text, Button, StyleSheet } from 'react-native';


const CalculaDni = () => {
  const [nif, setNif] = useState('');
  const [letra, setLetra] = useState('');



  const calcularLetra = () => {
    var cadena = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var posicion = nif % 23;
        setLetra(cadena.substring(posicion,posicion + 1));
  };

  const maxNumeros = () => {
    if (nif.length > 8) {
      setLetra('');
    }
  };

  const comprueabNif = () => {
    if (nif.length !== 8) {
      setLetra('');
    }
  };

  return (
    <View style = {styles.container}>
      <Text style = { styles.title }>App para calcular la letra del NIF</Text>
        <View style = {styles.contenedorNif}>
          <TextInput
            value={nif}
            onChangeText={text => setNif(text)}
            keyboardType="numeric"
            placeholder="NIF"
            style={styles.input}
            maxLength={8}
          />
          <Text style={styles.input}>
            {letra}
          </Text>
      </View>
      <Button style={styles.button} onPress={calcularLetra} title="Calcular letra" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 5,
  },
  contenedorNif: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
    color: 'purple',
  },
  input: {
    fontSize: 20,
    align: 'center',
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    textDecorationLine: 'underline',
  },
  button: {
    margin: 10,
    padding: 10,
    color: 'green',
  },
});

export default CalculaDni;
