import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ScrollViewRow from '../Components/ScrollViewRow'

class SearchScreen extends React.Component {
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
      <View style={styles.container}>
        <Text style={styles.topHeader}>Twitter</Text>
        <ScrollViewRow 
        type='twitter'
        {...this.props}
        style={{flex: 1}}
        />
        <Text style={styles.header}>Google</Text>
        <ScrollViewRow 
          style={{flex: 1}}
          type='google' 
          {...this.props}
        />
        <Text style={styles.header}>Bing</Text>
        <ScrollViewRow 
          style={{flex: 1}}
          type='bing' 
          {...this.props}
        />
    </View>
    )
  }
}
  


export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#f2f4fc',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  card: {
    width: 100,
    height: 200
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  topHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingTop: 10
  }
});