import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import Toolbar from './components/Toolbar';


class Greetings extends Component {
    render(){
        return (
            <View style={{alignItems: 'flex-start'}}>
                <Text>Hello {this.props.name}</Text>
            </View>
        );
    }
}



export default class HelloWorldApp extends Component {
  render() {
    return (

        <View style={{ flex: 1, fontSize: 30, justifyContent: "flex-start", alignItems: "flex-start" }}>
            <Toolbar text='BUCC App'/>
            <Greetings name='President'/>
            <Greetings name='Vice President'/>
            <Greetings name='Director'/>
        </View>
    );
  }
}
