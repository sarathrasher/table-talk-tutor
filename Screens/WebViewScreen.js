import React from  'react';
import {WebView, View, Dimensions} from 'react-native'
import { connect } from 'react-redux';


class WebViewScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: '#2962ff',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
      color: '#FFF',
      zIndex: 1,
      fontSize: 20,
      lineHeight: 23,
      // fontFamily: 'CircularStd-Bold'
    },
    headerTintColor: '#fff',
    animationEnabled: true
  })

  render() {
    return (
      <View style={{
        flex: 1,
        }}>
        <WebView  
          style={{
            width: Dimensions.get('window').width, 
            height: Dimensions.get('window').height}}
          source={{uri: this.props.link}}
        />
      </View>
    )
  }
}


export default connect(state => ({link: state.link}))(WebViewScreen);
