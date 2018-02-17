import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import { Text, View, TouchableHighlight, Dimensions } from 'react-native'

// Styles
import { styles } from './GameboardStyles'

export default class Gameboard extends React.Component {
    constructor(props){
        super(props)
        const { params } = this.props.navigation.state

        this.state = {
            fontLoaded: params ? params.fontLoaded : false,
            board: [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ],
            alternateCheck: false,
            playerScore: 0,
            computerScore: 0
        }

        this.markBoard = this.markBoard.bind(this)
    }

    markBoard(x, y){
        const { board, alternateCheck } = this.state
        let newBoard = board

        if (!alternateCheck && board[x][y] === ''){
            newBoard[x][y] = 'X'
        } else if (alternateCheck && board[x][y] === '') {
            newBoard[x][y] = 'O'
        } else {
            return
        }

        this.setState({board: newBoard, alternateCheck: !alternateCheck})
    }

    render(){
        const { navigation } = this.props
        const { fontLoaded, board, computerScore, playerScore } = this.state

        return(
            <View style={styles.container}>

                <View style={styles.topNavigation}>
                    <TouchableHighlight 
                        style={styles.closeButton}
                        onPress={() => navigation.goBack()}
                        underlayColor={'#fff'}
                    >
                        <Icon name='cross' size={30} color="#000000"/>
                    </TouchableHighlight>
                </View>

                {fontLoaded ? 
                    <View style={styles.gameboard}>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(0, 0)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[0][0]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(1, 0)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[1][0]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(2, 0)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[2][0]}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(0, 1)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[0][1]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(1, 1)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[1][1]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(2, 1)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[2][1]}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.row}>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(0, 2)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[0][2]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(1, 2)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[1][2]}</Text>
                            </TouchableHighlight>
                            <TouchableHighlight underlayColor={'#fff'} onPress={() => this.markBoard(2, 2)} style={styles.innerBox}>
                                <Text style={styles.boxText}>{board[2][2]}</Text>
                            </TouchableHighlight>
                        </View>
                    </View> : null
                }

                {fontLoaded ?
                    <View style={styles.scoreContainer}>
                        <View style={styles.playerScore}>
                            <Text style={styles.scoreText}>{`
                            ${playerScore}
                            you
                            `}</Text>
                        </View>
                        <View style={styles.comScore}>
                            <Text style={styles.scoreText}>{`
                            ${computerScore}
                            com
                            `}</Text>
                        </View>
                    </View> : null
                }

                <View style={styles.fluffSpace}>
                </View>

            </View>
        )
    }
}