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
  NavigatorIOS,
  TabBarIOS,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
               tintColor="#FFFFFF"
               barTintColor="#48BBEC">
                <Icon.TabBarItem
                    title='Payments'
                    selected={this.state.selectedTab === 'Payments'}
                    iconName="ios-keypad"
                    selectedIconName="ios-keypad-outline"
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
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title='Account Balance'
                    selected={this.state.selectedTab === 'Account Balance'}
                    iconName="ios-calculator"
                    selectedIconName="ios-calculator-outline"
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
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title='Settings'
                    selected={this.state.selectedTab === 'Settings'}
                    iconName="ios-cog"
                    selectedIconName="ios-cog-outline"
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
                </Icon.TabBarItem>
                <Icon.TabBarItem
                    title='History'
                    selected={this.state.selectedTab === 'History'}
                    iconName="ios-archive"
                    selectedIconName="ios-archive-outline"
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
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#434343',
    },
    tabBar:  {
        flex: 1,
    },
});

AppRegistry.registerComponent('POS', () => POS);
