import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Alert, Dimensions, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import IMGBG from '../../Images/ToDoBg.jpg';
import { toDoTheme } from '../ThemeColor';
import { Feather } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get("window");

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

const STORAGE_KEY = "@toDos";

export default function ToDo(){
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});

  useEffect(() => {
    loadToDos();
  }, []);

  const today = new Date();
  const month = today.getMonth();
  const date = today.getDate();

  const onChangeText = (payload) => setText(payload);

  const handleCheck = (key) => {
    if (toDos[key].checked === false) {
      toDos[key] = { ...toDos[key], checked: true };
    } else {
      toDos[key] = { ...toDos[key], checked: false };
    }
    const newToDos = { ...toDos, [key]: toDos[key] };

    setToDos(newToDos);
    saveToDos(newToDos);
  };

  const saveToDos = async(toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };

  const loadToDos = async() => {
    try{
      const s = await AsyncStorage.getItem(STORAGE_KEY);
      if(s){
        setToDos(JSON.parse(s));
      }
    }
    catch(e){
      Alert.alert("Error", "Todo Function not loaded!");
      console.log(e);
    }
  };

  const addToDo = async() => {
    if(text === ""){
      return
    }
    const newToDos = {
      ...toDos,
      [Date.now()] : { text, checked: false },
    };
    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = (key) => {
    if(Platform.OS === "web"){
      const ok = confirm("Do you want to delete this TO DO?");
      if(ok){
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      }
    } 
    else{
      Alert.alert(
        "Delete To Do?", 
        "Are you sure?", [
        { text: "Cancel" },
        {
          text: "I'm Sure",
          style: "destructive",
          onPress: () => {
            const newToDos = { ...toDos };
            delete newToDos[key];
            setToDos(newToDos);
            saveToDos(newToDos);
          },
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={IMGBG} style={styles.image}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{mon[month]}. {date}</Text>
        </View>

        <View style={styles.toDoBox}>
          <TextInput
            onSubmitEditing={ addToDo }
            onChangeText={ onChangeText }
            returnKeyType="done"
            value={ text }
            placeholder={ "Add a To Do for today!" }
            style={ styles.addToDo } />

          <ScrollView>
            {toDos && Object.keys(toDos).map((key) =>
              <View key={key} style={styles.toDo}>
                <BouncyCheckbox
                  isChecked={toDos[key].checked}
                  onPress={() => handleCheck(key)}
                  size={20}
                  iconStyle={{ borderColor: "black" }}
                  fillColor="black"
                  />
                <Text style={{ ...styles.toDoText, marginHorizontal: 10}}>{toDos[key].text}</Text>
                <View style={styles.icons}>
                  <TouchableOpacity
                    onPress={() => deleteToDo(key)}
                    hitSlop={{ top: 10, left: 10, bottom: 10, right: 10 }}>
                    <Feather name="delete" size={20} color={toDoTheme.deleteIcon}/>
                  </TouchableOpacity>
                </View>
              </View>
              )
            }
          </ScrollView>
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
    justifyContent: 'flex-end',
    borderBottomWidth: 1,
    //backgroundColor: "tomato",
  },
  dateText: {
    fontSize: 28,
    fontWeight: "600",
  },

  toDoBox: {
    flex: 9.5,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  addToDo: {
    backgroundColor: toDoTheme.addToDoBox,
    width: SCREEN_WIDTH-10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: toDoTheme.toDoBg,
    width: SCREEN_WIDTH-10,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  toDoText: {
    fontSize: 16,
    fontWeight: "500",
    width: "70%",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
});