import React from 'react'
import {TextInput, View, StyleSheet, Text} from 'react-native'



export default class Search extends React.Component{
constructor(props){
    super(props)
    this.state = {
        city : 'Ottawa'
    }
}

setCity(text){
    this.setState({
        city: text
    })
}

render() {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>Rechercher la ville</Text>
        <TextInput style= {styles.textInput}
        value= {this.state.city}
        onChangeText = {(text) => this.setCity(text)}
        />
        </View>
    );
}

}

const styles = StyleSheet.create({
    textInput:{
        height:40, borderColor:'gray', borderWidth:1
    },
    title:{
        fontSize: 22,
        marginBottom: 20
    },
    container : {
        marginVertical:40
    },

})
