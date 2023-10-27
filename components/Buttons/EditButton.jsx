import {useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default EditButton = () =>{
    const handleEditPress = ()=>{
        console.log("Pressed edit button");
    }

    return <Button onPress={handleEditPress} title='Edit'/>
}