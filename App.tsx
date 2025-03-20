  import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context"
import { Toaster } from 'sonner-native';
import MainScreen from "./screens/MainScreen";
import HomeScreen from "./screens/HomeScreen";
import BlogDetailScreen from "./screens/BlogDetailScreen";
import PrivacyScreen from "./screens/PrivacyScreen";
import TermsScreen from "./screens/TermsScreen";
import ContactScreen from "./screens/ContactScreen";
import DeveloperScreen from "./screens/DeveloperScreen";
  
  const Stack = createNativeStackNavigator();  function RootStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Articles" component={HomeScreen} />
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen} />
        <Stack.Screen name="Privacy" component={PrivacyScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Developer" component={DeveloperScreen} />
      </Stack.Navigator>
    );
  }
  
  export default function App() {
    return (
      <SafeAreaProvider style={styles.container}>
      <Toaster />
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });
