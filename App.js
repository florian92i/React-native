import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  render() {
    let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>Scroll me plz</Text>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:96}}>If you like</Text>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:96}}>Scrolling down</Text>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:96}}>What s the best</Text>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:96}}>Framework around?</Text>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
             <Image source={pic} style={{width: 193, height: 110}}/>
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent(
  'AwesomeProject',
  () => IScrolledDownAndWhatHappenedNextShockedMe);
