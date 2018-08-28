import React from 'react';
import { Platform, View, Modal, Linking } from 'react-native';
import { MapView, Constants, Contacts, Location, Permissions, SMS } from 'expo';
import SocketIOClient from 'socket.io-client';

import styles from './StyleSheet';
import database from './firebase';
import TitlePrompt from './components/TitlePrompt';
import EditPrompt from './components/EditPrompt';
import AcceptPrompt from './components/AcceptPrompt';
import WelcomeModal from './components/WelcomeModal';
// import DeleteModal from './components/DeleteModal';
import ShareModal from './components/ShareModal';

export default class App extends React.Component {
  socket = SocketIOClient('http://localhost:3000');
  state = {
    user: Constants.deviceId,
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    markers: [],
    contacts: [],
    text: null,
    editing: null,
    acceptedTitle: null,
    errorMessage: null,
    titlePromptVisible: false,
    editPromptVisible: false,
    acceptMarkerPromptVisible: false,
    welcomeModalVisible: true,
    shareModalVisible: false,
    deleteModalVisible: false,
    authenticated: false,
  };

  setTitlePromptVisible(visible) {
    this.setState({titlePromptVisible: visible});
  }

  setEditPromptVisible(visible) {
    this.setState({editPromptVisible: visible});
  }

  setEditing(i) {
    this.setState({editing: i});
  }

  setWelcomeModalVisible(visible) {
    this.setState({welcomeModalVisible: visible});
  }

  setShareModalVisible(visible) {
    this.setState({shareModalVisible: visible});
  }  
  
  setDeleteModalVisible(visible) {
    this.setState({deleteModalVisible: visible});
  }

  authenticate() {
    this.setState({authenticated: true});
    // TODO: implement authentication
  }

  share = async (contact) => {
    // let marker = this.state.markers[this.state.editing];
    // let lat = marker.latlng.latitude;
    // let lng = marker.latlng.longitude
    // let location = `http://maps.google.com/?q=${lat},${lng}`;
    // let { status } = await SMS.sendSMSAsync(contact, location);
    alert(`Spot sent to ${contact}!`);
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
  }

  fetchMarkerData() {
    fetch(`/${this.state.user}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ 
          markers: responseJson, 
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentDidMount() {
      this._getContactsAsync();
      this.socket.on(Constants.deviceId, (message) => {
        let marker = message;
        marker.latlng = message.coordinate;
      this.setState({ acceptMarkerPromptVisible: true });
      if (this.state.acceptedTitle) {
        marker.title = this.state.acceptedTitle;
        this.state.markers.push(marker);
        this.setState(prevState => { markers: prevState.markers });
      }
      });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState(prevState => ({
      region: {
          ...prevState.region,
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
      }
    }));
  };

  _getContactsAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.CONTACTS);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access contacts was denied',
      });
    }
    let contacts = await Contacts.getContactsAsync({});
    this.setState({ contacts: contacts.data });
  };

  move(markerIndex, e) {
    this.state.markers[markerIndex].latlng = e.nativeEvent.coordinate;
    this.setState(prevState => { markers: prevState.markers });
    this.move = this.move.bind(this);
  }

  submitTitle(title) {
    this.setState({ text: title });
  }

  addMarker(e) {
    if (!this.state.editPromptVisible) {
      let marker = {};
      marker.latlng = e.nativeEvent.coordinate;
      this.setState({ titlePromptVisible: true });
      if (this.state.text) {
        marker.title = this.state.text;
        this.state.markers.push(marker);
        this.setState(prevState => { markers: prevState.markers });
      }
    }
  }

  editMarker(e, index) {
    e.stopPropagation();
    this.setEditPromptVisible(true);
    this.setEditing(index);
  }

  renameMarker(title) {
    let index = this.state.editing;
    this.state.markers[index] = {
      ...this.state.markers[index],
      title: title,
    };
    this.state.editing = null;
    this.setState(prevState => ({ markers: prevState.markers }));
  }

  route() {
    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    let marker = this.state.markers[this.state.editing];
    let lat = marker.latlng.latitude;
    let lng = marker.latlng.longitude
    const latLng = `${lat},${lng}`;
    const label = marker.title;
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`
    });
    Linking.openURL(url); 
  }


  deleteMarker() {
    this.setState(prevState => { markers: prevState.markers.splice(this.state.editing, 1) });
    this.state.editing = null;
  }

  render() {
    this.setTitlePromptVisible = this.setTitlePromptVisible.bind(this);
    // this.setEditPromptVisible = this.setEditPromptVisible.bind(this)
    this.addMarker = this.addMarker.bind(this);
    this.submitTitle = this.submitTitle.bind(this);
    // this.renameMarker = this.renameMarker.bind(this);
    // this.deleteMarker = this.deleteMarker.bind(this);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.container}
          initialRegion={this.state.region}
          showsUserLocation={true}
          onPress={(e) => this.addMarker(e)}
        >
          {this.state.markers.map((marker, index) => (
            <MapView.Marker
              key={index}
              draggable
              onDragEnd={(e) => this.move(index, e)}
              onPress={(e) => this.editMarker(e, index)}
              coordinate={marker.latlng}
              title={marker.title}
            />
          ))}
        </MapView>
        <View style={styles.navigator}>
          <TitlePrompt
            submit = {this.submitTitle}
            toggle={this.setTitlePromptVisible}
            visible={this.state.titlePromptVisible}
          />
          <Modal visible={this.state.editPromptVisible}>
            <EditPrompt
              markers={this.state.markers}
              editing={this.state.editing}
              rename = {this.renameMarker.bind(this)}
              delete = {this.deleteMarker.bind(this)}
              toggle={this.setEditPromptVisible.bind(this)}
              route={this.route.bind(this)}
            />
          </Modal>
          <Modal visible={this.state.editPromptVisible}>
            <AcceptPrompt
              markers={this.state.markers}
              editing={this.state.editing}
              rename = {this.renameMarker.bind(this)}
              delete = {this.deleteMarker.bind(this)}
              toggle={this.setEditPromptVisible.bind(this)}
            />
          </Modal>
          <WelcomeModal
            visible={this.state.welcomeModalVisible}
            toggle={this.setWelcomeModalVisible.bind(this)}
            authenticated={this.state.authenticated}
            authenticate={this.authenticate.bind(this)}
          />
          <ShareModal
            visible={this.state.shareModalVisible}
            toggle={this.setShareModalVisible.bind(this)}
            authenticated={this.state.authenticated}
            contacts={this.state.contacts}
            send={this.share.bind(this)}
          />
        </View>
      </View>
    );
  }
}
