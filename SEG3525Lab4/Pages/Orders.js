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

class Orders extends Component{
  static navigationOptions = {
    title: 'Order',
  };




      render() {
        const {navigate} = this.props.navigation;
          return (
            <View style={styles.container}>

                <View style={{backgroundColor: 'powderblue', flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between', padding: 20}}>
                  <Text style={styles.restaurantTitle}>Items</Text>
                  <Text style={styles.restaurantText}>Prix</Text>
                </View> 

                <View style={{backgroundColor: 'powderblue', flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between', padding: 20}}>
                  <Text style={styles.restaurantTitle}>Tacos</Text>
                  <Text style={styles.restaurantText}>15$</Text>
                </View> 

                <View style={{backgroundColor: 'powderblue', flexDirection: 'row', alignContent: 'space-between', justifyContent: 'space-between', padding: 20}}>
                  <Text style={styles.restaurantTitle}>Total</Text>
                  <Text style={styles.restaurantText}>15$</Text>
                </View> 

                <Button
                    onPress={() => navigate('Payment')}
                    title="Checkout"
                    color="blue"></Button>
            </View>
            
          );
      }
}



export default Orders;