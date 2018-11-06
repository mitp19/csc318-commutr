
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// Navigators
import { DrawerNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

// StackNavigator screens
import ItemList from './ItemList'
import Item from './Item'

// TabNavigator screens
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'
import TabD from './TabD'
import TabE from './TabE'

// Plain old component
import Plain from './Plain'

export const Stack = createStackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
})

export const Tabs = createBottomTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
  TabD: { screen: TabD },
  TabE: { screen: TabE },


}, {
  order: ['TabA', 'TabB', 'TabC', 'TabD', 'TabE']
})

// export const Drawer = DrawerNavigator({
//   Stack: { screen: Stack },
//   Tabs: { screen: Tabs },
//   Plain: { screen: Plain },
// })
