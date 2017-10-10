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
    View,
    ActivityIndicator,
    Alert,
    ListView,
    TouchableOpacity,
    Platform,
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

    return 'https://ropsten.etherscan.io/api?' + querystring;
}

function convertToETH(val)
{
  var result = parseInt(val) / 1000000000000000000;
  return result;
}

function millisecondsToStr(ms) {
  var x = ms / 1000;
  var seconds = Math.round(x % 60);
  x = x / 60;
  minutes = Math.round(x % 60);
  x = x / 60;
  hours = Math.round(x % 24);
  x = x / 24;
  days = Math.round(x);
  var result = days + ' days ' + hours + ' hrs ago';
  return result;
}

export default class HistoryPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
      };
    }

    componentDidMount() {
      console.log('component mounted!');
      const query = urlForQueryAndPage('address', vendorAddress);
      console.log('query run: ' + query);
      fetch(query)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('from API: ' + responseJson);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.result),
        }, function() {
          // do something with new state
        });
      })
      .catch(function(error) {
        console.log('error encountered: ' + error);
      });
    }

    ListViewItemSeparator = () => {
      return (
        <View
          style={{
            height: .5,
            width: "100%",
            backgroundColor: "#000",
          }}
        />
      );
    }

    GetItem (item) {
      Alert.alert(convertToETH(item) + ' ETH');
    }

    render() {
      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      return (
        <View style={styles.mainContainer}>
          <View style={styles.container}>
            <Text style={styles.description}>
                Transaction History
            </Text>
          </View>
          <ListView
            dataSource={this.state.dataSource}
            renderSeparator= {this.ListViewItemSeparator}
            renderRow={(rowData) =>
               <View style={{flex:1, flexDirection: 'column'}} >
                 <TouchableOpacity onPress={this.GetItem.bind(this, rowData.value)}>
                   <Text style={styles.textHilite} >IN</Text>
                   <Text style={styles.textHilite} >{'Amount: ' + convertToETH(rowData.value)} ETH</Text>
                   <Text style={styles.textViewContainer} >{'From:' + rowData.from}</Text>
                   <Text style={styles.textViewContainer} >{'To: ' + rowData.to}</Text>
                   <Text style={styles.textViewContainer} >{'Age: ' + rowData.timeStamp}</Text>
                   <Text style={styles.textViewContainer} >{'Block: ' + rowData.blockNumber}</Text>
                 </TouchableOpacity>
               </View>
            }
          />
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
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: "#434343",
    },
    mainContainer :{
      justifyContent: 'center',
      flex:1,
      paddingTop: (Platform.OS === 'ios') ? 30 : 0,
      backgroundColor: '#fff',
      padding: 2,
    },
    textViewContainer: {
     textAlignVertical: 'center',
     padding: 2,
     fontSize: 13,
     color: '#434343',
   },
   container: {
     marginTop: 40,
     alignItems: 'center',
   },
   textHilite: {
     color: 'green',
     textAlignVertical: 'center',
     padding: 2, fontSize: 13,
   }
});
