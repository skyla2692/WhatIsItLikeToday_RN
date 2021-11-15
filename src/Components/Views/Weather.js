import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import { ImageBackground, StyleSheet, Text, View, ScrollView, ActivityIndicator, Dimensions } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { weatherTheme } from '../ThemeColor';
import IMGBG from '../../Images/WeatherBg.jpg';

const config = require('../../../config/key');
const API_KEY = config.API_KEY;

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const icons = {
  "Clouds" : "cloudy",
  "Rain" : "rains",
  "Clear" : "day-sunny",
  "Drizzle" : "rain",
  "Thunderstorm" : "lightnings",
  "Snow" : "snowflake",
  "Atmosphere" : "cloudy-gusts",
  "Mist" : "cloudy-gusts",
  "Smoke" : "fog",
  "Haze" : "cloudy-gusts",
  "Dust": "cloudy-gusts",
  "Fog" : "fog",
  "Sand" : "cloudy-gusts",
  "Ash" : "cloudy-gusts",
  "Squall" : "cloudy-gusts",
  "Tornado" : "cloudy-gusts",
};

export default function Weather() {
  const [city, setCity] = useState("Loading...");
  const [ok, setOk] = useState(true);
  const [currents, setCurrents] = useState([]);
  const [hours, setHours] = useState([]);
  const [days, setDays] = useState([]);

  useEffect(() => {
      getWeather();
  }, []);

  const getWeather = async() => {
    const { granted } = await Location.requestForegroundPermissionsAsync();

    if(!granted){
        setOk(false);
    };

    const { coords : { latitude, longitude }} = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, { useGoogleMaps: false });

    setCity(location[0].city);

    const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`)
    const json = await response.json();

    setDays(json.daily);

    const currentArr = [];
    currentArr.push(json.current);
    setCurrents(currentArr);
    
    const hour = json.hourly;
    hour.splice(12);
    setHours(hour);
  };

  const manageWeekData = () => {
    const newDay = days;
    delete newDay[0];
    setDays(newDay);
  };

  return (
    <View style={styles.container}>
      {days.length === 0 ? (
        <View style={{ ...styles.loading, alignItems: "center" }}>
          <ActivityIndicator size="large"/>
        </View>
      ) : (
      <View style={styles.container2}>
        <ImageBackground source={IMGBG} style={styles.image}>
          <View style={styles.city}>
            <Text style={styles.cityText}>Current City : </Text>
            <Text style={styles.cityName}>{city}</Text>
          </View>

          <View style={styles.weather}>

            <View style={styles.daily}>
              <View style={styles.currentStatus}>
                {currents.map((current, index) =>
                  <View key={index} style={styles.currentIcon}>
                    <Text style={styles.currentTemp}>{parseFloat(current.temp).toFixed(1)}°C</Text>
                    <View style={styles.currentDescriptionBox}>
                        <Fontisto name={icons[current.weather[0].main]} size={56} color="black" style={{marginTop: 20}}/> 
                        <Text style={styles.currentDescription}>{current.weather[0].main}</Text>
                    </View>
                  </View>
                  )}
                  <View style={styles.currMaxMin}>
                    <Text style={styles.currMM}>{parseFloat(days[0].temp.max).toFixed(0)}°C</Text>
                    <Text style={styles.currMM}>/</Text>
                    <Text style={styles.currMM}>{parseFloat(days[0].temp.min).toFixed(0)}°C</Text>
                  </View>
              </View>
            </View>

            <View style={styles.hourBox}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.hourly}>
                {hours.map((hour, index) =>
                  <View key={index} style={styles.everyHour}>
                    <Text style={styles.hourlyTime}>{new Date(hour.dt*1000).getHours()}시</Text>
                    <Fontisto name={icons[hour.weather[0].main]} size={25} color="black" style={{marginTop: 10}}/>
                    <Text style={styles.hourlyTemp}>{parseFloat(hour.temp).toFixed(1)}</Text>
                  </View>
                )}
              </ScrollView>
            </View>

            <View style={styles.weekBox}>
              <ScrollView pagingEnabled contentContainerStyle={styles.weekly}>
              {days.map((day, index) => 
                <View key={index} style={styles.everyWeek}>
                  <Text style={styles.date}>{new Date(day.dt*1000).toString().substring(4, 10)}</Text>
                  <Fontisto name={icons[day.weather[0].main]} size={25} color="black"/>
                  <Text style={styles.temp}>{parseFloat(day.temp.max).toFixed(0)}°C</Text>
                  <Text style={styles.temp}>{parseFloat(day.temp.min).toFixed(0)}°C</Text>
                </View>
              )}
              </ScrollView>
            </View>
          </View>
        </ImageBackground>
      </View>
      )}
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  loading: {
    width: SCREEN_WIDTH,
    marginTop: '80%',
    alignItems: "center"
  },

  container2: {
    flex: 1,
    flexDirection: "column",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  city: {
    flex: 0.5,
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    //backgroundColor: "tomato",
  },
  cityText: {
    fontSize: 25,
    fontWeight: "500",
  },
  cityName: {
    fontSize: 26,
    fontWeight: "600",
  },

  weather: {
    flex: 10.5,
  },

  daily: {
    flex: 2.5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    //backgroundColor: "orange"
  },
  currentStatus: {
    marginVertical: 5,
  },
  currentIcon: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentTemp: {
    fontSize: 80,
    fontWeight: "600",
  },
  currentDescriptionBox: {
    marginTop: 10,
    alignItems: 'center',
  },
  currentDescription: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
  },
  currMaxMin: {
    flexDirection: "row",
    width: "70%",
    marginTop: -20,
    marginBottom: 15,
    paddingHorizontal: 40,
    alignItems: "center",
    justifyContent: 'space-around',
  },
  currMM: {
    fontSize: 28,
    fontWeight: '500',
  },

  hourBox: {
    flex: 2,
  },
  hourly: {
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomWidth: 1,
    alignItems: "center",
    //backgroundColor: "teal",
  },
  everyHour: {
    flexDirection: "column",
    width: 80,
    alignItems: "center",
    paddingHorizontal: 5,
  },
  hourlyTime: {
    fontSize: 20,
    fontWeight: '500',
  },
  hourlyTemp: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },

  weekBox: {
    flex: 5.3,
    //backgroundColor: "coral",
  },
  weekly: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  everyWeek: {
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: weatherTheme.border,
  },
  date: {
    fontSize: 24,
    fontWeight: "500",
  },
  days: {
    fontSize: 24,
    fontWeight: "500",
  },
  temp: {
    fontSize: 24,
    fontWeight: "500",
  },
})