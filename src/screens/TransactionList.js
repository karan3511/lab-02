import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const transactions = [
  { id: '1', name: 'Grocery Shopping', amount: 50, date: '2023-10-28' },
  { id: '2', name: 'Electricity Bill', amount: 120, date: '2023-10-20' },
  { id: '3', name: 'Internet Subscription', amount: 60, date: '2023-10-15' },
];

export default function TransactionList({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}>
            <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
              <Text style={{ fontSize: 18 }}>{item.name}</Text>
              <Text style={{ color: 'grey' }}>Amount: ${item.amount}</Text>
              <Text style={{ color: 'grey' }}>Date: {item.date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
