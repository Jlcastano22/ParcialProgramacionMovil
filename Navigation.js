import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';

//screens
import Description from './src/screens/Description';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Stack from './src/screens/Stack';

const TabNav = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator initialRouteName='Home'>
      <HomeStack.Screen
        name='Inicio'
        component={Home}
        options={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle }}
      />
      <HomeStack.Screen
        name='Bienvenida'
        component={Stack}
        options={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTintColor: '#00FF00' }}
      />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator initialRouteName='Profile'>
      <ProfileStack.Screen
        name='Personajes'
        component={Profile}
        options={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle }}
      />
      <ProfileStack.Screen
        name='Descripcion'
        component={Description}
        options={{ headerStyle: styles.header, headerTitleStyle: styles.headerTitle, headerTintColor: '#00FF00' }}
      />
    </ProfileStack.Navigator>
  );
}

function RoutingTabs() {
  return (
    <TabNav.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarStyle: styles.tabBar,
      }}
    >
      <TabNav.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Bienvenida',
          tabBarIcon: ({ color, size }) => <Ionicons name='home' size={24} color='gray' />,
          headerShown: false,
        }}
      />
      <TabNav.Screen
        name='Personajes'
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name='face-man' size={24} color='gray' />,
          headerShown: false,
        }}
      />
    </TabNav.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <RoutingTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1c1e24',
  },
  headerTitle: {
    color: '#00FF00',
    fontWeight: 'bold',
    fontSize: 24,
  },
  tabBar: {
    backgroundColor: '#272b30',
    borderTopColor: '#D100FF',
  },
});
