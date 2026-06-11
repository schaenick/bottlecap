import { Color } from "../types/color"
import BottleIcon from "./BottleIcon"
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ColorCardProps {
    color: Color
    onToggleOwned: () => void
    onToggleReorder: () => void
}

export default function ColorCard({ color, onToggleOwned, onToggleReorder }: ColorCardProps) {
    return(
        <View>
            <BottleIcon color={color.hex ?? '#cccccc'} />
            <Text>{color.name}</Text>
            <TouchableOpacity onPress={onToggleOwned}>
                <Text>Owned</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onToggleReorder}>
                <Text>Reorder</Text>
             </TouchableOpacity>
        </View>)
}
