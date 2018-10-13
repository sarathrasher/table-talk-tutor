import React from 'react';
import { Text, TextInput, StyleSheet, View, Dimensions } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { connect } from 'react-redux'

class WheelPicker extends React.Component {
  constructor(props) {
    super(props);

    this.inputRefs = {};

    this.state = {
      selectedTrend: '',
      searchTerm: '',
      terms: [
        {
          value: 'News',
          label: 'News',
        },
        {
          value: 'Who is',
          label: 'Who is',
        },
        {
          value: 'What is',
          label: 'What is',
        },
        {
          value: 'When did it happen',
          label: 'When did it happen',
        },
        {
          value: 'Where did it happen',
          label: 'Where did it happen',
        },
        {
          value: 'Why did it happen',
          label: 'Why did it happen',
        },
        {
          value: 'Conspiracy Theory',
          label: 'Conspiracy Theory',
        },
        {
          value: 'Alien Abduction',
          label: 'Alien Abduction',
        },
        {
          value: 'Illuminati',
          label: 'Illuminati',
        },
        {
          value: 'Symbolism',
          label: 'Symbolism',
        },
        {
          value: 'With Dogs',
          label: 'With Dogs',
        },
      ]
    };
  }

  render() {
    let trends = this.props.trends.map(trend => { 
      return ({
        value: trend.name,
        label: trend.name
      })
    })
    return (
        <View style={styles.container}>
          <View style={{ paddingVertical: 5 }}>
            <Text style={styles.text}>Select a Trending Topic</Text>
            <RNPickerSelect
              placeholder={{
                  label: 'Select a trending topic...',
                  value: '',
              }}
              items={trends}
              onValueChange={(value) => {
                this.props.dispatch({
                  type: 'SELECT_TREND',
                  trend: value
                })
              }}
              onUpArrow={() => {
                  this.inputRefs.name.focus();
              }}
              onDownArrow={() => {
                  this.inputRefs.picker2.togglePicker();
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.selectedTrend}
              ref={(el) => {
                  this.inputRefs.picker = el;
              }}
            />
          </View>
          <View style={{ paddingVertical: 5 }}>
            <Text style={styles.text}>Select a Search Term</Text>
            <RNPickerSelect
              placeholder={{
                  label: 'Select a search term...',
                  value: '',
              }}
              items={this.state.terms}
              onValueChange={(value) => {
                this.props.dispatch({
                  type: 'SELECT_SEARCH_TERM',
                  term: value
                })
              }}
              onUpArrow={() => {
                  this.inputRefs.picker.togglePicker();
              }}
              onDownArrow={() => {
                  this.inputRefs.company.focus();
              }}
              style={{ ...pickerSelectStyles }}
              value={this.state.selectedSearchTerm}
              ref={(el) => {
                  this.inputRefs.picker2 = el;
              }}
            />
        </View>
        <View style={styles.input}>
          <Text style={styles.text}>Add Additional Comments</Text>
          <TextInput
            placeholder='Add additional comments...'
            ref={(el) => {
                this.inputRefs.company = el;
            }}
            returnKeyType="done"
            style={pickerSelectStyles.inputIOS}
            onChangeText={(text) =>
              this.props.dispatch({
                type: 'SAVE_SEARCH_TEXT',
                searchTextInput: text 
              })}
          />
        </View>
      </View>
    );
  }
}

export default connect(state => ({ trends: state.trends, dispatch: state.dispatch}))(WheelPicker)

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#f2f4fc',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    width: (Dimensions.get('window').width)
  },
  text: {
    textAlign: 'center',
    fontSize: 16
  },
  input: {
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  },
});