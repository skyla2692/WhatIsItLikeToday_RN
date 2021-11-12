import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text>Date</Text>
        </View>
        <View style={styles.diary}>
          <Text>Daily Log</Text>
        </View>
        <View style={styles.mood}>
          <Text>Mood Sticker</Text>
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

  date: {
    flex: 0.7,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "tomato",
  },

  diary: {
    flex: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

  mood: {
    flex: 2.3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "teal",
  },

});