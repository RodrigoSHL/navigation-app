import { createStackNavigator } from '@react-navigation/stack';
import Pag1 from '../screen/Pag1';
import Pag2 from '../screen/Pag2';
import Pag3 from '../screen/Pag3';
import Pag4 from '../screen/Pag4';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pag1" component={Pag1} />
      <Stack.Screen name="Pag2" component={Pag2} />
      <Stack.Screen name="Pag3" component={Pag3} />
      <Stack.Screen name="Pag4" component={Pag4} />
    </Stack.Navigator>
  );
}