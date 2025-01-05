import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme
} from 'react-native'
function App(): JSX.Element{
  const isdark=useColorScheme()==="dark"
  return(<View style={styles.container}>
      <Text style={isdark ? styles.white : styles.dark}>
        Namaste Kaise ho betaa
      </Text>
    </View>)
}
const styles=StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    dark:{
      color:'#000000'
    },
    white:{
      color:'#FFFFFF'
    }
  }
)
export default App;
