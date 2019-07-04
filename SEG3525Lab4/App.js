import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Payment from './Pages/Payment';
import Home from './components/Home'
import Search from './components/Search'
import Navbar from './components/navbar'

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

export default Payment;
