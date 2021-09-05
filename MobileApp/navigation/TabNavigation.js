import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Dimensions } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomNavigation } from 'react-native-paper';
import ModalScreen from '../screens/Modal';
import Profile from '../screens/Profile';
import Home from '../screens/Home';
import ColorsApp from '../config/ColorsApp';
import StackNavigation from './StackNavigation';
import ModalNavigation from './ModalNavigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/*

Para utilizar tabs hay que añadir TabNavigation
en Navigation.js y cambiar Home por StackNavigation.

*/

const Tab = createBottomTabNavigator();

export default function TabNavigation(props){

	const {navigation} = props;
	const iconSize = 25;

	const navigatorOptions = {
    showLabel: true,
		activeTintColor: ColorsApp.PRIMARY,
		labelStyle: {
			fontSize: 14,
			marginBottom: 5
		},
	  style: {
	    backgroundColor: "white",
	    borderColor: "white",
	    borderTopWidth: 1,
      paddingBottom: 20,
      height: 90
	  }
	}

	return (
<Tab.Navigator
      initialRouteName="app"
	  tabBarOptions={navigatorOptions}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-variant-outline" color={color} size={iconSize} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ModalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home-search-outline" color={color} size={iconSize} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={ModalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart-multiple-outline" color={color} size={iconSize} />
          ),
          // tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle-outline" color={color} size={iconSize} />
          ),
        }}
      />
    </Tab.Navigator>
		)
}