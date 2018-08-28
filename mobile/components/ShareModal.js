import React from 'react';
import { Text, View, Modal, TouchableHighlight, Picker, TextInput, FlatList } from 'react-native';
import styles from 'StyleSheet';
import ListMarker from './ListMarker';

export default class ShareModal extends React.Component {
  render() {
    //   alert(JSON.stringify(this.props.contacts));
    // const renderOption = (contact) => {
    //     alert(JSON.stringify(contact));
    //     let name = contact.name ? contact.name : contact.id;
    //     // let phone = contact.phoneNumber;
    //     let id = contact.id;
    //     return (
    //     <Picker.Item
    //     key={id}
    //     label={name}
    //     value={contact}
    //     id={id}
    //     />);
    // };
    // const dropdown = this.props.contacts.length ? (
    //     <Picker
    //     style={{ height: 50, width: 100 }}
    //     onValueChange={(itemValue) => this.props.send(itemValue)}>
    //     {this.props.contacts.map(contact => renderOption(contact))}
    //     </Picker>) : '';

        // const renderOption = (contact) => {
    //     alert(JSON.stringify(contact));
    //     let name = contact.name ? contact.name : contact.id;
    //     // let phone = contact.phoneNumber;
    //     let id = contact.id;
    //     return (
    //     <Picker.Item
    //     key={id}
    //     label={name}
    //     value={contact}
    //     id={id}
    //     />);
    // };
    const spotDropdown = this.props.markers.length ? (
        <FlatList
        style={{ width: '100%', top: 15 }}
        data={this.props.markers}
        keyExtractor={item => item.id}
        renderItem={({ item: item }) => (
            <ListMarker item={item}/>
        )}
        />
    ) : '';
        // <Picker
        // style={{ height: 50, width: 100 }}
        // onValueChange={(itemValue) => this.props.send(itemValue)}>
        // {this.props.contacts.map(contact => renderOption(contact))}
        // </Picker>) : '';
    return (
        <View 
        style={styles.edit}
        >
            <Modal
            animationType="slide"
            transparent={false}
            visible={this.props.visible}
            onRequestClose={() => {
            alert('Modal has been closed.');
            }}>
                <View style={{marginTop: 22}}>
                    <Text style={styles.text}>Share Your Spot</Text>
                    {spotDropdown}
                    <TextInput>Phone Number</TextInput>
                    {/* {dropdown} */}
                    <TouchableHighlight
                    onPress={() => {
                        this.props.send()
                        this.props.toggle(!this.props.visible);
                    }}>
                        <Text>Send</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <TouchableHighlight
                style={styles.footer}
                onPress={() => {
                    this.props.toggle(true);
                }}>
                    <Text style={styles.shareFooter}>Share</Text>
                    {/* <Text style={styles.shareFooter}>Share</Text> */}
            </TouchableHighlight>
        </View>
    );
  }
};
