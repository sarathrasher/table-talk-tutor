import React from 'react';
import { Linking, View,  TouchableOpacity, WebView, Dimensions  } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
import { connect } from 'react-redux';

class ResultRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  render() {
    // if (this.state.clicked === false) {
      return (
        <Container>
            <Header />
            <Content padder>
              <Card style={{width: (Dimensions.get('window').width * 0.8)}}>
                <CardItem header bordered>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({clicked: true})
                    this.props.dispatch({
                      type: 'SAVE_LINK',
                      link: this.props.result.link
                    })
                    this.props.navigation.navigate('WebView', {title: 'Explore More'})
                  }
                  }
                  >
                    <Text style={styles.link}>{this.props.result.title}</Text>
                  </TouchableOpacity>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.text}>{this.props.result.snippet}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Container>

      )
    // } 
    // else {
    //   return (
    //     <WebView  
    //     source={{uri: this.props.result.link}}
    //     />
    //   )
    // } 
  }
}
  
export default connect(props => ({dispatch: props.dispatch}))(ResultRow);

styles = {
  container: {
    // padding: 10,
    width: 200,
    height: 200,
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