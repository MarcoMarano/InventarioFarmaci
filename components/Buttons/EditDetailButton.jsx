import { Button } from 'react-native';

export default EditDetailButton = () =>{
    const handleEditDetailPress = ()=>{
        console.log("Pressed editDetail button");
    }

    return <Button onPress={handleEditDetailPress} title='EditDetail'/>
}