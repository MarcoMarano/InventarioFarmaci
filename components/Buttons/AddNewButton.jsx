import {useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default  AddNewButton = () => {
    const navigation = useNavigation(); 

    const handleAddPress = () => {
        console.log("Pressed add button");
        navigation.navigate('AddNewItem');
    };

    return <Button onPress={handleAddPress} title='Add' />;
};