// Components/Search.js

import React from 'react'
//import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' // import { } from ... car c'est un export nommé dans TMDBApi.js



import { StyleSheet, FlatList, View, TextInput, Button, Text, ActivityIndicator } from 'react-native'

class Search extends React.Component {
// On initialise un tableau vide pour l'appeler apres dans _loadFilms
  constructor(props) {
    super(props)
    this.searchedText = "" // Initialisation de notre donnée searchedText en dehors du state
    this.page = 0 // Compteur pour connaître la page courante
    this.totalPages = 0 // Nombre de pages totales pour savoir si on a atteint la fin des retours de l'API TMDB
    this.state = {
      films: [],
      isLoading: false, // Par défaut à false car il n'y a pas de chargement tant qu'on ne lance pas de recherche
      nosearch:false,
     }
  }
//---------------------------------- load & if pas de film ----------------------------------//
  _displayLoading() {
        if (this.state.isLoading) {
          return (
            <View style={styles.loading_container}>
              <ActivityIndicator size='large' />
              {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
            </View>
          )
        }
      }

  _displayFilm() {
            if (this.state.films.length < 1 && this.state.nosearch == true) {
              return (
                <View style={styles.loading_container}>
                  <Text>Aucune recherche trouvé</Text>
                  {/* Le component ActivityIndicator possède une propriété size pour définir la taille du visuel de chargement : small ou large. Par défaut size vaut small, on met donc large pour que le chargement soit bien visible */}
                </View>
              )
            }
          }
//---------------------------------- function pour utiliser l'api ----------------------------------//

//permet
_searchFilms() {
 this.page = 0
 this.totalPages = 0
 this.setState({ //setState  possède un paramètre  callback  qui permet d'exécuter une action dès que notre state a fini de se mettre à jour
   films: [],
 }, () => {
     //console.log("Page : " + this.page + " / TotalPages : " + this.totalPages + " / Nombre de films : " + this.state.films.length)
     this._loadFilms()
 })
}

 _loadFilms() {
  // console.log(this.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
   if (this.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
     this.setState({ isLoading: true }) // Lancement du chargement
     getFilmsFromApiWithSearchedText(this.searchedText, this.page+1).then(data => { //On incremente la page quand on appelle la function pour recupere au debut la 1er ensuite 2 ect ...
       //  console.log(data);
       // on utiliser la function stocker dans le TMDBApi lorsque que getFilmsFromApiWithSearchedText se fini callback et on remplie le tableau vide du
       // resultats de l'api
         this.page = data.page
         this.totalPages = data.total_pages
         this.setState({
           films: [ ...this.state.films, ...data.results ], // syntaxe es6 ...this.state.films, ...data.results = films: this.state.films.concat(data.results)
           isLoading: false, // Arrêt du chargement
           nosearch:true, //la premiere recherche va passer nosearch a true en continu
         })
     })
   }
 }

 _searchTextInputChanged(text) {
  this.searchedText = text // Modification du texte recherché à chaque saisie de texte, sans passer par le setState comme avant
}

//---------------------------------- Ce qu'il va s'afficher a l'ecran ----------------------------------//

  render() {
  //  console.log("RENDER")

      return (
        <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder='Titre du film'
          onChangeText={(text) => this._searchTextInputChanged(text)}
          onSubmitEditing={() => this._loadFilms()} //le bouton "Envoyer" du clavier pour valider un TextInput

        />
         <Button style={{ height: 50 }} title='Rechercher' onPress={() => this._searchFilms()}/>
         <FlatList
           data={this.state.films}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item}) => <FilmItem film={item}/>}
           onEndReachedThreshold={0.2} //
           onEndReached={() => {
              if (this.state.films.length > 0 && this.page < this.totalPages) { // On vérifie également qu'on n'a pas atteint la fin de la pagination (totalPages) avant de charger plus d'éléments
                 this._loadFilms()
              }
          }}
         />
         {this._displayLoading()}

         {this._displayFilm()}

       </View>
      )
   }
}

//---------------------------------- le css ----------------------------------//

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
  },

  loading_container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

export default Search
