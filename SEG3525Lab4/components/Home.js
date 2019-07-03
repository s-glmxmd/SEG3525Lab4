import React from 'react'
import {StyleSheet, Text, View} from 'react-native'



export default class About extends React.Component{
render() {
    return(
        <View style={styles.view}>
            <Text style={styles.title}>À propos de l'app</Text>
            <Text >Ici se trouve le contenu de la page About</Text>
            <Text >Une deuxième ligne</Text>
            <Text >Bon la dernière</Text>
        </View>
    );
}

}

const styles = StyleSheet.create({
    view:{
        flex: 1,
        margin: 20
    },
    title:{
        fontSize: 22,
        marginBottom: 20
    },
    container : {
        
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

})