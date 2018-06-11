// Components/Search.js

import React from 'react'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js



import { StyleSheet, FlatList, View, TextInput, Button, Text } from 'react-native'

class Search extends React.Component {
// On initialise un tableau vide pour l'appeler apres dans _loadFilms
  constructor(props) {
    super(props)
    this.state = { films: [] }
  }


  _loadFilms() {

    getFilmsFromApiWithSearchedText("star").then(data => {
      // on utiliser la function stocker dans le TMDBApi lorsque que getFilmsFromApiWithSearchedText se fini callback et on remplie le tableau vide du
      // resultats de l'api
      this.setState({ films: data.results })
    })
 }
  render() {
      return (
        <View style={styles.main_container}>
         <TextInput style={styles.textinput} placeholder='Titre du film'/>
         <Button style={{ height: 50 }} title='Rechercher' onPress={() => this._loadFilms()}/>
         <FlatList
           data={this.state.films}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item}) => <FilmItem film={item}/>}
         />
       </View>
      )
   }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search
