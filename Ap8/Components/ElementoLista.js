import React from "react";
import { Text, StyleSheet, View, ImageBackground } from "react-native";

const ElementoLista = () => {
      
    return (
      <View>
        <Text style = {styles.title}>Texto de prueba</Text>
        <ImageBackground source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png'}} style={{width:200, height:200}}/>
        </View>
    );
  };

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
    }
})

export default ElementoLista;