import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { UiHeading } from '@test-nx/ui-heading'
import { connect } from 'react-redux'
import { changeCount } from '../redux/actions'

const Home = (props) => {

  const [showText, setShowText] = useState(false)

  const navigation = useNavigation()

  let { count } = props.state.count

  const decrementCount = () => {
    count--
    props.changeCounts(count)
  }

  const incrementCount = () => {
    count++
    props.changeCounts(count)
  }

  console.log(`props`, props)

  return (
    <SafeAreaView>
    <View style={styles.box}>
      <Text style={styles.text}>This is the Second app.</Text>
      <UiHeading text={showText ? "Hide Text" : "Show Text"} onPress={() => setShowText(!showText)}/>
      {
        showText
        ? <Text>Text useState</Text>
        : null
      }
    </View>
    <Button
      title="increment"
      onPress={incrementCount}
    />
    <Text>{count}</Text>
    <Button
      title="decrement"
      onPress={decrementCount}
    />
  </SafeAreaView>
  )
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCounts: (count) => {
      dispatch(changeCount(count))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontSize: 18 },
})
