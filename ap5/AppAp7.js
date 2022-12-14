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
    fontSize: 20,
    fontWeight: 'bold',
    fonctcolor: 'green',
    textAlign: 'center',
    margin: 20,
  },
});

export default AppAp7;
