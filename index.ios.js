/**
 * PureMoney POS
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import Payments from './PaymentsPage';
import AccountBalance from './AccountBalancePage';
import AccountSettings from './AccountSettingsPage';
import History from './HistoryPage';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  NavigatorIOS,
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

    return 'http://ropsten.etherscan.io/api?' + querystring;
}

class POS extends Component {
    constructor(props) {
        super();
        this.state = {
            selectedTab: 'Payments',
        };
    }

    _onAcctBalanceTabPressed = () => {
      const query = urlForQueryAndPage('address', vendorAddress);
      this._executeQuery(query);
    }

    _executeQuery = (query) => {
      console.log(query);
      //this.setState({ isLoading: true });
      fetch(query)
        .then(response => response.json())
        .then(json => this._handleResponse(json.response))
        .catch(error =>
          this.setState({
              //isLoading: false,
              message: 'Something bad happened ' + error
          })
        );
    }

    render() {
        return (
            <TabBarIOS style={styles.tabBar}
               tintColor="white"
               barTintColor="#48BBEC">
                <TabBarIOS.Item
                    title='Payments'
                    selected={this.state.selectedTab === 'Payments'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'Payments',
                      });
                    }} >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={
                            {
                                title: 'PureMoney POS',
                                component: Payments,
                            }
                        } />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='Account Balance'
                    selected={this.state.selectedTab === 'Account Balance'}
                    onPress={() => {
                      this._onAcctBalanceTabPressed,
                      this.setState({
                        selectedTab: 'Account Balance',
                      });
                    }} >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={
                            {
                                title: 'PureMoney POS',
                                component: AccountBalance,
                            }
                        } />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='Settings'
                    selected={this.state.selectedTab === 'Settings'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'Settings',
                      });
                    }} >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={
                            {
                                title: 'PureMoney POS',
                                component: AccountSettings,
                            }
                        } />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='History'
                    selected={this.state.selectedTab === 'History'}
                    onPress={() => {
                      this.setState({
                        selectedTab: 'History',
                      });
                    }} >
                    <NavigatorIOS
                        style={styles.container}
                        initialRoute={
                            {
                                title: 'PureMoney POS',
                                component: History,
                            }
                        } />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar:  {
        flex: 1,
    },
});

AppRegistry.registerComponent('POS', () => POS);
