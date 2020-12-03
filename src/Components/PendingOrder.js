import React, { Component } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import PendingOrderItems from "./PendingOrderItems"
import Loader from "../Common/Loader"
import axios from "axios"

export default class PendingOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            orderData:[]
        };
    }
    componentDidMount() {
        this.getData()
    }

    getData = async () => {
        this.setState({
            isLoading: true
        })
        axios.post('https://test.mioamoreshop.com/rest/V1/integration/admin/token', {
            "username": "warehouse", "password": "admin@123"
        })
            .then((response) => {
                let token = response.data
                const options = {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                }
                axios.post(' https://test.mioamoreshop.com/rest/V1/customapi/pending', {},options)
                    .then((response) => {
                        let data = JSON.parse(response.data)
                        console.log("recived data",data.data.order_data)
                        this.setState({
                            isLoading: false,
                            orderData:data.data.order_data
                        })
                    })
                    .catch((error) => {
                        alert(error)
                        this.setState({
                            isLoading: false
                        })
                    })
            })
            .catch((error) => {
                alert(error)
                this.setState({
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
                    <FlatList
                        style={{ marginHorizontal: 16 }}
                        showsVerticalScrollIndicator={false}
                        data={this.state.orderData}
                        renderItem={({ item }) => (
                            <PendingOrderItems item={item} />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        ListFooterComponent={<View style={{ height: 50 }}></View>}
                    />
                </View>
                <Loader isLoading={this.state.isLoading}></Loader>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    bottomLeftSingleViewStyle: {
        flex: 1, justifyContent: 'center', alignItems: 'flex-end'
    },
    bottomLeftHeaderStyle: {
        fontSize: 12, fontWeight: 'bold'
    },
    bottomLeftDescStyle: {
        fontSize: 9, fontWeight: 'normal'
    },
    headingTextStyle: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});