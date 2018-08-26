import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import styles from 'StyleSheet';

export default class WelcomeModal extends React.Component {
  render({ visible, toggle }) {
    return (
        <Modal
        style={styles.welcome}
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
        alert('Modal has been closed.');
        }}>
            <View style={{marginTop: 22}}>
                <Text style={styles.text}>Welcome to Spot!</Text>
                <Text>Touch me anywhere, and I'll remember your Spot :)</Text>
                <Text>Start Without Registering</Text>
                <Text>Log In</Text>
                <TouchableHighlight
                onPress={() => {
                    this.props.toggle(!this.props.visible);
                }}>
                <Text>Got it!</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
  }
};
