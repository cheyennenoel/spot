import React from 'react';
import { View, Modal, Text, TextInput, TouchableHighlight } from 'react-native';

export default class AcceptPrompt extends React.Component {
  state = {
     text: '', 
  };

  render() {
    return (
      <View>
          <Text>Rename this Spot:</Text>
          <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          />
            <TouchableHighlight
              onPress={() => {
              this.props.toggle(false);
              this.props.rename(this.state.text);
            }}>
                <Text>Save</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
              this.props.toggle(false);
              this.props.delete();
            }}>
                <Text>Delete</Text>
            </TouchableHighlight>            
            <TouchableHighlight
              onPress={() => {
              this.props.toggle(false);
            }}>
                <Text>Nevermind</Text>
            </TouchableHighlight>
      </View>
    );
  }
}

      // <Prompt
      // // onCancel={ () => this.setState({
      // //   promptVisible: false,
      // //   message: "Nevermind"