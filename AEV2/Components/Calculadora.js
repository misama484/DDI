import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button } from 'react-native';



const Calculadora = () => {


    this.state = {
      peso: "",
      altura: "",
      imc: "",
      mensaje: "",
  };

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();
    const [mensaje, setMensaje] = useState();

    const CalcularIMC = () => {
      const imc = peso / (altura * altura);
      setImc(imc.toFixed(2));
      setImc(imc);

      if(imc < 18.5){
        setMensaje('DELGADO')
      }
      else if (imc < 24.9){
        setMensaje('NORMAL')
      }
      else if (imc < 29.9){
        setMensaje('SOBREPESO')
      }
      else if (imc < 39.9) {
        setMensaje('OBESIDAD')
      }
      else if (imc > 39.9) {
        setMensaje('OBESIDAD GRAVE')
      }

      setAltura("");
      setPeso("");


    };

    const BorrarDatos = () => {
      setImc("");
      setAltura("");
      setPeso("");
    }


  return (
    
    <View style={styles.cuadroDatos}>
        <Text style={styles.titleCuadroDatos}>Datos</Text>        
        <Text style={styles.titleDatos}>Peso</Text>
        <TextInput 
          style={styles.inputDatos}
          keyboardType="numeric"
          onChangeText={(text) => setPeso(text)}
          value= {peso}
          //placeholder="Peso en Kg"
          placeholder="40"
          />     
        <Text style={styles.titleDatos}>Altura</Text>
        <TextInput 
          style={styles.inputDatos} 
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          value= {altura}
          //placeholder="Altura en metros"
          placeholder="1.70"
          />
        <View styles={styles.button}>
            <Button style={styles.button} color="blue" title="Calcular" onPress={CalcularIMC}/>
            <Button style={styles.button} color="red" title="Borrar" onPress={BorrarDatos}/>
            <Text style={styles.mensaje}>imc de {imc}</Text>
            <Text style={styles.mensaje}>{this.mensaje}</Text>
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
    borderRadius: 25,
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
    marginLeft: 10,
  },
  button:{    
    margin: 10,  
  },
  mensaje:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },

});

export default Calculadora;