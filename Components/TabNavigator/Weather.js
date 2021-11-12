import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Weather extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.city}>
          <Text>City</Text>
        </View>

        <View style={styles.weather}>
          <View style={styles.daily}>
            <Text>Daily</Text>
          </View>
          <View style={styles.hourly}>
            <Text>Hourly</Text>
          </View>
          <View style={styles.weekly}>
            <Text>Weekly</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  city: {
    flex: 0.7,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "tomato",
  },

  weather: {
    flex: 10.3,
  },
  daily: {
    flex: 3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "orange"
  },
  hourly: {
    flex: 1.5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "teal",
  },
  weekly: {
    flex: 5.5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "violet",
  },

});