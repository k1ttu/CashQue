import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Colors } from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      year: 2024,
      balance: 0, // Initial balance for the year
      data: [
        {
          month: 12,
          balance: 0, // Initial balance for the month
          byDates: [
            {
              date: 16,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 1,
                  amount: -1000,
                  des: "Some Description",
                },
                {
                  code: 2,
                  amount: 500,
                  des: "Income Description",
                },
                {
                  code: 3,
                  amount: -200,
                  des: "Expense Description",
                },
              ],
            },
            {
              date: 20,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 1,
                  amount: -1000,
                  des: "Some Description",
                },
                {
                  code: 4,
                  amount: -300,
                  des: "Expense Description",
                },
                {
                  code: 2,
                  amount: 1500,
                  des: "Income Description",
                },
              ],
            },
            {
              date: 25,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 5,
                  amount: -700,
                  des: "Expense Description",
                },
                {
                  code: 3,
                  amount: 2000,
                  des: "Income Description",
                },
                {
                  code: 6,
                  amount: -400,
                  des: "Expense Description",
                },
              ],
            },
          ],
        },
        {
          month: 11,
          balance: 0, // Initial balance for the month
          byDates: [
            {
              date: 10,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 7,
                  amount: -800,
                  des: "Expense Description",
                },
                {
                  code: 1,
                  amount: 1200,
                  des: "Income Description",
                },
                {
                  code: 8,
                  amount: -500,
                  des: "Expense Description",
                },
              ],
            },
            {
              date: 15,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 2,
                  amount: 1000,
                  des: "Income Description",
                },
                {
                  code: 9,
                  amount: -300,
                  des: "Expense Description",
                },
                {
                  code: 3,
                  amount: 700,
                  des: "Income Description",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      year: 2025,
      balance: 0, // Initial balance for the year
      data: [
        {
          month: 1,
          balance: 0, // Initial balance for the month
          byDates: [
            {
              date: 5,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 1,
                  amount: -500,
                  des: "Expense Description",
                },
                {
                  code: 2,
                  amount: 800,
                  des: "Income Description",
                },
                {
                  code: 3,
                  amount: -200,
                  des: "Expense Description",
                },
              ],
            },
            {
              date: 10,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 4,
                  amount: -300,
                  des: "Expense Description",
                },
                {
                  code: 2,
                  amount: 1500,
                  des: "Income Description",
                },
                {
                  code: 5,
                  amount: -700,
                  des: "Expense Description",
                },
              ],
            },
          ],
        },
        {
          month: 2,
          balance: 0, // Initial balance for the month
          byDates: [
            {
              date: 14,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 6,
                  amount: -400,
                  des: "Expense Description",
                },
                {
                  code: 1,
                  amount: 1200,
                  des: "Income Description",
                },
                {
                  code: 7,
                  amount: -800,
                  des: "Expense Description",
                },
              ],
            },
            {
              date: 28,
              balance: 0, // Initial balance for the date
              transactions: [
                {
                  code: 2,
                  amount: 1000,
                  des: "Income Description",
                },
                {
                  code: 8,
                  amount: -500,
                  des: "Expense Description",
                },
                {
                  code: 3,
                  amount: 700,
                  des: "Income Description",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const calculateBalances = (transactions) => {
    transactions.forEach((yearData) => {
      let yearBalance = 0;
      yearData.data.forEach((monthData) => {
        let monthBalance = 0;
        monthData.byDates.forEach((dateData) => {
          let dateBalance = 0;
          dateData.transactions.forEach((transaction) => {
            dateBalance += transaction.amount;
          });
          dateData.balance = dateBalance;
          monthBalance += dateBalance;
        });
        monthData.balance = monthBalance;
        yearBalance += monthBalance;
      });
      yearData.balance = yearBalance;
    });
  };

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const handlePreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  useEffect(() => {
    calculateBalances(transactions);
    console.log(transactions);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Pressable onPress={handlePreviousMonth} style={styles.headerButton}>
            <Ionicons name="arrow-back" size={20} color="black" />
          </Pressable>
          <Text style={styles.headerText}>
            {months[currentMonth]} {currentYear}
          </Text>
          <Pressable onPress={handleNextMonth} style={styles.headerButton}>
            <Ionicons name="arrow-forward" size={20} color="black" />
          </Pressable>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {transactions.map((item, yearIndex) => (
          <View key={yearIndex} style={styles.yearContainer}>
            <Text style={styles.yearText}>{item.year}</Text>
            {item.data.map((monthData, monthIndex) => (
              <View key={monthIndex} style={styles.monthContainer}>
                <Text style={styles.monthText}>{months[monthData.month - 1]}</Text>
                {monthData.byDates.map((dateData, dateIndex) => (
                  <View key={dateIndex} style={styles.dateContainer}>
                    <Text style={styles.dateText}>{dateData.date}</Text>
                    {dateData.transactions.map((transaction, transactionIndex) => (
                      <View key={transactionIndex} style={styles.transactionContainer}>
                        <Text style={styles.transactionText}>{transaction.des}</Text>
                        <Text style={styles.transactionAmount}>{transaction.amount}</Text>
                      </View>
                    ))}
                  </View>
                ))}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <Link asChild href={{ pathname: "AddIncome" }}>
          <Pressable style={styles.IncomeButton}>
            <Text style={styles.IncomeText}>+</Text>
          </Pressable>
        </Link>
        <Link asChild href={{ pathname: "AddExpense" }}>
          <Pressable style={styles.ExpenseButton}>
            <Text style={styles.ExpenseText}>-</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  text: {
    fontSize: 20,
    color: "#333",
  },
  month: {
    alignSelf: "center",
  },
  footer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    padding: 20,
    paddingHorizontal: 30,
    bottom: 0,
  },
  IncomeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.green,
  },
  IncomeText: {
    color: Colors.green,
    fontSize: 30,
    fontWeight: "bold",
  },
  ExpenseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    borderColor: Colors.red,
  },
  ExpenseText: {
    color: Colors.red,
    fontSize: 30,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    width: "100%",
    columnGap: 40,
  },
  headerButton: {
    padding: 10,
    color: "black",
  },
  headerText: {
    fontSize: 17,
    color: "black",
    width: 150,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  scrollView: {
    width: "100%",
  },
  yearContainer: {
    padding: 10,
  },
  yearText: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  monthContainer: {
    padding: 10,
  },
  monthText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  dateContainer: {
    padding: 10,
  },
  dateText: {
    fontSize: 18,
    marginVertical: 2,
  },
  transactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  transactionText: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default App;