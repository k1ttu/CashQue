import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { Colors } from "../constants/Colors";
import {Types} from "../constants/incomeTypes.ts";
const AddIncome: React.FC = () => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Food");
  const handleAddIncome = () => {
    // Handle adding income logic here
    console.log(`Income added: ${amount}, Description: ${description}`);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Income</Text>
      <TextInput
        style={styles.input}
        placeholder="Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {Types.map((item, index) => (
          <Pressable
            key={index}
            onPress={() => setType(item.name)}
            style={
              type === item.name ?  styles.selectedTypeContainer : styles.typeContainer
            }
          >
            <Text style={styles.typeText}>{item.sign} {item.name}</Text>
          </Pressable>
        ))}
      </ScrollView>
      <Button title="Add Income" onPress={handleAddIncome} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  horizontalScroll: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  typeContainer: {
    padding: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height:"fit-content"
  },
  selectedTypeContainer: {
    borderWidth: 2,
    borderColor: Colors.green,
    height:"fit-content"
    ,padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    fontSize: 16,
  },
});

export default AddIncome;
