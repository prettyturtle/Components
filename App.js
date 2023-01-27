import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Header from "./src/components/Header";
import Spacer from "./src/components/Spacer";

export default function App() {
  return (
    <SafeAreaProvider>
      <Header>
        <Header.LeftGroup>
          <Header.Button iconName="arrow-back" />
          <Spacer horizontal spacing={16} />
          <Header.Button iconName="arrow-up" />
        </Header.LeftGroup>
        <Header.CenterGroup>
          <Header.Title title="즐겨찾기" />
        </Header.CenterGroup>
        <Header.RightGroup>
          <Header.Button iconName="settings-outline" position="right" />
          <Spacer horizontal spacing={16} />
          <Header.Button iconName="person-outline" position="right" />
        </Header.RightGroup>
      </Header>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
