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
import {createStackNavigator, createAppContainer} from 'react-navigation';
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
      {/* <Button
        title="Next"
        onPress={() => navigate('Profile')}
      /> */}
        <Text style={{ color: 'white', marginRight: 20, }}> Next </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'powderblue',
  },
  welcome: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});

class HomePage extends Component{
  static navigationOptions = {
    title: 'Home',
  };




      render() {
        const {navigate} = this.props.navigation;
          return (
            <View style={styles.container}>
              {/* <NavigationBar 
                //componentLeft     = { () =>  <ComponentLeft />   }
                componentCenter   = { () =>  <ComponentCenter /> }
                componentRight    = { () =>  <ComponentRight />  }
                navigationBarStyle= {{ backgroundColor: '#215e79' }}
                statusBarStyle    = {{ barStyle: 'light-content', backgroundColor: '#215e79' }}
                /> */}
              <View style={styles.welcome}>
                <Text>Welcome to Restaurant App!</Text>
              </View>
              <Button
                    onPress={() => navigate('Restaurants')}
                    title="View Restaurants"
                    color="blue">
              </Button>
            </View>
            
          );
      }
}



export default HomePage;