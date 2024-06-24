/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, createContext, useState, useContext } from 'react';
import { enableScreens } from 'react-native-screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler'
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {LightTheme, DarkTheme} from './src/styles/index';
import BootSplash from 'react-native-bootsplash';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './src/pages/SignIn'
import HomeScreen from './src/pages/Home'
import LocationSearch from './src/pages/LocationSearchScreen'
import RideTimeScreen from './src/pages/RideTimeScreen'
import RideSelectScreen from './src/pages/RideSelect'
import CouponScreen from './src/pages/CuponScreen'
import FareSheetScreen from './src/pages/FareSheetScreen'
import ProfileScreen from './src/pages/ProfileScreen'
import RideHistory from './src/pages/RideHistory'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import Geolocation from '@react-native-community/geolocation';
import UpcomingRidesScreen from './src/pages/UpcomingRides'
import ThemesScreen from './src/pages/Themes'

Geolocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'auto',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});
const Stack = createNativeStackNavigator();

interface ThemeContextType {
  selectTheme: (name:any) => void;
  theme: any;
}
const ThemeContext = createContext<ThemeContextType | null>(null);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('context must be used in the provider');
  }
  return context;
};


type SectionProps = PropsWithChildren<{
  title: string;}>;


function App(): React.JSX.Element {
  navigator.geolocation = require('@react-native-community/geolocation');
  const [theme, setTheme] = useState(DarkTheme); // 'light' or 'dark'

  const selectTheme = (name) => {

    if(name === 'Light') {
      setTheme(LightTheme)
    }else if(name==="Dark")
      {
        setTheme(DarkTheme)
      }
  };

  useEffect(() => {
    enableScreens(true)
  }, []);


  return (
    <Provider store={store}>
    <GestureHandlerRootView>
    <ThemeContext.Provider value={{ theme, selectTheme }}>
    <SafeAreaView style={[{flex:1}]}>
        <NavigationContainer  onReady={() => BootSplash.hide({fade: true})} >
        <StatusBar
          barStyle={useColorScheme()==='dark' ? 'dark-content' : 'dark-content'}
          backgroundColor={'#fff'} 
          />
          <Stack.Navigator initialRouteName='Home' 
          screenOptions={{animation: 'slide_from_right', presentation: 'modal'}}
           >
             <Stack.Screen name="SignIn" component={SignInScreen} options={{headerShown: false, animation:""}}/>
             <Stack.Screen name="SignUp" component={SignInScreen} options={{headerShown: false}}/>
             <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, navigationBarColor:'white'}}/>
             <Stack.Screen name="LocationSearch" component={LocationSearch} options={{headerShown: false}}/>
             <Stack.Screen name="RideTimeScreen" component={RideTimeScreen} options={{headerShown: false}}/>
             <Stack.Screen name="RideSelect" component={RideSelectScreen} options={{headerShown: false}}/>
             <Stack.Screen name="CouponScreen" component={CouponScreen} options={{headerShown: false}}/>
             <Stack.Screen name="FareSheetScreen" component={FareSheetScreen} options={{headerShown: false}}/>
             <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{headerShown: false}}/>
             <Stack.Screen name="RideHistory" component={RideHistory} options={{headerShown: false}}/>
             <Stack.Screen name="UpcomingRidesScreen" component={UpcomingRidesScreen} options={{headerShown: false}}/>
             <Stack.Screen name="ThemesScreen" component={ThemesScreen} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
    </ThemeContext.Provider>
    </GestureHandlerRootView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
