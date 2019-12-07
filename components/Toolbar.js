import React, {Component } from 'react';
import {Text, Image, View} from 'react-native';

class Toolbar extends Component {
    render(){
        return (
            <View style={{alignItems: 'stretch',
                alignSelf: 'stretch',
            backgroundColor: 'powderblue',
            fontWeight: 'bold'}}>
                <Text style={{fontWeight: 'bold',
                fontSize: 40,
                paddingLeft: 20,
                paddingTop: 10,
                paddingRight: 20,
                paddingBottom: 10,
                }}>{this.props.text}</Text>
            </View>
        );
    }
}

export default Toolbar;