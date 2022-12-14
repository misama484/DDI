import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const images = [
  'https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515023115689-589c33041d3c?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1504214208698-ea1916a2195a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1515814472071-4d632dbc5d4a?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1505058707965-09a4469a87e4?w=125&h=125&fit=crop',
  'https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop',
];

const muestraImagenes = () => {
  return images.map((imagen) => {
    return (
      <View>
        <Image style= {styles.card} source={{uri: imagen}}/>
      </View>
    );
  });
};

//const localImg = require('./images/visualstudio_code-card.png');
//const localImg = require('https://images.unsplash.com/photo-1423012373122-fff0a5d28cc9?w=125&h=125&fit=crop');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Header</Text>
        </View>

        <View style={styles.body}>
        <Text style={styles.headerText}>images</Text>
        <View>{muestraImagenes()}</View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'lightgray',
  },
  header : {
    flex: 1,
    borderColor: 'blue',
  },
  body: {
    flex: 1,
    borderColor: 'red',
  },
  card: {
    flex: 1,
    width: '50',
    height: '50',
  },
});
