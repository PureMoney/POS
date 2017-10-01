/**
 * PureMoney POS - PaymentsPage
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import QRCode from 'react-native-qrcode';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
} from 'react-native';


var vendorAddress = '0xaac6e508b9e87d878624f7932d0d5a0977b11fc3'; //'0xaac6e508b9e87d878624f7932d0d5a0977b11fc3',

export default class PaymentsPage extends Component {
    constructor(props) {
        super();
        this.state = {
            text: vendorAddress,
            amount: '0',
            denomination: 'ETH',
        };
    }

    render() {
        let qrcodeval = this.state.text + " " + this.state.amount + " " + this.state.denomination;
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Payments
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Amount to collect (ETH)'
                    onChangeText={(amount) => this.setState({amount})}
                    //value={this.state.amount}
                />
                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Vendor contract address'
                        value={this.state.text} />
                </View>
                <QRCode style={styles.qrCode}
                    value={qrcodeval}
                    size={200}
                    bgColor='teal'
                    fgColor='white'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 30,
        fontSize: 18,
        textAlign: 'center',
        color: '#434343'
    },
    container: {
        padding: 30,
        marginTop: 40,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    textInput: {
        height: 36,
        marginTop: 0,
        marginBottom: 15,
        textAlign: 'left',
        alignSelf: 'stretch',
        padding: 4,
        marginRight: 5,
        flexGrow: 1,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    button: {
        color: '#48BBEC',
        borderWidth: 1,
        borderColor: '#48BBEC',
    },
    qrCode: {
        marginTop: 1200,
        justifyContent: 'center',
    },
});
