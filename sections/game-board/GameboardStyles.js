import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // here
        justifyContent: 'space-between',
        flexDirection: 'column',
    },
    topNavigation: {
        height: 80,
        width: width,
        backgroundColor: '#fff'
    },
    gameboard: {
        width: width / 1.5,
        height: width / 1.5,
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    row: {
        width: (width / 1.5),
        height: (width / 1.5) / 3 - 4.333,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    innerBox: {
        width: (width / 1.5) / 3 - 4.333,
        height: (width / 1.5) / 3 - 4.333,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxText: {
        fontFamily: 'comfort',
        fontSize: 35
    },
    scoreContainer: {
        width: width / 1.7,
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    scoreText: {
        fontFamily: 'comfort',
        fontSize: 20,
        textAlign: 'center'
    },
    playerScore: {
        width: (width / 1.7) / 2,
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    comScore: {
        width: (width / 1.7) / 2,
        height: 70,
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    fluffSpace: {
        height: 70,
        width: width,
        backgroundColor: '#fff'
    },
    button: {
        height: 30,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    closeButton: {
        width: 30, 
        height: 30, 
        backgroundColor: '#fff', 
        marginTop: 40, 
        marginLeft: width - 50
    }
})