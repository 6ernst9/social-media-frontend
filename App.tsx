import {StyleSheet } from 'react-native';
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Navbar/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
