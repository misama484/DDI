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

  return (
    <View style = {styles.container}>
      <Text style = { styles.title }>App para calcular la letra del NIF</Text>
      <Text style = { styles.subtitle }>Introduce el NIF:</Text>
      <TextInput
        value={nif}
        onChangeText={text => setNif(text)}
        keyboardType="numeric"
      />
      <Button style = {styles.button} onPress= {calcularLetra} title="Calcular letra" />
      <Text>La letra del NIF es: {letra}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 5,
  },
  title: {
    fontSize: 10,
    align: 'center',
    margin: 10,
  },
  subtitle: {
    fontSize: 10,
    align: 'center',
    margin: 10,
  },
  buttoon: {
    fontSize: 10,
    align: 'center',
    margin: 10,
  },
});

export default CalculaDni;
