import React from 'react';

import { Component, View, Text, TouchableOpacity } from 'react-native'

import ModalFilterPicker from 'react-native-modal-filter-picker'


export default class App extends React.Component {
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
      <View >
        <TouchableOpacity onPress={this.onShow}>
          <Text>Select Search Term</Text>
        </TouchableOpacity>      
        <Text >Selected:</Text>
        <Text>{picked}</Text>
        <ModalFilterPicker
          title='Search Term'
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
  }

  onCancel = () => {
    this.setState({
      visible: false
    });
  }
}