// Navigation/Navigation.js
// Contient toute la navigation de l'app donc une vue = une nouvelle route dans ce fichier

import { createStackNavigator, createBottomTabNavigator  } from 'react-navigation'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import Favorites from '../components/Favorites'


const SearchStackNavigator = createStackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },
  FilmDetail: {
    screen: FilmDetail
  }
})

const MoviesTabNavigator = createBottomTabNavigator({
  Search: {
    screen: SearchStackNavigator //  ajoute une navigation dans un onglet et faire ce qu'on appelle une combinaison de navigation 
  },
  Favorites: {
    screen: Favorites
  }
})


export default MoviesTabNavigator
