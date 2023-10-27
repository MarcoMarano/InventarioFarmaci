import { useFonts } from "expo-font";
import Navigator from './components/navigator';

export default function App(){

    const [fontsLoaded] = useFonts({
        DMBold: require("./assets/fonts/DMSans-Bold.ttf"),
        DMMedium: require("./assets/fonts/DMSans-Medium.ttf"),
        DMRegular: require("./assets/fonts/DMSans-Regular.ttf"),
      });
    
      if (!fontsLoaded) {
        return null;
      }
    return( 
      <Navigator/>
    )
}




