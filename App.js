import React from 'react';
import { View } from 'react-native';
import store from './store'
import {Provider } from 'react-redux';
import Routes from './Components/Router';
import LoadingHomeScreen from './Components/LoadingHomeScreen';

let App = () =>
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Routes />
    </View>
  </Provider>

export default App;
