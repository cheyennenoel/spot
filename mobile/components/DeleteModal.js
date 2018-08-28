import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import styles from 'StyleSheet';

export default class DeleteModal extends React.Component {
  render() {
    return (
        <View style={styles.delete}>
            <Modal
            style={styles.delete}
            animationType="slide"
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {
            alert('Modal has been closed.');
            }}>
                <View style={{marginTop: 22}}>
                    <Text style={styles.text}>Delete Your Spot!</Text>
                    <TouchableHighlight
                    onPress={() => {
                        this.props.toggle(!this.props.visible);
                    }}>
                        <Text>Are You Sure?</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight
                onPress={() => {
                    this.props.toggle(true);
                }}>
                    <Text>Delete</Text>
            </TouchableHighlight>
        </View>
    );
  }
};
