import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FlashList } from "@shopify/flash-list";
import { Types } from "../constants/expenseTypes.ts";
const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");

  const handleAddExpense = () => {
    // Logic to add expense
    console.log(`Description: ${description}, Amount: ${amount}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={setDescription}
      />
      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalScroll}
      >
        {Types.map((type, index) => (
          <View key={index} style={styles.typeContainer}>
            <Text style={styles.typeText}>
              {type.sign} {type.name}
            </Text>
          </View>
        ))}
      </ScrollView>
      <Button title="Add Expense" onPress={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
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
    height:'fit-content'
  },
  typeText: {
    fontSize: 16,
  },
});

export default AddExpense;
