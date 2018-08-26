import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import styles from 'StyleSheet';

export default class ShareModal extends React.Component {
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
                <Text style={styles.text}>Share Your Spot!</Text>
                <TouchableHighlight
                onPress={() => {
                    this.props.toggle(!this.props.visible);
                }}>
                <Text>Send!</Text>
                </TouchableHighlight>
            </View>
        </Modal>
    );
  }
};
