import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default class HabitTracker extends Component {
  render() {
    return(
      <View style={styles.container}>
        <View style={styles.calendar}>
          <Text>Calendar</Text>
        </View>
        <View style={styles.toDoList}>
          <Text>Montly To Do List</Text>
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

  calendar: {
    flex: 6,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "tomato",
  },

  toDoList: {
    flex: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
  },
});