/**
 * PureMoney POS - AccountSettingsPage
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

export default class AccountSettingsPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>
                    Settings
                </Text>
                <Text style={styles.headtitle}>
                    Vendor Information
                </Text>
                <View style={styles.flowRight}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='Vendor name'/>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder='Vendor account'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Mailing address'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email address'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Phone number'/>
                <Text style={styles.headtitle}>
                    Evangelist Information
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='Evangelist account'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Fee payment contract'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Email address'/>
                <TextInput
                    style={styles.textInput}
                    placeholder='Phone number'/>
                <Button
                    onPress={() => {}}
                    style={styles.button}
                    title="Submit" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    description: {
        marginBottom: 10,
        fontSize: 18,
        textAlign: 'center',
        color: '#434343'
    },
    headtitle: {
        marginBottom: 10,
        fontSize: 15,
        textAlign: 'center',
        color: '#434343'
    },
    container: {
        padding: 30,
        marginTop: 40,
        marginBottom: 50,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    textInput: {
        height: 36,
        marginBottom: 10,
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
    image: {
        marginLeft: 280,
        justifyContent: 'flex-end',
        width: 30,
        height: 30,
    },
});
