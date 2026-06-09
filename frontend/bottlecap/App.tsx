import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Color } from "./types/color";
import { getColors } from './services/api';


export default function App(){
  const [colors, setColors] = useState<Color[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      const load = async () => {
          const data = await getColors()
          setColors(data)
          console.log(colors)
          setLoading(false)  
      }
      load(); 
  }, []) 
  return (
    <View>
        <Text>Hallo</Text>
    </View>
)
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
