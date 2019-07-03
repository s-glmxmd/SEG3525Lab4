import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NavigationBar from 'react-native-navbar';

export default function App() {
  return (
    <View style={styles.container}>
      <ComponentWithNavigationBar/>
      <Text>Open up App.js to start working on your app!</Text>
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
  navBar: {
    flex: 0,
    backgroundColor: '#fff3',
    alignItems: 'center',
    justifyContent: 'center',
    top:0,
    maxHeight: 20,
    padding: 10,
    paddingTop: 0,

  },

});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
 
const titleConfig = {
  title: 'Hello, world',
};

function ComponentWithNavigationBar() {
  return (
    <View style={styles.navBar}>
      <NavigationBar
        title={titleConfig}
        rightButton={rightButtonConfig}
      />
    </View>
  );
}
