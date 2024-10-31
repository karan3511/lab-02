import React from 'react';
import { View, Text } from 'react-native';

const transactions = [
  { id: '1', amount: 50 },
  { id: '2', amount: 120 },
  { id: '3', amount: 60 },
];

export default function SummaryScreen() {
  const totalExpenses = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Total Expenses: ${totalExpenses}</Text>
    </View>
  );
}
