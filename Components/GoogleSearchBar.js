import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class GoogleSearchBar extends React.Component {
  componentDidMount() {
    (function() {
      var cx = 'YOUR_ENGINE_ID';
      var gcse = document.createElement('script');
      gcse.type = 'text/javascript';
      gcse.async = true;
      gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(gcse, s);
    })();
  }
  render() {
    <View>
      {/* <gcse:searchresults-only></gcse:searchresults-only> */}
    </View>

  }
}

export default connect(state => ({dispatch: state.dispatch}))(GoogleSearchBar);