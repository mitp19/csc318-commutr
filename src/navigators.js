
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import FontAwesome, { Icons } from 'react-native-fontawesome';

// TabNavigator screens
import TabA from './Media/TabA'
import TabB from './TabB'
import TabC from './TabC'
import TabD from './TabD'
import TabE from './TabE'
import BooksArticles from './Media/BooksArticles'
import Music from './Media/Music'
import Podcasts from './Media/Podcasts'
import Downloads from './Media/Downloads'
import PlaceHolderBook from './Media/PlaceHolderBook'

export const Home = createStackNavigator({
  TabC: { screen: TabC }
},
{headerMode: 'none'})

export const Social = createStackNavigator({
  TabD: { screen: TabD }
},
{headerMode: 'none'})

export const Commute = createStackNavigator({
  TabB: { screen: TabB }
},
{headerMode: 'none'})

export const Art = createStackNavigator({
  TabE: { screen: TabE }
},
{headerMode: 'none'})

export const Media = createStackNavigator({
  TabA: { screen: TabA },
  BooksArticles: { screen: BooksArticles },
  Music: { screen: Music },
  Podcasts: { screen: Podcasts },
  Downloads: { screen: Downloads },
  PlaceHolderBook: { screen: PlaceHolderBook }
}, 
{headerMode: 'none'})

export const Tabs = createBottomTabNavigator({
  Media: { screen: Media,
  navigationOptions: {tabBarIcon: ({ tintColor }) => 
  <View><FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.play}</FontAwesome></View>} 
  },
  Commute: { screen: Commute,
  navigationOptions: {tabBarIcon: ({ tintColor }) => 
  <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.bus}</FontAwesome>} 
  },
  Home: { screen: Home,
  navigationOptions: {tabBarIcon: ({ tintColor }) => 
  <FontAwesome style={{ fontSize: 30, color: tintColor }}>{Icons.home}</FontAwesome>}
  },
  Social: {screen: Social,
    navigationOptions: {tabBarIcon: ({ tintColor }) => 
    <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.users}</FontAwesome>}
  },
  Art: { screen: Art,
  navigationOptions: {tabBarIcon: ({ tintColor }) => 
  <FontAwesome style={{ fontSize: 25, color: tintColor }}>{Icons.paintBrush}</FontAwesome>}
  }
}, {initialRouteName: 'Home', 
tabBarOptions: {showIcon: true}, 
})
