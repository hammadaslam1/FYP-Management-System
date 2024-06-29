import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import UNILOGO from '../assets/images/foregrounds/unilogo.png';

const SplashScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.main}>
      <View style={styles.imageView}>
        <Image source={UNILOGO} style={styles.image} />
        <Text style={styles.title}>FYP Management System</Text>
      </View>
    </ScrollView>
  );
};

export default SplashScreen;

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
  title:{
    fontWeight:'700',
    fontSize: 28,
    color: '#08422D'
  }
});
