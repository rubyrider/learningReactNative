import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

function About({navigation}: {navigation: any}): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Us</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default About;
