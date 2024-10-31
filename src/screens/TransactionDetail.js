import React from 'react';
import { View, Text } from 'react-native';

export default function TransactionDetail({ route }) {
  const { transaction } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20 }}>{transaction.name}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Text>Date: {transaction.date}</Text>
    </View>
  );
}
