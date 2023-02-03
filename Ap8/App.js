import React, { useState } from 'react';
import { View, Text,  StyleSheet, FlatList, Image, ImageBackground } from 'react-native';


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
  

const App = () => {

  const [items, setItems] = useState(marcas);

  const elementoLista = ({item}) => (
    <View >
      <ImageBackground
        source={{uri:item.img}}
        style={styles.elementoLista}
        >
        <View>
          <Text style={styles.texto}>{item.nombre}</Text>
        </View>
      </ImageBackground>
    </View>
  )

  return (
    <FlatList
      data={items}
      renderItem={elementoLista}
      keyExtractor={item => item.nombre}
      style={styles.container}      
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: "center",
    margin: 20,
  },
  elementoLista: {
    height: 150,
    margin: 10,
    backgroundColor: "grey",
    borderWidth: 5,
    borderColor: "black",
    resizeMode: "center",

  },
  texto: {
    fontSize: 30,    
    color: 'white',
    textAlign: 'left',
    borderWidth: 1,
    borderColor: "black",
    margin: 10,
  },  

});

export default App;




