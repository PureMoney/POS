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

class POS extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'Payments',
            message: '',
        };
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
