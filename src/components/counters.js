import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { increment, decrement } from '../actions/index.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Counters extends Component {
    constructor(props){
        super(props)

    }

    render(){
        return(
            <View style = { styles.mainContainer }>
                <Text style = {{marginBottom: 20, fontWeight: 'bold'}}>{ 'The Redux Approach' }</Text>
                <Text style = { styles.counterNumber }>{ this.props.count }</Text>
                <View style = { styles.buttonContainer }>
                    <TouchableOpacity style = { styles.buttonStyle } 
                    onPress = { ()=> this.props.increment()}>
                        <Text style = {{ color: 'white' }}>Increment +</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style = {[ styles.buttonStyle, { backgroundColor:'red' } ]}
                    onPress = { ()=> this.props.decrement()}>
                        <Text style = {{ color: 'white' }}>Decrement -</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
      count : state.count
    };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({increment, decrement}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    counterNumber: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
    buttonStyle: {
        backgroundColor: 'green',
        borderWidth: 1,
        height: 30,
        width: '25%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center', 
    },
})
