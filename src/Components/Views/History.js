import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect }from 'react';
import { ImageBackground, StyleSheet, ScrollView, Text, View, Alert, TouchableOpacity, Dimensions } from 'react-native';
import IMGBG from '../../Images/HistoryBg.jpg';
import { historyTheme } from '../ThemeColor';
import { FontAwesome5 } from '@expo/vector-icons';


const { width: SCREEN_WIDTH } = Dimensions.get("window");
const STORAGE_KEY = "@dailyLog";

const moods = {
  "Excited" : "laugh-squint",
  "Good" : "smile",
  "Meh" : "meh",
  "Bad" : "frown",
  "Sad" : "sad-tear",
  "Angry" : "angry",
  "In Love" : "kiss-wink-heart",
};

export default function History(){
  const [dailyLog, setDailyLog] = useState({});

  useEffect(() => {
    loadStorage();
  }, []);

  const loadStorage = async() => {
    try{
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      if(s){
        setDailyLog(JSON.parse(s));
      }
    }
    catch(e){
      Alert.alert("Error", "History Function not loaded!");
      console.log(e);
    }
  }

  return(
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <ScrollView contentContainerStyle={styles.logBox}>
          {dailyLog && Object.keys(dailyLog).map((key) =>
            <TouchableOpacity key={key} style={styles.dailyLog}>
              <View style={styles.dayAndMoodBox}>
                <Text style={styles.logDay}>{key.substring(4, 15)}</Text>
                <FontAwesome5 name={moods[dailyLog[key].mood]} size={17} color="black"/>
              </View>
              <Text style={styles.logText}>{dailyLog[key].diary}</Text>
            </TouchableOpacity>
          )}
        </ScrollView>
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
    justifyContent: "center",
  },

  logBox: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  dailyLog: {
    backgroundColor: historyTheme.historyBg,
    width: SCREEN_WIDTH-10,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    alignItems: "flex-start",
    justifyContent: "center",
  },

  dayAndMoodBox: {
    flexDirection: "row",
    width: SCREEN_WIDTH-40,
    justifyContent: "space-between",
  },
  logDay: {
    fontSize: 16,
    fontWeight: "400",
  },

  logText: {
    fontSize: 20,
    fontWeight: "400",
  }
});