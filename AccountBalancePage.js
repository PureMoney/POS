/**
 * PureMoney POS - AccountBalancePage
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

var vendorAddress = '0xaac6e508b9e87d878624f7932d0d5a0977b11fc3';
var apiKey = 'BT7RSI4PJYFZAA145SZBH1HMH7J2WM5PUJ';

function urlForQueryAndPage(key, value) {
    const data = {
      module: 'account',
      action: 'balance',
      tag: 'latest',
      apikey: {apiKey},
    };
    data[key] = value;

    const querystring = Object.keys(data)
      .map(key => key + '=' + encodeURIComponent(data[key]))
      .join('&');

    return 'https://ropsten.etherscan.io/api?' + querystring;
}

function convertToETH(val)
{
  var result = parseInt(val) / 1000000000000000000;
  return result;
}

export default class AccountBalancePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ethValue: '0',
        fiatValue: '500.00',
      };
    }

    componentDidMount() {
      console.log('component mounted!');
      const query = urlForQueryAndPage('address', vendorAddress);
      console.log('query run: ' + query);
      fetch(query)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('from API: ' + responseJson.result);
        this.setState({
          ethValue: convertToETH(responseJson.result),
        }, function() {
          // do something with new state
        });
      })
      .catch(function(error) {
        console.log('error encountered: ' + error);
      });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Account Balance
                </Text>
                <Text style={styles.textItem}>
                    {vendorAddress}
                </Text>
                <Text style={styles.moneyItem}>
                    &#x39E; {this.state.ethValue} ETH
                </Text>
                <Text style={styles.fiatItem}>
                    $ {this.state.fiatValue} USD
                </Text>
              </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 40,
        fontSize: 18,
        textAlign: 'left',
        color: '#434343'
    },
    textItem: {
        marginBottom: 10,
        fontSize: 12,
        textAlign: 'left',
        color: '#434343'
    },
    moneyItem: {
        marginTop: 30,
        fontSize: 30,
        textAlign: 'left',
        color: 'teal',
    },
    fiatItem: {
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'left',
        color: '#434343',
    },
    container: {
        padding: 30,
        marginTop: 40,
        marginBottom: 50,
        alignItems: 'center'
    },
});
