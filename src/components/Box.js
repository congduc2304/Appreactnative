import React, { Component } from 'react'
import { Text, View, TouchableOpacity  } from 'react-native'

export default class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0
        }
    }
    inCrease = () => {
        this.setState({count : this.state.count + 1})
        console.log(this.state.count)
    }
    render() {
        return (
            <View
                style={{
                    flex : 1,
                    justifyContent: 'center',
                }}>
                <Text
                    style={{
                        alignSelf: 'center',
                        fontSize: 20,
                        color: 'red'
                    }}>
                    Count : 0
                }}>
                    Count : {this.state.count}
                </Text>
                <View 
                    style={{
                        marginTop : 20,
                        flexDirection : 'row' , 
                        justifyContent : 'space-evenly',
                    }}>
                    <TouchableOpacity
                        onPress={() => this.inCrease()}
                        style={{backgroundColor : 'green' , padding : 15}}
                    >
                        <Text style={{color : 'black' , fontWeight : 'bold'}}>InCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : 'red' , padding : 15}}
                    >
                        <Text style={{color : 'black' , fontWeight : 'bold'}}>DeCrease</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{backgroundColor : 'yellow' , padding : 15}}
                    >
                        <Text style={{color : 'black' , fontWeight : 'bold'}}>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
