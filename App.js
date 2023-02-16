import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./src/navigation";



const chat = {
    id: "1",
    user: {
        image:
            "https://staticg.sportskeeda.com/editor/2022/11/fbf38-16685487564311-1920.jpg",
        name: "Naruto",
    },
    lastMessage: {
        text: "Ok",
        createdAt: "07:30",
    },
};


export default function App() {
  return (
    <View style={styles.container}>
     <Navigator/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 48,
    fontWeight: 'bold'
  }
});
