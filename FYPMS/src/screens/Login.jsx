import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
// import UNILOGO from '../assets/images/foregrounds/unilogo.png';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.imageView}>
        <Text>welcome to login</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#e6e6e6',
    minHeight: '100%',
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 300,
    width: 300,
  },
});
