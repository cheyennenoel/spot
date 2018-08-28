import React from 'react';
import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { Checkbox } from 'native-base';
import styles from '../StyleSheet';

export default class ListMarker extends React.Component {
    onMarkerToggle = (marker, propAction) => {
      propAction({
        ...marker,
        selected: !marker.selected,
      });
    };
  
    render() {
      const { marker, onSelect } = this.props;
  
      return (
        <View style={styles.row}>
          <View
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              paddingRight: 10,
              paddingVertical: 5,
            }}
          >
            <TouchableOpacity
              onPress={() => this.onMarkerToggle(marker, onUpdate)}
              style={{
                flex: 1,
                width: '100%',
                flexDirection: 'row',
              }}
            >
              <CheckBox
                checked={marker.selected}
                // onPress={() => this.onMarkerToggle(marker, onUpdate)}
              />
              <Body
                style={{
                  flex: 1,
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  paddingLeft: 25,
                }}
              >
                <Text
                  style={{
                    color: marker.selected ? 'grey' : 'black',
                    // textDecorationLine: todo.completed ? 'line-through' : 'none',
                  }}
                >
                  {marker.title}
                </Text>
              </Body>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => onDelete(todo)}
              style={{ paddingLeft: 25, paddingRight: 15 }}
            >
              <Ionicons
                name="ios-trash-outline"
                color={`${todo.title.length > 0 ? 'black' : 'grey'}`}
                size={23}
              />
            </TouchableOpacity> */}
          </View>
        </View>
      );
    }
  }