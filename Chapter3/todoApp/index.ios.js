'use strict'
import React, {
  AppRegistry,
  Component
} from 'react-native'

import App from './app/App'

class TodoApp extends Component {
  render () {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp)