import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AllRoutes from "./src/navigation/AllRoutes";
import { Provider as ReduxProdvider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <ReduxProdvider store={store}>
      <NavigationContainer>
        <AllRoutes />
      </NavigationContainer>
    </ReduxProdvider>
  );
}
