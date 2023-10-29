import { Button } from "react-native";

export default DeleteButton = ({handleDelete})=>{
    return <Button title="Cancella" onPress={handleDelete}/>
}