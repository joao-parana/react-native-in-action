# React Native in Action

### This is a work in progress

This repository contains code and snippets to go along with React Native in Action, written for Manning Publications.

Code samples will be arranged by chapter. Any future breaking changes will be updated as soon as I am aware of them.

#### Chapter 1

[Chapter 1](https://github.com/dabit3/react-native-in-action/tree/chapter1)

```js
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
```

#### Chapter 3

[TodoApp](https://github.com/dabit3/react-native-in-action/tree/chapter3)

#### Chapter 4

[TodoApp](https://github.com/dabit3/react-native-in-action/tree/chapter4)

#### Chapter 5

[TodoApp](https://github.com/dabit3/react-native-in-action/tree/chapter5)

#### Chapter 6

[Chapter 6](https://github.com/dabit3/react-native-in-action/tree/chapter6)

#### Chapter 7

[Chapter 7](https://github.com/dabit3/react-native-in-action/tree/chapter7)

#### Chapter 8
[Chapter 8](https://github.com/dabit3/react-native-in-action/tree/chapter8)

#### Chapter 9
[Chapter 9](https://github.com/dabit3/react-native-in-action/tree/chapter9)

#### Chapter 10
[Chapter 11](https://github.com/dabit3/react-native-in-action/tree/chapter10)

#### Chapter 12
[Chapter 12](https://github.com/dabit3/react-native-in-action/tree/chapter12)
