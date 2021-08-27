import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import SecondScreen from '../screens/SecondScreen'

const Stack = createStackNavigator()

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
      />
    </Stack.Navigator>
  )
}


function AppNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default AppNavigator
