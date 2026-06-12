import { TextInput, View } from 'react-native';

interface SearchBarProps {
    onChangeText: (value: string) => void    
    value: string
}

export default function SearchBar({ onChangeText, value }: SearchBarProps) {

    return(
        <View>
            <TextInput
                editable
                maxLength={200}
                onChangeText={text => onChangeText(text)}
                value={value}
                
        />
                
        </View>)
}
