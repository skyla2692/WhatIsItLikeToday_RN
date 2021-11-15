import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import IMGBG from '../../Images/DiaryBg.jpg';

export default function Diary(){
  return (
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <View style={styles.date}>
          <Text>Date</Text>
        </View>
        <View style={styles.diary}>
          <Text>Daily Log</Text>
        </View>
        <View style={styles.mood}>
          <Text>Mood Sticker</Text>
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

  diary: {
    flex: 8,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    //backgroundColor: 'orange',
  },

  mood: {
    flex: 2.3,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: "teal",
  },

});