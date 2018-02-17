import React from 'react'
import { Font } from 'expo'
import { StackNavigator } from 'react-navigation'
import { Text, View, TouchableHighlight } from 'react-native'

// Components
import About from './sections/about/About'
import Gameboard from './sections/game-board/Gameboard'

// Styles
import { styles } from './AppStyles'

class App extends React.Component {
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
    const { navigation } = this.props

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
            onPress={() => navigation.navigate('Gameboard', {fontLoaded})}
            underlayColor={'#fff'}
          >
            <Text style={styles.buttonText}>play</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={styles.button}
            onPress={() => navigation.navigate('About', {fontLoaded})}
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

export default StackNavigator(
  {
    Home: {
      screen: App
    },
    About: {
      screen: About
    },
    Gameboard: {
      screen: Gameboard
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
)