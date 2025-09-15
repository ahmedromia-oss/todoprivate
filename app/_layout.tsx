import { createStackNavigator } from '@react-navigation/stack';
import "react-native-reanimated";
import ToDos from './toDos';
const Stack = createStackNavigator();

const RootLayout = () =>{
  return (
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="ToDos" component={ToDos} />
      </Stack.Navigator>
  );
}
export default RootLayout
