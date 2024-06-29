import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Login from './src/screens/Login';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(async () => {
      setShow(true)
        console.log("BootSplash has been hidden successfully");
    }, 3000);
  
    // Cleanup function remains the same
  }, []);
  
  
  return (
    <>
    {!show?
      <SplashScreen />
     :<Login />
    }
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
