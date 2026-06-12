import { View, TouchableOpacity, Text } from 'react-native';

interface FilterBarProps {
    onFilterChange: (value: string) => void    
    onBrandChange: (value: string) => void   
    filter: string
    brand: string
}

export default function FilterBar({ onBrandChange, onFilterChange, filter, brand }: FilterBarProps) {

    return(
        <View>
        <TouchableOpacity onPress={() => onFilterChange('owned')}>
            <Text>Owned</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onFilterChange('all')}>
            <Text>Alle</Text>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => onFilterChange('reorder')}>
            <Text>Reorder</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onBrandChange('Vallejo')}>
            <Text>Vallejo</Text>
        </TouchableOpacity>     
                <TouchableOpacity onPress={() => onBrandChange('The Army Painter')}>
            <Text>The Army Painter</Text>
        </TouchableOpacity>    
<TouchableOpacity onPress={() => {
    onBrandChange('all')
    onFilterChange('all')
}}>
    <Text>Filter löschen</Text>
</TouchableOpacity>       
        </View>)
}
