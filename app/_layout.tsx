import { Tabs , Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View, Text , StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import {Colors} from '../constants/Colors.ts';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={
      {
        headerShown:true,
        headerStyle:{
          backgroundColor:Colors.green,
        },
        headerLeft:()=>(
          <Text style={{
            color:"white",
            fontFamily:"monospace",
            fontSize:16,
            paddingHorizontal:20
          }}>
            Cashque
          </Text>
        ),
        headerTitle:""
      }
    }/>
      <Stack.Screen name="AddExpense" />
      <Stack.Screen name="AddIncome" />
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
});
