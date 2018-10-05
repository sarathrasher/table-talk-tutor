import { FormLabel, FormInput, Button, FormValidationMessage } from 'react-native-elements'
import React from 'react';
import { View } from 'react-native'
import { connect } from 'react-redux'

let TempForm = (props) => 
  <View>
    <FormLabel>Google Search</FormLabel>
    <FormInput>{props.selectedTrend} {props.selectedSearchTerm}</FormInput>>
    {/* <FormValidationMessage>Error message</FormValidationMessage> */}
    <Button title='BUTTON' />
  </View>

export default connect(state => ({selectedTrend: state.selectedTrend, selectedSearchTerm: state.selectedSearchTerm}))(TempForm);
