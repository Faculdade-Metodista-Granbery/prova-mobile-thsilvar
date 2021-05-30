import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  StatusBar,
  View,
} from "react-native";
import CardQuote from "./components/card/card.component";
import databaseFactory from "./factories/databaseFactory";
import { useList } from "react-firebase-hooks/database";
import { colors } from "./utils/colors";
import Menu from "./components/menu/menu.component";

export default function App() {
  const [cards, loading, erro] = useList(
    databaseFactory.createDatabaseService("firebase")
  );
  const [darkMode, setDarkMode] = useState(true);
  const [theme, setTheme] = useState("instagram");

  const onDarkModeChange = () => {
    setDarkMode(() => !darkMode);
    if (theme === "instagram") {
      setTheme(colors.instagramDark);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar animated={true} backgroundColor={"#c64242"} />

      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardQuote
            key={item.val().id}
            task={item.val().task}
            profileImg={item.val().profile}
          />
        )}
      ></FlatList>

      <Menu></Menu>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
});
