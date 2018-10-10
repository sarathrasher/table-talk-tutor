import React from 'react';
import { Linking, View,  TouchableOpacity  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

let ResultRow = (props) =>
  <Container>
    <Header />
    <Content padder>
      <Card style={styles.container}>
        <CardItem header bordered>
          <TouchableOpacity  
            onPress={() =>
              Linking.openURL(props.result.link)}
            >
            <Text style={styles.link}>{props.result.title}</Text>
          </TouchableOpacity>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.text}>{props.result.snippet}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  </Container>

  // <View style={styles.container}>
  //   <TouchableOpacity  
  //     onPress={() =>
  //       Linking.openURL(props.result.link)}
  //     >
  //       <Text style={styles.link}>{props.result.title}</Text>
  //     </TouchableOpacity>
  //     <Text style={styles.text}>{props.result.snippet}</Text>
  // </View>

export default ResultRow

styles = {
  container: {
    // padding: 10,
    width: 350
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