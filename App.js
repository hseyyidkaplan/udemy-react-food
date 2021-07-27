import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";
import SearchScreen from "./src/screens/SearchScreen"

const navigator = createStackNavigator({
  ResultsShow: ResultsShowScreen,
  Search: SearchScreen,
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Restorant Arama'
  }
});

export default createAppContainer(navigator);
