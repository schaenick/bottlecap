import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Color } from "./types/color";
import { getColors } from './services/api';
import BottleIcon from './components/BottleIcon'

export default function App(){
  const [colors, setColors] = useState<Color[]>([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      const load = async () => {
          const data = await getColors()
          setColors(data)
          setLoading(false)  
          console.log(colors)
      }
      load(); 
  }, []) 
  return (
    <View>
        <BottleIcon color="#aa1f18" />
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
