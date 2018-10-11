import React from  'react';
import {WebView, View, Dimensions} from 'react-native'
import { connect } from 'react-redux';


let WebViewScreen = (props) =>
  <View style={{
    flex: 1,
    }}>
    <WebView  
      style={{
        width: Dimensions.get('window').width, 
        height: Dimensions.get('window').height}}
      source={{uri: props.link}}
    />
  </View>

export default connect(state => ({link: state.link}))(WebViewScreen);
