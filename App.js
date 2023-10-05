import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './Src/SignUp';
import MechanicsList from './Src/MechanicsList';
import MechanicSignUp from './Src/MechanicSignUp';

import ViewDetails from './Src/ViewDetails';
import DeffectiveRider from './Src/DeffectiveRider';
import MchanicAccountCreated from './Src/MchanicAccountCreated';


// Create a stack navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Mechnics" component={MechanicsList} />
        <Stack.Screen name="MechanicSignUp" component={MechanicSignUp} />
        <Stack.Screen name="MchanicAccountCreated" component={MchanicAccountCreated} />
        <Stack.Screen name="Details" component={ViewDetails} />
        <Stack.Screen name="DeffectiveRider" component={DeffectiveRider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
