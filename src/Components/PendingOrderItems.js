import React, { Component } from 'react';
import { View, Text, StyleSheet , TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class PendingOrderItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    goToMapPage = () =>{
        Actions.push('Map')
    }

    render() {
        const {name,grand_total,increment_id, items, mobile_number, order_date, payment_status,pickup_date ,  pickup_time} = this.props.item
     
        return (
            <TouchableOpacity
            activeOpacity={1}
            onPress={this.goToMapPage}
            >
                <View style={{ height: 40, justifyContent: 'center', alignItems: 'flex-end', padding: 15}}>
                    <Text style={{ fontSize: 7 }}>recieved moments ago.</Text>
                </View>
                <View style={{ minHeight: 150, borderRadius: 20, padding: 15 , backgroundColor:"#ffffff" }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={styles.headingTextStyle}>{name}</Text>
                            <Text style={{fontSize:12, color:'#5E5E5E'}}># {increment_id}</Text>
                        </View>
                        <View style={{ flex: 1, paddingTop: 8 }}>
                            <Text style={styles.bottomLeftHeaderStyle}>{mobile_number}</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingBottom: 8 }}>
                        <View style={{ borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ECFAF7' }}>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#259178', paddingVertical: 12, paddingHorizontal: 15 }}>Rs {parseFloat(grand_total).toFixed(2)}</Text>
                        </View>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={{ flex: 3.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftHeaderStyle}>{pickup_date}</Text>
                                </View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftDescStyle}>PICK UP DATE</Text>
                                </View>
                            </View>
                            <View style={{ height: 20, width: 1, backgroundColor: '#ccc' }}></View>
                            <View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftHeaderStyle}>{pickup_time}</Text>
                                </View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftDescStyle}>PICK UP TIME</Text>
                                </View>
                            </View>
                            <View style={{ height: 20, width: 1, backgroundColor: '#ccc' }}></View>
                            <View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftHeaderStyle}>{items}</Text>
                                </View>
                                <View style={styles.bottomLeftSingleViewStyle}>
                                    <Text style={styles.bottomLeftDescStyle}>ITEMS</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1.7, alignItems: 'flex-end' }}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 'bold' , color:'#57A997'}}>{payment_status}</Text>
                            </View>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={styles.bottomLeftDescStyle}>Payment status</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    bottomLeftSingleViewStyle: {
        flex: 1, justifyContent: 'center', alignItems: 'flex-start'
    },
    bottomLeftHeaderStyle: {
        fontSize: 12, fontWeight: 'bold',
        color:'#323232'
    },
    bottomLeftDescStyle: {
        fontSize: 9, fontWeight: 'normal',
        color:'#aaa'
    },
    headingTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#323232'
    }

});