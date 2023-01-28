import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button } from 'react-native';




const Calculadora = () => {


    this.state = {
      peso: "",
      altura: "",
      imc: "",
      mensaje: "",
      estiloMensaje:""
  };

    const [peso, setPeso] = useState();
    const [altura, setAltura] = useState();
    const [imc, setImc] = useState();
    const [mensaje, setMensaje] = useState();

    const CalcularIMC = () => {
      const calculo = peso / (altura * altura);
      const imc = calculo.toFixed(2);     
      setImc(imc);

      if(imc < 18.5){
        this.mensaje = 'Peso insuficiente';
      }
      else if (imc < 25){
        this.mensaje = 'Normopeso';
      }
      else if (imc < 27){
        this.mensaje = 'Sobrepeso grado I';
      }
      else if (imc < 30) {
        this.mensaje = 'Sobrepeso grado II (preobesidad)';
      }
      else if (imc < 35) {
        this.mensaje = 'Obesidad de tipo I';
      }
      else if (imc < 40) {
        this.mensaje = 'Obesidad de tipo II';
      }
      else if (imc < 50) {
        this.mensaje = 'Obesidad de tipo III (morbida)';
      }
      else if (imc > 50) {
        this.mensaje = 'Obesidad de tipo IV (extrema)';
      }


      if(imc < 27){
        this.estiloMensaje = 1;
      }
      else if(imc < 39){
        this.estiloMensaje = 2;
      }
      else if(imc >= 40){
        this.estiloMensaje = 3;
      }
      //setAltura("");
      //setPeso("");


    };

    const BorrarDatos = () => {
      setImc("");
      setAltura("");
      setPeso("");
      this.mensaje = "";
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
          placeholder="Peso en Kg"          
          />     
        <Text style={styles.titleDatos}>Altura</Text>
        <TextInput 
          style={styles.inputDatos} 
          keyboardType="numeric"
          onChangeText={(text) => setAltura(text)}
          value= {altura}
          placeholder="Altura en metros"         
          />
        <View style={styles.cuadroResultados}>
          <View style={styles.button}>
            <Button style={styles.button} color="blue" title="Calcular" onPress={CalcularIMC}/>
          </View>
          <View style={styles.button}>
            <Button style={styles.button} color="red" title="Borrar" onPress={BorrarDatos}/>
          </View>
            <Text style={styles.mensaje}>Indice IMC: {imc}</Text>
            <Text style={this.estiloMensaje === 1 ? styles.mensaje1 : (this.estiloMensaje === 2 ? styles.mensaje2 : styles.mensaje3)}>{this.mensaje}</Text>
        </View> 
        
    </View> 
    
    );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "purple",
  },
  cuadroDatos:{
    backgroundColor: "white",
    marginTop: 5,
    margin:20,
    height: 450,
    borderRadius: 25,
    borderWidth: 1,
  },
  titleCuadroDatos:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    margin: 10,
    color: "black",
    textShadowColor: 'grey', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
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
  cuadroResultados:{
    marginTop: 5,
    margin:12,
  },
  button:{    
    margin: 10,  
  },
  mensaje:{
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'grey', 
    textShadowOffset: { width: 0.5, height: 0.5 }, 
    textShadowRadius: 1,
  },
  mensaje1:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'green',
  },
  mensaje2:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  mensaje3:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },


});

export default Calculadora;