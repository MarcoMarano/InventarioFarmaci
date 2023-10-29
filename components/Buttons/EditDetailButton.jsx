import { Button } from 'react-native';
import {useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { NavigationContext } from '@react-navigation/native';

export default EditDetailButton = (drug) =>{
    const detail = useContext(NavigationContext).getState().routes[1].params.item;
    const navigation = useNavigation();
    const handleEditDetailPress = ()=>{
        navigation.navigate('EditPage', {item: detail});
    }

    return <Button onPress={handleEditDetailPress} title='Edit'/>
}