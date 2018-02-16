import React from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

import { styles } from './AboutStyles'

export default class About extends React.Component {
    constructor(props){
        super(props)
        const { params } = this.props.navigation.state

        this.state = {
            fontLoaded: params ? params.fontLoaded : false
        }
    }

    static navigationOptions = {
        headerStyle: {
            backgroundColor: '#fff'
        },
        headerTintColor: '#fff',
    }

    render(){
        const { navigation } = this.props
        const { fontLoaded } = this.state

        return(
            <View style={styles.container}>

                {fontLoaded ? 
                <View style={{width: 220}}>
                    <Text style={styles.aboutText}>this game was made using javascript and facebook's react native framework. coded by arturo caballero</Text>
                </View> : null
                }

                {fontLoaded ?
                    <View>
                        <TouchableHighlight 
                            style={styles.button}
                            onPress={() => navigation.goBack()}
                            underlayColor={'#fff'}
                        >
                            <Text style={styles.buttonText}>back</Text>
                        </TouchableHighlight>
                    </View> : null
                }

            </View>
        )
    }
}