import { Color } from "../types/color"
import ColorCard from "./ColorCard"
import { View, Text, TouchableOpacity } from "react-native"
import { FlatList } from "react-native"


interface ColorGridProps {
    colors: Color[]
    onToggleOwned: (id: number) => void
    onToggleReorder: (id: number) => void
}

export default function ColorGrid({ colors, onToggleOwned, onToggleReorder }: ColorGridProps) {
   return (
    <FlatList
        data={colors}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
            <ColorCard
                color={item}
                onToggleOwned={() => onToggleOwned(item.id)}
                onToggleReorder={() => onToggleReorder(item.id)}
            />
        )}
    />
)
        
}
