import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native'
import API from './api'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

class blankRNApp extends Component {
  constructor () {
    super()
    this.state = { name: 'chris' }
  }
  componentDidMount () {
    API.getName().then((data) => {
      this.setState({ name: data })
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Hello there, {this.state.name}</Text>
      
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})

AppRegistry.registerComponent('blankRNApp', () => blankRNApp)
