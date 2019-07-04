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
} from 'react-native';
import { NavigationBar } from 'navigationbar-react-native';


const ComponentLeft = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-start'}} >
       <TouchableOpacity style={ {justifyContent:'center', flexDirection: 'row'}}>
        <Text style={{ color: 'white', marginLeft: 20, }}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};
 
const ComponentCenter = () => {
  return(
    <View style={{ flex: 1, }}>
       <Text style={{color: 'white', alignSelf: 'center' }}>Menu</Text>
    </View>
  );
};
 
const ComponentRight = () => {
  return(
    <View style={{ flex: 1, alignItems: 'flex-end', }}>
      <TouchableOpacity>
        <Text style={{ color: 'white', marginRight: 20, }}> Cart </Text>
      </TouchableOpacity>
    </View>
  );
};


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

class Menus3 extends Component{
  static navigationOptions = {
    title: 'Menus',
  };




      render() {
        const {navigate} = this.props.navigation;
          return (
            <View style={styles.container}>
              {/* <NavigationBar 
                componentLeft     = { () =>  <ComponentLeft />   }
                componentCenter   = { () =>  <ComponentCenter /> }
                componentRight    = { () =>  <ComponentRight />  }
                navigationBarStyle= {{ backgroundColor: '#215e79' }}
                statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
                /> */}
                <Text style={styles.restaurantTitle}>Greek'n eggs</Text>
                <View style={{height: '20%', backgroundColor: 'powderblue'}}>
                    <Text style={styles.restaurantTitle}>Sandwiche Tzatziki </Text>
                    <Text style={styles.restaurantText}>Prix: $6.45</Text>
                    <Button
                    //onPress={onPressLearnMore}
                    title="Add to Cart"
                    color="blue"></Button>
                </View> 

                <View style={{height: '20%', backgroundColor: 'steelblue'}}>
                    <Text style={styles.restaurantTitle}>Doner et Salade </Text>
                    <Text style={styles.restaurantText}>Prix: $6.76   </Text>
                    <Button
                    //onPress={onPressLearnMore}
                    title="Add to Cart"
                    color="blue"></Button>
                </View> 
                <Button
                    onPress={() => navigate('Payment')}
                    title="View Cart"
                    color="blue"></Button>
            </View>
            
          );
      }
}



export default Menus3;