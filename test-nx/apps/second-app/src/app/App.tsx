import React, {useState} from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import configureStore from '../redux/store'
import AppNavigator from '../navigation/AppNavigation'


const store = configureStore()

const App = () => {

  const [showText, setShowText] = useState(false)

  return (
    <Provider store = { store }>
      <AppNavigator/>
    </Provider>
  );
};

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
})

export default App
