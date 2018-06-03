import React, { Component } from 'react';
import { AppRegistry,StyleSheet, Text, View } from 'react-native';

class Blink extends Component {
  constructor(props) {
      
      //propssont définis par le parent et ils sont fixés pendant toute la durée de vie d'un composant
      // Pour les données qui vont changer, nous devons utiliser state.
    super(props);
    this.state = {isShowingText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText }; /*
Il existe une méthode de cycle de vie des composants, componentWillUpdategrâce à laquelle vous pouvez vérifier le courant et le nouvel état. Il est toujours appelé lorsque les accessoires ou l'état change. Par exemple:
        */
      });
    }, 1000);
  }

    
    /*
Lorsque setState est appelé, BlinkApp rendra son composant. En appelant setState dans le temporisateur, le composant se ré-affiche chaque fois que le temporisateur est activé.
    */
  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text  style={styles.red}>{display}</Text>
    );
  }
}

export default class BlinkAppsssazer extends Component {
  render() {
    return (
      <View>
        <Blink text='I love to blink' />
        <Blink text='Yes blinking is so great' />
        <Blink text='Why did they ever take this out of HTML' />
        <Blink text='Look at me look at me look at me' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    width: 100,
    height: 100, 
    backgroundColor: 'skyblue',
    color: 'red',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => BlinkApp); 