/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { SafeAreaProvider } from "react-native-safe-area-context";
import { HomeScreen } from "./src/screens/HomeScreen";



export function App(): JSX.Element {
 return(
    <SafeAreaProvider>
      <HomeScreen />
    </SafeAreaProvider>
 )

}


