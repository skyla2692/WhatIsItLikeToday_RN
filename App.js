import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Fontisto, MaterialCommunityIcons } from '@expo/vector-icons';

import Weather from './Components/TabNavigator/Weather';
import ToDo from './Components/TabNavigator/ToDo';
import Diary from './Components/TabNavigator/Diary';
import HabitTracker from './Components/TabNavigator/HabitTracker';

export default function App() {
  const Tab = createBottomTabNavigator();

  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Weather"
        screenOptions={{
          tabBarActiveTintColor: "black"
        }}>
        <Tab.Screen
          name="Today's Weather is like"
          component={ Weather }
          options={{
            tabBarLabel: "Weather",
            tabBarIcon: ({ color, size }) => (
              <Fontisto name="day-cloudy" size={ size } color={ color} />
            ),
          }}
        />
        <Tab.Screen
          name="My To Do list is like"
          component={ ToDo }
          options={{
            tabBarLabel: "To Do",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="clipboard-text-outline" size={ size } color={ color } />
            ),
          }}
        />
        <Tab.Screen
          name="My day was like"
          component={ Diary }
          options={{
            tabBarLabel: "Diary",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="notebook-outline" size={ size } color={ color } />
            ),
          }}
          />
        <Tab.Screen
          name="My habit is to do things like"
          component={ HabitTracker }
          options={{
            tabBarLabel: "Habit",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="calendar-month" size={ size } color={ color } />
            ),
          }}
          />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
