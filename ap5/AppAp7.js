import React from 'react';
import { View, Text,  StyleSheet } from 'react-native';
import CalculaDni from './Components/CalculaDni';


const AppAp7 = () => {


  return (
    <View>
      <Text style = {styles.title}>Calculador Letra NIF</Text>
      <CalculaDni />
    </View>
  );
};


const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    margin: 20,
    marginTop: 100,
  },
});

export default AppAp7;

