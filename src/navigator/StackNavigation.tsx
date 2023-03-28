import { createStackNavigator } from '@react-navigation/stack';
import Pag1 from '../screen/Pag1';
import Pag2 from '../screen/Pag2';
import Pag3 from '../screen/Pag3';
import Pag4 from '../screen/Pag4';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    initialRouteName='Pag1'
    screenOptions={{
      headerStyle: {
        elevation: 0,
        shadowColor: 'transparent'
      },
      cardStyle: {
        backgroundColor: 'white'
      }
    }}>
      <Stack.Screen name="Pag1" options={{title: "Page 1"}} component={Pag1} />
      <Stack.Screen name="Pag2" options={{title: "Page 2"}} component={Pag2} />
      <Stack.Screen name="Pag3" options={{title: "Page 3"}} component={Pag3} />
      <Stack.Screen name="Pag4" options={{title: "Page 4"}} component={Pag4} />
    </Stack.Navigator>
  );
}