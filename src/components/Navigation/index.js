import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Main from '~/pages/Main';
import DrawTeam from '~/pages/DrawTeam';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          adaptive: true,
          activeTintColor: '#e91e63',
          activeBackgroundColor: '#FFF',
          inactiveTintColor: '#7159c1'
        }}
      >
        <Tab.Screen
          name="Home"
          component={Main}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Draw Team"
          component={DrawTeam}
          options={{
            tabBarLabel: 'Draw Team',
            tabBarIcon: ({ color, size }) => (
              <Icon name="team" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
