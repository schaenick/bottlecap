import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native'; 
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Color } from "./types/color";
import { getColors } from './services/api';
import BottleIcon from './components/BottleIcon'
import ColorCard from './components/ColorCard';
import ColorGrid from './components/ColorGrid';


export default function App(){
  const [colors, setColors] = useState<Color[]>([])
  const [loading, setLoading] = useState(true)
  const handleToggleOwned = (id: number) => {
    // hier kommt später der API call
}

  const handleToggleReorder = (id: number) => {
      // hier kommt später der API call
  }
  useEffect(() => {
      const load = async () => {
          const data = await getColors()
          setColors(data)
          setLoading(false)  
      }
      load(); 
  }, []) 
  return (
      loading ? (
          <ActivityIndicator />
      ) : (
          <View>
              <ColorGrid 
    colors={colors} 
    onToggleOwned={handleToggleOwned}
    onToggleReorder={handleToggleReorder}
/>
          </View>
      )
  )}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
