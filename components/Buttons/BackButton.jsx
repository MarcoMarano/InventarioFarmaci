import {useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default  BackButton = () =>{
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return <Button onPress={handleBackPress} title='Back' />;
}