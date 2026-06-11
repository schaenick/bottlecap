import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native'; 
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { Color } from "./types/color";
import { getColors } from './services/api';
import BottleIcon from './components/BottleIcon'
import ColorCard from './components/ColorCard';


export default function App(){
  const [colors, setColors] = useState<Color[]>([])
  const [loading, setLoading] = useState(true)
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
              <ColorCard color={colors[3]} onToggleOwned={() => {}} onToggleReorder={() => {}} />
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
