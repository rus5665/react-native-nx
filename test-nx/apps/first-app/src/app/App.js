import 'react-native-gesture-handler'
import * as React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import AppNavigator from '../navigation/AppNavigation'

const store = configureStore()

const App = () => {
  return (
    <Provider store = { store }>
      <AppNavigator/>
    </Provider>
  )
}

export default App
