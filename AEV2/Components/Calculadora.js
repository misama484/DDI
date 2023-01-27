import React, { useState } from 'react';
import {Text, View, StyleSheet, Button, TextInput } from 'react-native';


const Calculadora = () => {
    const [peso, setPeso] = useState();
  return (
    
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
        <View styles={styles.button}>
            <Button title="Calcular IMC" ></Button>
        </View>  
        
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
  button:{    
    margin: 10,    
  },

});

export default Calculadora;