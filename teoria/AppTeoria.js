import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={styles.contenedor}>
        <View style={styles.seccion1}>
          <Text>Seccion 1</Text>
        </View>
        <View style={styles.seccion2}>
          <Text>Seccion 2</Text>
        </View>
        <View style={styles.seccion3}>
          <Text>Seccion 3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'purple',
    borderWidth: 5,
  },
  seccion1: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'rigth',
  },
  seccion2: {
    flex: 1,
    borderColor: 'blue',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'rigth',
  },
  seccion3: {
    flex: 1,
    borderColor: 'green',
    borderWidth: 3,
    fontSize: 12,
    fontWeight: '600',
    margin: 4,
    padding: 12,
    textAlign: 'rigth',
  },
});

export default App;
