import React from 'react';
import { View, Text,  StyleSheet, FlatList } from 'react-native';

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
    <View>
      <Text>Texto de prueba</Text>
      <FlatList
        data={[marcas]}>
        renderItem={({item}) => <Text>{item.nombre}</Text>}

      </FlatList>
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

export default AppAp8;