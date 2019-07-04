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
       <Text style={{color: 'white', alignSelf: 'center' }}>Home</Text>
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

class Restaurants extends Component{
    




      render() {
          return (
            <View style={styles.container}>
              <NavigationBar 
                componentLeft     = { () =>  <ComponentLeft />   }
                componentCenter   = { () =>  <ComponentCenter /> }
                componentRight    = { () =>  <ComponentRight />  }
                navigationBarStyle= {{ backgroundColor: '#215e79' }}
                statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
                />
                <View style={{height: 200, backgroundColor: 'powderblue'}}>
                    <Text style={styles.restaurantTitle}>El Locos Tacos</Text>
                    <Text style={styles.restaurantText}>Addresse: 2234 rogers rd. 5S5 S5S Ott. Ont. </Text>
                    <Text style={styles.restaurantText}>Cuisine: Lunch </Text>
                    <Text style={styles.restaurantText}>Prix: $2.34 - $22.22 </Text>
                    <Text style={styles.restaurantText}>Heures: 8:00 - 17:00  </Text>
                </View> 
                <View style={{height: 200, backgroundColor: 'skyblue'}}>
                    <Text style={styles.restaurantTitle}>Snow Scones Bros</Text>
                    <Text style={styles.restaurantText}>Addresse: 232 Middle ave. 7G7 D8D Ott. Ont. </Text>
                    <Text style={styles.restaurantText}>Cuisine: Dinner </Text>
                    <Text style={styles.restaurantText}>Prix: $1.34 - $10.85 </Text>
                    <Text style={styles.restaurantText}>Heures: 8:00 - 17:00 </Text>
                </View> 
                <View style={{height: 200, backgroundColor: 'steelblue'}}>
                    <Text style={styles.restaurantTitle}>Greek'n Eggs</Text>
                    <Text style={styles.restaurantText}>Addresse: 145 Laurier St. 9X9 X9X Ott. Ont. </Text>
                    <Text style={styles.restaurantText}>Cuisine: Breakfast </Text>
                    <Text style={styles.restaurantText}>Prix: $11.34 - $67.87 </Text>
                    <Text style={styles.restaurantText}>Heures: 8:00 - 17:00 </Text>
                </View> 
            </View>
            
          );
      }
}



export default Restaurants;