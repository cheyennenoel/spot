import React from 'react';
import { Text, View, Modal, TouchableHighlight } from 'react-native';
import styles from '../StyleSheet';

export default class WelcomeModal extends React.Component {
  render() {
    return (
        <View>
            <Modal
            style={styles.welcome}
            animationType="slide"
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {
            alert('Modal has been closed.');
            }}>
                <View style={styles.welcome}>
                <View>
                    <Text style={styles.text}>Welcome to Spot</Text>
                    <Text>Touch me anywhere, and I'll remember your Spot</Text>
                    <Text></Text>
                    {/* <Text>Log In</Text> */}
                    <TouchableHighlight
                        onPress={() => {
                        this.props.toggle(false);
                    }}>
                        <Text>Got It!</Text>
                    </TouchableHighlight>
                    </View>
                </View>
            </Modal>
                <TouchableHighlight
                style={styles.footer}
                onPress={() => {
                    this.props.toggle(true);
                }}>
                    <Text style={styles.helpFooter}>Help</Text>
                </TouchableHighlight>
        </View>
    );
  }
};
