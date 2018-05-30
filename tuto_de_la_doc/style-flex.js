import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class FlexDimensionsBasics extends Component {
  render() {
    return (
      // Try removing the `flex: 1` on the parent View.
      // The parent will not have dimensions, so the children can't expand.
      // What if you add `height: 300` instead of `flex: 1`?
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => FlexDimensionsBasics);
/*
Utilisez flexdans le style d'un composant pour développer et réduire dynamiquement le composant en fonction de l'espace disponible. 
Normalement, vous utiliserez flex: 1, ce qui indique à un composant de remplir tout l'espace disponible, 
partagé de manière égale entre chaque autre composant avec le même parent. 
Plus le flexdonné est grand, plus le rapport d'espace qu'un composant prendra par rapport à ses frères et sœurs sera élevé.
*/

//Il peut etre interessant de faire un systeme de grille de 12 :D 