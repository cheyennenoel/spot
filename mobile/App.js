import React from 'react';
import { StyleSheet, Text, View, Modal, TouchableHighlight } from 'react-native';
import { MapView, Contacts } from 'expo';
import styles from 'StyleSheet';
import database from 'firebase.js';
import WelcomeModal from 'WelcomeModal';
import ShareModal from 'ShareModal';
import DeleteModal from 'DeleteModal';

export default class App extends React.Component {
  state = {
    welcomeModalVisible: true,
    shareModalVisible: false,
    deleteModalVisible: false,
  };

  setWelcomeModalVisible(visible) {
    this.setState({welcomeModalVisible: visible});
  }

  setShareModalVisible(visible) {
    this.setState({shareModalVisible: visible});
  }  
  
  setDeleteModalVisible(visible) {
    this.setState({deleteModalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
      <WelcomeModal visible={this.state.welcomeModalVisible} toggle={this.setWelcomeModalVisible.bind(this)}/>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
      <TouchableHighlight
          onPress={() => {
            this.setWelcomeModalVisible(true);
          }}>
          <Text style={styles.help}>Help!</Text>
      </TouchableHighlight>
      <DeleteModal visible={this.state.deleteModalVisible} toggle={this.setDeleteModalVisible.bind(this)}/>
      <ShareModal visible={this.state.shareModalVisible} toggle={this.setShareModalVisible.bind(this)}/>
      </MapView>
      </View>
      // share button
      // getContactsAsync(contactQuery: ContactQuery): Promise<ContactResponse>
    );
  }
}

// // import WebViewLeaflet from 'react-native-webview-leaflet';

//   getInitialState() {
//     return {
//       region: {
//         latitude: 37.78825,
//         longitude: -122.4324,
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       },
//     };
//   }

//   onRegionChange(region) {
//     this.setState({ region });
//   }
  
//   render() {
//     return (
//       {/* <WebViewLeaflet
//         ref={(component) => (this.webViewLeaflet = component)}
//         eventReceiver={this}  
//       /> */}
//         <MapView
//         style={{
//           flex: 1
//         }}
//         initialRegion={{
//           latitude: 37.78825,
//           longitude: -122.4324,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421
//         }}
//           // provider={PROVIDER_GOOGLE}
//           // region={this.state.region}
//           // onRegionChange={this.onRegionChange}
//         />
//         <Text>Touch anywhere on the map, and I'll remember your spot :)</Text>
//     );
//   }
// }
