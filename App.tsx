import React from "react";
import Navbar from "./src/navigation-tree/Navbar";
import {NavigationContainer} from "@react-navigation/native";

export default function App() {
  return (
      <NavigationContainer>
          <Navbar/>
      </NavigationContainer>
  );
}
