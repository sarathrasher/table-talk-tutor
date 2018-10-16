import React from 'react';
import { ScrollView, TouchableOpacity, Dimensions  } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body } from "native-base";
import { connect } from 'react-redux';

class TwitterResultRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  render() {
    console.log(this.props.result)
    console.log(this.props.result.user.screen_name);
    console.log(this.props.result.id_str)
    return (
      <ScrollView>
        <Content padder>
          <Card style={{width: (Dimensions.get('window').width * 0.8)}}>
            <CardItem header bordered>
            <TouchableOpacity
              onPress={() => {
                this.setState({clicked: true})
                this.props.dispatch({
                  type: 'SAVE_LINK',
                  link: `https://twitter.com/${this.props.result.user.screen_name}/status/${this.props.result.id_str}`
                })
                this.props.navigation.navigate('WebView', {title: 'Explore More'})
              }
              }
              >
                <Text style={styles.link}>{this.props.result.text}</Text>
              </TouchableOpacity>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.text}>@{this.props.result.user.screen_name} {this.props.result.created_at}</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </ScrollView>

      )
  }
}
  
export default connect(props => ({dispatch: props.dispatch}))(TwitterResultRow);

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