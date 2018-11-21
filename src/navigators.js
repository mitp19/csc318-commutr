
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
import TabD from './social/TabD'
import TabE from './TabE'
import BooksArticles from './Media/BooksArticles'
import Music from './Media/Music'
import Podcasts from './Media/Podcasts'
import Downloads from './Media/Downloads'
import PlaceHolderBook from './Media/PlaceHolderBook'
import PlaceHolderMusicPodcast from './Media/PlaceHolderMusicPodcast'
import ChatView from './social/Chat'
import ChatHome from './social/ChatHome'
import ChatList from './social/ChatList'
import YourChatList from './social/YourChatList'
import ForumCard from './social/ForumCard'
import CreateChat from './social/CreateChat'
import Members from './social/Members'
import CreatePost from './social/CreatePost'

export const Home = createStackNavigator({
  TabC: { screen: TabC }
},
{headerMode: 'none'})

export const Social = createStackNavigator({
  ForumCard: { screen: ForumCard },
  ChatHome: { screen: ChatHome },
  ChatView: { screen: ChatView },
  ChatList: { screen: ChatList },
  YourChatList: { screen: YourChatList },
  CreateChat: { screen: CreateChat },
  Members: { screen: Members },
  CreatePost: {screen: CreatePost}
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
  PlaceHolderBook: { screen: PlaceHolderBook },
  PlaceHolderMusicPodcast: { screen: PlaceHolderMusicPodcast }
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
