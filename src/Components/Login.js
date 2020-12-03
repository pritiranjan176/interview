import React, { Component } from 'react'
import { Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'
import OTPTextInput from "react-native-otp-textinput"
import auth from '@react-native-firebase/auth';
import Loader from "../Common/Loader"
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mobileNumber: '',
            Otp: '',
            isLoading: false,
            confirm: ""
        }
    }

    onChangeText = (text) => {
        this.setState({
            mobileNumber: text
        }, async() => {
            if (this.state.mobileNumber.length == 10) {
                this.setState({ isLoading: true })
                try{
                    const confirmation = await auth().signInWithPhoneNumber('+91 79785 84398');
                    this.setState({ confirm: confirmation})
                }catch(e){
                    alert(e)
                }finally{
                    this.setState({  isLoading: false })
                }
            }
        })
    }

    onOtpType = (text) => {
        this.setState({
            Otp: text
        })
    }


    async signInWithPhoneNumber() {
        try {
            this.setState({ isLoading: true })
            // await this.state.confirm.confirm(this.state.Otp)
            Actions.push(PendingOrder)
        } catch (error) {
            alert('Invalid code. Please try again.');
        }finally{
            this.setState({ isLoading: false })
        }
    }


    onVerifyButtonClicked = () => {
        if (/^\d{10}$/.test(this.state.mobileNumber)) {
            this.signInWithPhoneNumber(`+91 ${this.state.mobileNumber}`)
        } else {
            alert("Please enter a valid phone number.")
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 0.8 }}></View>
                <View style={{ flex: 1, marginHorizontal: 16 }}>
                    <TextInput
                        placeholder="Mobile Number"
                        style={{ height: 50, borderBottomWidth: 1 }}
                        onChangeText={text => this.onChangeText(text)}
                        value={this.state.mobileNumber}
                        maxLength={10}
                        keyboardType="number-pad"
                    />
                    <OTPTextInput ref={e => (this.otpInput = e)} textInputStyle={{ borderBottomColor: "#000", borderBottomWidth: 1 }}
                        containerStyle={{ height: 50, width: '70%', marginHorizontal: 0 }}
                        handleTextChange={text => this.onOtpType(text)}
                    ></OTPTextInput>
                    <TouchableOpacity
                        onPress={this.onVerifyButtonClicked}
                        style={{ height: 40, justifyContent: "center", alignItems: "center", backgroundColor: "#000", marginTop: 50 }}>
                        <Text style={{ color: "#fff", fontSize: 14, fontWeight: 'bold' }}>Verify</Text>
                    </TouchableOpacity>

                </View>
                <Loader isLoading={this.state.isLoading}></Loader>
            </SafeAreaView>
        )
    }
}
