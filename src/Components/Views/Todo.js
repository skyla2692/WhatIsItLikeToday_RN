import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import IMGBG from '../../Images/ToDoBg.jpg';

export default function ToDo(){
  return (
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <View style={styles.date}>
          <Text>Date</Text>
        </View>
        <View style={styles.toDo}>
          <Text>To Do Lists</Text>
        </View>
        <View style={styles.percentage}>
          <Text>Percentage</Text>
        </View>
      </ImageBackground>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  date: {
    flex: 0.7,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    //backgroundColor: "tomato",
  },

  toDo: {
    flex: 9.5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    //backgroundColor: 'orange',
  },

  percentage: {
    flex: 0.8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "teal",
  },
});