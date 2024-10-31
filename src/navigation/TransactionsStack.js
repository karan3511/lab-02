import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from '../screens/TransactionList';
import TransactionDetail from '../screens/TransactionDetail';

const Stack = createStackNavigator();

export default function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TransactionList" component={TransactionList} options={{ title: 'Transactions' }} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} options={{ title: 'Transaction Details' }} />
    </Stack.Navigator>
  );
}
