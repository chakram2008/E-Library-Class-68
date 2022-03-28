import React, {Component} from 'react';
import {View, Text, Stylesheet} from 'react-native';

export default class SearchScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Search Screen</Text>
      </View>
    )
  }
}

const styles = Stylesheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5653d4',
  },
  text:{
    color: '#fff',
    fontSize: 30,
  }
})