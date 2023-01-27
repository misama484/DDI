import React from 'react';
import { View, Text,  StyleSheet, FlatList, Image, ImageBackground } from 'react-native';
import ElementoLista from './Components/ElementoLista.js';

const marcas = [
  {nombre: 'Peugeot',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Peugeot_Logo.svg/320px-Peugeot_Logo.svg.png',},
  {nombre: 'Opel',
  img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Opel-Logo_2017.png',},
  {nombre: 'Renault',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Renault_2021_Text.svg/1024px-Renault_2021_Text.svg.png',},
  {nombre: 'Seat',
  img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/SEAT_Logo_from_2017.png',},
  {nombre: 'Fiat',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/FIAT_logo_%282020%29.svg/1280px-FIAT_logo_%282020%29.svg.png',},
  {nombre: 'Volkswagen',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/600px-Volkswagen_logo_2019.svg.png',},
  ];
  

const AppAp8 = () => {

  return (
    <View style={styles.container}>
      <FlatList
        data={marcas}
        keyExtractor={(item) => item.nombre}
        renderItem={({item}) => {
          return (
            <View>
              
              <ImageBackground source={{uri:item.img}} style={styles.image}>
                <Text style = {styles.title}>{item.nombre}</Text>
              </ImageBackground>
            </View>
          );
        }}
        />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
    textAlign: 'center',
    margin: 20,
    marginTop: 100,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 400,
  }
});

export default AppAp8;