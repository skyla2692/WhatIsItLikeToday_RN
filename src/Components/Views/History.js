import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import IMGBG from '../../Images/HistoryBg.jpg';

export default function History(){
  return(
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <View style={styles.calendar}>
          <Text>Calendar</Text>
        </View>
        <View style={styles.toDoList}>
          <Text>Montly To Do List</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },

  image: {
    flex: 1,
    justifyContent: "center",
  },

  calendar: {
    flex: 6,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    //backgroundColor: "tomato",
  },

  toDoList: {
    flex: 5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'orange',
  },
});