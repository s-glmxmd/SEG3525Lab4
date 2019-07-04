import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
import Payment from './Pages/Payment';
=======
import Home from './components/Home'
import Search from './components/Search'
import Navbar from './components/navbar'
>>>>>>> c011d5a120e6641d413edbd29055a7de74c7385b

export function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <Home/>
      <Text>This works!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

<<<<<<< HEAD

export default Payment;
=======
>>>>>>> c011d5a120e6641d413edbd29055a7de74c7385b
