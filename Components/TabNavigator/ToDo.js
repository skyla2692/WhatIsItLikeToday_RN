import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default class ToDo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.date}>
          <Text>Date</Text>
        </View>
        <View style={styles.toDo}>
          <Text>To Do Lists</Text>
        </View>
        <View style={styles.percentage}>
          <Text>Percentage</Text>
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

  toDo: {
    flex: 9.5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },

  percentage: {
    flex: 0.8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "teal",
  },
});