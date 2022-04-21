import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.goldenSquare}>
        <Text style={styles.text}>Quadrado 1</Text>
      </View>
      <View style={styles.blueSquare}>
        <Text style={styles.text}>Quadrado 2</Text>
      </View>
      <View style={styles.roxoSquare}>
        <Text style={styles.text}>Quadrado 3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
  },
  goldenSquare: {
    backgroundColor: '#EEE8AA',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  blueSquare: {
    backgroundColor: '#B0E0E6',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
  roxoSquare: {
    backgroundColor: '#D8BFD8',
    flex: 1,
    aspectRatio: 1,
    marginRight: 10,
  },
});