import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Payment from './Pages/Payment';
import HomePage from './Pages/HomePage';
import Restaurants from './Pages/Restaurants';
import Menus from './Pages/Menus';
import Menus2 from './Pages/Menus2';
import Menus3 from './Pages/Menus3';
import Confirmation from './Pages/Confirmation';
import Home from './components/Home'
import Search from './components/Search'
import Navbar from './components/navbar'

// export function App() {
//   return (
//     <View style={styles.container}>
//       <Navbar/>
//       <Home/>
//       <Text>This works!</Text>
//     </View>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const MainNavigator = createStackNavigator({
  Home: {screen: HomePage},
  Restaurants: {screen: Restaurants},
  Menu: {screen: Menus},
  Menu2: {screen: Menus2},
  Menu3: {screen: Menus3},
  Payment: {screen: Payment},
  // Confirm: {screen: Confirmation},
  
});

const App = createAppContainer(MainNavigator);


export default App;
