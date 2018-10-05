import React from 'react';
import { Component, View, Text, TouchableOpacity } from 'react-native'
import ModalFilterPicker from 'react-native-modal-filter-picker'
import { connect } from 'react-redux'


class PickerForm extends React.Component {
  constructor (props, ctx) {
    super(props, ctx);

    this.state = {
      visible: false,
      picked: null,
    };
  }

  render() {
    const { visible, picked } = this.state;

    const options = [
      {
        key: 'Who is',
        label: 'Who is',
      },
      {
        key: 'What is',
        label: 'What is',
      },
      {
        key: 'When did it happen',
        label: 'When did it happen',
      },
      {
        key: 'Where did it happen',
        label: 'Where did it happen',
      },
      {
        key: 'Why did it happen',
        label: 'Why did it happen',
      },
      {
        key: 'Conspiracy Theory',
        label: 'Conspiracy Theory',
      },
      {
        key: 'Alien Abduction',
        label: 'Alien Abduction',
      },
      {
        key: 'Illuminati',
        label: 'Illuminati',
      },
      {
        key: 'Symbolism',
        label: 'Symbolism',
      },
      {
        key: 'With Dogs',
        label: 'With Dogs',
      },
    ];

    return (
      <View style={styles.form}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress={this.onShow}>
            <Text style={styles.text}>Select Search Term</Text>
          </TouchableOpacity> 
          <View  style={appStyles.label}>
            <Text style={styles.text}>Selected:</Text>
            <Text style={styles.text}>{picked}</Text>
          </View>  
        </View>  
        <ModalFilterPicker
          title={this.props.selectedTrend}
          visible={visible}
          onSelect={this.onSelect}
          onCancel={this.onCancel}
          options={options}
        />
      </View>
    );
  }

  onShow = () => {
    this.setState({ visible: true });
  }

  onSelect = (picked) => {
    this.setState({
      picked: picked,
      visible: false
    })
    this.props.dispatch({
      type: 'SELECT_SEARCH_TERM',
      term: picked
    })
  }

  onCancel = () => {
    this.setState({
      visible: false
    });
  }
}

export default connect(state => ({dispatch: state.dispatch, selectedTrend: state.selectedTrend}))(PickerForm)

const styles = {
  container: {
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: '#689dff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16
  },
  form: {
    borderColor: '#2962ff',
    borderWidth: 1.5,
    borderRadius: 10,
    margin: 7
  }
}

const appStyles = {
  label: {
    backgroundColor: '#689dff',
    borderRadius: 10,
    margin: 5,
    padding: 10,
  }
}