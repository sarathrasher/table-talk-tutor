import React from 'react';
import { Linking, View, Text, TouchableOpacity  } from 'react-native';


let ResultRow = (props) =>
  <View style={styles.container}>
    <TouchableOpacity  
      onPress={() =>
        Linking.openURL(props.result.link)}
      >
        <Text style={styles.link}>{props.result.title}</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{props.result.snippet}</Text>
  </View>

export default ResultRow

styles = {
  container: {
    padding: 10
  },
  text: {
    fontSize: 20
  },
  link: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontSize: 24
  }
}