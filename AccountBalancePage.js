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
    TextInput,
    View,
    Button,
    Image,
} from 'react-native';

var vendorAddress = '0xaac6e508b9e87d878624f7932d0d5a0977b11fc3';

export default class AccountBalancePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ethValue: '194.056',
        fiatValue: '56,926.477',
      };
    }

    //const query = urlForQueryAndPage('place_name', this.state.searchString);
    //this._executeQuery(query);

    _executeQuery = (query) => {
      console.log(query);
      this.setState({ isLoading: true });
      fetch(query)
        .then(response => response.json())
        .then(json => this._handleResponse(json.response))
        .catch(error =>
          this.setState({
              isLoading: false,
              message: 'Something bad happened ' + error
          })
        );
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
    payProcItem: {
        marginBottom: 10,
        fontSize: 15,
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
    image: {
        marginLeft: 280,
        justifyContent: 'flex-end',
        width: 30,
        height: 30,
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
});
