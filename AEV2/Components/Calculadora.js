import React from "react";
import {Text, View, StyleSheet, Button } from 'react-native';


const Calculadora = () => {
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
    <View style={styles.container}>
        <Button title="Calcular IMC" styles={styles.button}></Button>
    </View>
    );
};


const styles = StyleSheet.create({
    container:{
        margin: 20,
    },
    button:{
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "blue",
        margin: 20,
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

export default Calculadora;