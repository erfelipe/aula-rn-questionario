import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AnswersProvider } from './context/AnswersContext';
import Q1 from './src/components/Q1';
import Q2 from './src/components/Q2';
import Q3 from './src/components/Q3';
import Final from './src/components/Final';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AnswersProvider>
        <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}>
          <Stack.Screen name="Q1" component={Q1} options={{ title: 'inicio' }} /> 
          <Stack.Screen name="Q2" component={Q2} options={{title: 'segunda tela'}}/>
          <Stack.Screen name="Q3" component={Q3} options={{title: 'terceira tela'}}/>
          <Stack.Screen name="Termino" component={Final} options={ {title: "Feedback"} } />
        </Stack.Navigator>
      </AnswersProvider>
    </NavigationContainer>
  );
}