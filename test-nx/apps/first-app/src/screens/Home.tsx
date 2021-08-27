import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { UiHeading } from '@test-nx/ui-heading'
import { connect } from 'react-redux'
import { changeCount } from '../redux/actions'

const Home = (props) => {
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
    <View>
      <Text>Home</Text>
      <UiHeading text="Second Page" onPress={() => navigation.navigate('SecondScreen')} />
        <Button
          title="increment"
          onPress={incrementCount}
        />
        <UiHeading text={count} onPress={() => console.log(`count`, count)} />
        <Button
          title="decrement"
          onPress={decrementCount}
        />
    </View>
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

const styles = StyleSheet.create({})
