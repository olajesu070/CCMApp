import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../component/home';
import Onboard from '../component/onBoarding';
import Hymnal from '../component/hymnal';
import HymnView from '../component/hymnView';
import HymnalYoruba from '../component/hymnalYoruba';

//Stack Navigator
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Onboard">
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Hymnal" component={Hymnal} />
      <Stack.Screen name="HymnView" component={HymnView} />
      <Stack.Screen name="HymnalYoruba" component={HymnalYoruba} />
    </Stack.Navigator>
  );
};

export {AppNavigation};
