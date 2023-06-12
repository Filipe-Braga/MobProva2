import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItensPages from './src/Pages/ItensPages';
import CadastroPage from './src/Pages/CadastroPage';
import LoginPage from './src/Pages/LoginPage';
import RePasswordPage from './src/Pages/RePasswordPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='ItensPage' component={ItensPages}/>  
      </Stack.Navigator>

      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginPage}/>  
      </Stack.Navigator>

      <Stack.Navigator>
        <Stack.Screen name='ItensPage' component={RePasswordPage}/>  
      </Stack.Navigator>

      <Stack.Navigator>
        <Stack.Screen name='Cadastro' component={CadastroPage}/>  
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

