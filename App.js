/**
 * Sample React Native Gesture
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react'

import{
  Provider
} from 'react-redux'
import store from './js/store'
import AppNavigators from './js/navigators/AppNavigators'
type Props = {};
export default class App extends Component<Props> {

  render() {
    // console.warn(this.props.navigation)
    return (
        <Provider store={store}>
          <AppNavigators/>
        </Provider>

    );
  }
}

