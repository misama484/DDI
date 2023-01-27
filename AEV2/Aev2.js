import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Calculadora from './Components/Calculadora';


const Aev2 = () => {

  const [peso, setPeso] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora IMC</Text>
      <View style={styles.cuadroDatos}>
        <Text style={styles.titleCuadroDatos}>Datos</Text>        
        <Text style={styles.titleDatos}>Peso</Text>
        <TextInput 
          style={styles.inputDatos} 
          onChangeText={setPeso}
          value= {peso}
          placeholder="Peso"
          />     
        <Text style={styles.titleDatos}>Altura</Text>
        <TextInput 
          style={styles.inputDatos} 
          onChangeText={setPeso}
          value= {peso}
          placeholder="Altura"
          />
        <Calculadora/>  
      </View>
      <Text>Created for 2n DAM</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    margin: 10,
    color: "red",
  }, 
  cuadroDatos:{
    backgroundColor: "white",
    marginTop: 5,
    margin:20,
    height: 400,
  },
  titleCuadroDatos:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    margin: 10,
    color: "black",
  },
  inputDatos:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    
  },
  titleDatos:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue',
  },

});

export default Aev2;




