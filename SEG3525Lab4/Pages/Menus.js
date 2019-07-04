import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,Image,
  View, 
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  Button,
  AsyncStorage,
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';

const STORAGE_KEY = 'ASYNC_STORAGE_NAME_EXAMPLE'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantTitle: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  restaurantText: {
    textAlign: 'center',
  },
});

_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('TASKS');
    console.log("something"+value);
    if (value !== null) {
      // We have data!!
      console.log(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};



class Menus extends Component{
  static navigationOptions = {
    title: 'Menus',
  };

  load = async () => {
    try {
      const name = await AsyncStorage.getItem(STORAGE_KEY)

      if (name !== null) {
        this.setState({name})
      }
    } catch (e) {
      console.error('Failed to load name.')
    }
  }

  // save = async (name) => {
  //   try {
  //     await AsyncStorage.setItem(STORAGE_KEY, name)

  //     this.setState({name})
  //   } catch (e) {
  //     console.error('Failed to save name.')
  //   }
  // }

      render() {
        const {navigate} = this.props.navigation;
          return (
            <View style={styles.container}>

                <Text style={styles.restaurantTitle}>El Locos tacos</Text>
                <View style={{height: '20%', backgroundColor: 'powderblue'}}>
                    <Text style={styles.restaurantTitle}>Taco Pizza</Text>
                    <Text style={styles.restaurantText}>Prix: $11.25 </Text>
                    <Button
                    onPress={
                      async (name) => {
                        try {
                          await AsyncStorage.setItem(STORAGE_KEY, name)
                    
                          this.setState({name})
                        } catch (e) {
                          console.error('Failed to save name.')
                        }
                      }
                    }
                    title="Add to Cart"
                    color="blue"></Button>
                </View> 

                <View style={{height: '20%', backgroundColor: 'steelblue'}}>
                    <Text style={styles.restaurantTitle}>Regular Tacos</Text>
                    <Text style={styles.restaurantText}>Prix: $5.25  </Text>
                    <Button
                    //onPress={console.log(console.log(value))}
                    title="Add to Cart"
                    color="blue"></Button>
                </View> 
                <Button
                    onPress={() => navigate('Orders')}
                    title="View Cart"
                    color="blue"></Button>
            </View>
            
          );
      }
}



export default Menus;