import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Diary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Daily Log</Text>
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