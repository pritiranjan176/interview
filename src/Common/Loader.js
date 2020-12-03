import React, { Component } from 'react'
import { Dimensions, Text, View, ActivityIndicator } from 'react-native'

const { height, width } = Dimensions.get('window')
export default class Loader extends Component {
    render() {
        return (
            <>
                {this.props.isLoading && <View style={{ height: height, width: width, position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>}
            </>
        )
    }
}
