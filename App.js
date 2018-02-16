import React from 'react'
import { Font } from 'expo'
import { Text, View, TouchableHighlight } from 'react-native'

// Styles
import { styles } from './AppStyles'

export default class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      fontLoaded: false
    }
  }

  async componentDidMount(){
    await Font.loadAsync({
      'comfort': require('./assets/fonts/Comfortaa-Bold.ttf')
    })

    this.setState({fontLoaded: true})
  }

  render() {
    const { fontLoaded } = this.state

    return (
      <View style={styles.container}>

      {fontLoaded ? 
        <View>

          <Text style={styles.titleText}>tic tac toe</Text>

        </View> : null
      }

      {fontLoaded ? 
        <View>
          <TouchableHighlight 
            style={styles.button}
            onPress={() => alert('here')}
            underlayColor={'#fff'}
          >
            <Text style={styles.buttonText}>start</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={styles.button}
            onPress={() => alert('here')}
            underlayColor={'#fff'}
          >
            <Text style={styles.buttonText}>about</Text>
          </TouchableHighlight>
        </View> : null
      }
        
      </View>
    )
  }
}