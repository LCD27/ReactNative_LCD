/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import AppNavigators from './practises/first-day/navigators/AppNavigators'
type Props = {};
export default class App extends Component<Props> {

  render() {
    // console.warn(this.props.navigation)
    return (
     <AppNavigators/>
    );
  }
}

