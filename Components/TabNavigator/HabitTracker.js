import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class HabitTracker extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Habit Tracker</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});