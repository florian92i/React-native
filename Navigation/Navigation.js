// Navigation/Navigation.js
// Contient toute la navigation de l'app donc une vue = une nouvelle route dans ce fichier

import { createStackNavigator } from 'react-navigation'
import Search from '../components/Search'
import FilmDetail from '../components/FilmDetail'
import FilmItem from '../components/FilmItem'


const SearchStackNavigator = createStackNavigator({
  Search: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue
    screen: Search,
    navigationOptions: {
      title: 'Rechercher'
    }
  },

  FilmDetail: { // Encore une fois j'ai mis le même nom que celui du component
    screen: FilmDetail
  }
})

export default SearchStackNavigator
