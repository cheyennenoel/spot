import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    welcome: {
      flex: 1,
      backgroundColor: '#f0ead6',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      height: '20%',
      width: '60%',    
    },
    container: {
      flex: 1,
      // backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',    
    },
    header: {
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      padding: 0,
      margin: 0,
    },
    help: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      // textColor: '#2b1d0e',
    }
  });

export default styles;