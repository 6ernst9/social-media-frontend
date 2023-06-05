import {StyleSheet } from 'react-native';
import React from "react";
import Navbar from "./src/components/Navbar";

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
