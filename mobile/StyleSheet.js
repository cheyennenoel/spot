import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: -1,
        backgroundColor: '#baffab',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',    
    },
    navigator: {
        height: "5%",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },
    welcome: {
        backgroundColor: '#baffab',
        marginTop: 22,
        height: "20%",
        width: "40%",
    },
    edit: {
        backgroundColor: '#baffab',
        marginTop: 22,
    },
    footer: {
        marginTop: 5,
        flex: 1,
    },
    shareFooter: {
        textAlign: "right",
    },
    helpFooter: {
        textAlign: "left",
    },
    share: {
        backgroundColor: '#baffab',
        marginTop: 5,
        flex: 1,
    },
    delete: {
        backgroundColor: '#baffab',
        // height: '20%',
        // width: '50%',
        marginTop: 22,
        flex: 1,
    },
    header: {
        backgroundColor: '#baffab',
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