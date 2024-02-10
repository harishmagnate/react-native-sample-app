import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { MainLayout } from "./src/screens/MainLayout";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Main: MainLayout,
  },
  {
    initialRouteName: "Main",    
    defaultNavigationOptions: {
      title: "App",
    },
  }
)

export default createAppContainer(navigator);
