/**
 * PureMoney POS - HistoryPage
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableHighlight,
    Image,
} from 'react-native';

var vendorAddress = '0xaac6e508b9e87d878624f7932d0d5a0977b11fc3';
var apiKey = 'BT7RSI4PJYFZAA145SZBH1HMH7J2WM5PUJ';

function urlForQueryAndPage(key, value, pageNumber) {
    const data = {
      module: 'account',
      action: 'txlist',
      sort: 'desc',
      address: {vendorAddress},
      apikey: {apiKey},
      page: pageNumber,
    };
    data[key] = value;

    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');

    return 'http://ropsten.etherscan.io/api?' + querystring;
}

export default class HistoryPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        searchString: 'london',
        isLoading: false,
        message: '',
      };
    }

    _onPress = () => {
      this.props.onPressItem(this.props.index);
    }

    _onPressItem = (index) => {
      console.log("Pressed row: " + index);
    };

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.description}>
                  Transaction History
              </Text>
              <TouchableHighlight
              onPress={this._onPress}
              underlayColor='#dddddd'>
              <View>
                <View style={styles.rowContainer}>
                  <View style={styles.textContainer}>
                    <Text style={styles.account}>IN</Text>
                    <View style={styles.flowRight}>
                      <Text style={styles.price}>&#x39E; 194.056 ETH</Text>
                      <Text style={styles.fiat}>($ 56,926.477 USD)</Text>
                    </View>
                    <Text style={styles.account}
                      numberOfLines={1}>From: 0xA8E2f51F33ABF0542CFDa5D0aD48fE9507Da88B0</Text>
                    <Text style={styles.account}>Age: 7 hrs 4 mins ago</Text>
                  </View>
                </View>
                <View style={styles.separator}/>
              </View>
            </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#434343'
    },
    rowItem: {
        marginBottom: 10,
        fontSize: 14,
        marginRight: 20,
        textAlign: 'left',
        color: '#434343'
    },
    rowDirection: {
        marginBottom: 10,
        marginRight: 20,
        fontSize: 14,
        textAlign: 'left',
        color: '#434343'
    },
    container: {
        padding: 30,
        marginTop: 40,
        marginBottom: 50,
        alignItems: 'center'
    },
    image: {
        marginLeft: 280,
        justifyContent: 'flex-end',
        width: 30,
        height: 30,
    },
    account: {
      fontSize: 12,
      color: '#656565',
    },
    fiat: {
      fontSize: 10,
      color: '#656565',
      marginLeft: 10,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginTop: 10,
        marginBottom: 10,
    },
    price: {
      fontSize: 13,
      fontWeight: 'bold',
      color: '#48BBEC'
    },
    textContainer: {
      flex: 1
    },
    rowContainer: {
      padding: 1,
      alignSelf: 'stretch',
    },
    separator: {
      height: 1,
      backgroundColor: '#dddddd',
      alignSelf: 'stretch',
    },
});
