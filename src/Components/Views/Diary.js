import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View, TextInput, Dimensions, Button, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import IMGBG from '../../Images/DiaryBg.jpg';

import { diaryTheme } from '../ThemeColor';

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const SIZE = 30;

const mon = {
  "0" : "JAN",
  "1" : "FEB",
  "2" : "MAR",
  "3" : "APR",
  "4" : "MAY",
  "5" : "JUN",
  "6" : "JUL",
  "7" : "AUG",
  "8" : "SEP",
  "9" : "OCT",
  "10" : "NOV",
  "11" : "DEC",
};

export default function Diary(){
  const [text, setText] = useState("");    // will be saving what user wrote in TextInput
  const [mood, setMood] = useState("");
  const [diary, setDiary] = useState({});
  const onChangeText = (payload) => setText(payload);
  const onChangeMood = () => setMood();
  const onPressSubmit = () => setDiary();

  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  return (
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{mon[month]}. {date}</Text>
        </View>

        <View style={styles.diary}>
          <TextInput
            onChangeText={onChangeText}
            returnKeyType="done"

            value={text}
            placeholder={"Write about your day! Word or sentence is good enough for your daily log. Just Write!"}
            multiline={true}
            style={styles.input}/>
        </View>

        <View style={styles.mood}>
          <Text style={styles.moodText}>Select a Mood Sticker!</Text>
          <View style={styles.moodBox}>
            <TouchableOpacity onPress={onChangeMood}>
              <FontAwesome5 name="laugh-squint" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="smile" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="meh" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="frown" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="sad-tear" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="angry" size={SIZE} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome5 name="kiss-wink-heart" size={SIZE} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.submit}>
          <TouchableOpacity onPress={onPressSubmit} style={styles.submitPress}>
            <Text style={styles.submitText}>Save</Text>
          </TouchableOpacity>
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
    marginLeft: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    //backgroundColor: "tomato",
  },
  dateText: {
    fontSize: 28,
    fontWeight: "600",
  },

  diary: {
    flex: 7,
    paddingVertical: 5,
    alignItems: 'center',
    borderBottomWidth: 1,
    //backgroundColor: 'orange',
  },
  input: {
    height: "50%",
    backgroundColor: "white",
    opacity: 0.85,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 20,
    borderRadius: 20,
    fontSize: 18,
  },

  mood: {
    flex: 2,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: diaryTheme.moodBg,
    opacity: 0.8,
  },
  moodText: {
    fontSize: 28,
    fontWeight: "600",
  },
  moodBox: {
    flexDirection: "row",
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "space-between",
  },

  submit: {
    flex: 1.3,
    paddingRight: 10,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  submitPress: {
    width: "25%",
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: diaryTheme.diarySubmit,
  },
  submitText: {
    fontSize: 22,
    fontWeight: "500",
  },

});