import React from 'react';
import { View, Modal, Text, TextInput, TouchableHighlight } from 'react-native';
import styles from '../StyleSheet';

export default class TitlePrompt extends React.Component {
  state = {
     text: 'My Spot', 
  };

  render() {
    return (
      <View style={styles.edit}>
        <Modal
        visible={this.props.visible}
        >
          <Text>Name this Spot:</Text>
          <TextInput
          visible={this.props.visible}
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          />
            <TouchableHighlight
              onPress={() => {
              this.props.toggle(!this.props.visible);
              this.props.submit(this.state.text);
            }}>
                <Text>Save</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
              this.props.toggle(!this.props.visible);
            }}>
                <Text>Nevermind</Text>
            </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}

      // <Prompt
      // // onCancel={ () => this.setState({
      // //   promptVisible: false,
      // //   message: "Nevermind"