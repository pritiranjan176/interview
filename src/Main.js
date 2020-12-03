
import React, { Component } from 'react';
import { SafeAreaView, StatusBar } from 'react-native'


import Router from './Router';

const STATUS_BAR_COLOR = "#ffffff"
class Main extends Component {

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: STATUS_BAR_COLOR }}>
                <StatusBar backgroundColor={STATUS_BAR_COLOR} barStyle="dark-content" />
                <Router />
            </SafeAreaView>

        );
    }
}

export default Main;