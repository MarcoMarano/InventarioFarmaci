import { View , Text} from "react-native"
import styles from "../../styles/DrugDetailStyle"
import { useContext, useState } from "react";
import { NavigationContext } from '@react-navigation/native';
import DeleteItem from "../Buttons/DeleteItem";
import useDelete from "../../hook/useDelete";

export default DrugDetail = () =>{
    const detail = useContext(NavigationContext).getState().routes[1].params.item;
    const expirationDateAsString = new Date(detail["drugExpirationDate"]).toLocaleDateString('it-IT');
    const insertionDateAsString = new Date(detail["drugInsertionDate"]).toLocaleDateString('it-IT');
    const goToHome = () => { navigation.navigate('Home');};
    const handleDelete = async () =>{
        await useDelete(detail._id);
        goToHome(); 
    }
    return(
       <View style={styles.container}>
        <View style={styles.textInfoContainer}>
           <Text style={styles.nameStyle}>{detail.drugName}</Text>
           <Text style={styles.nameStyle}>{detail.drugDescription}</Text>
        </View>
        <View style={styles.dataInfoContainer}>
            <View style={styles.paragraph}>
                <Text style={styles.textStyle}>Inserito  il: </Text>
                    <Text style={styles.textDateStyle}>{expirationDateAsString}</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.textStyle}>Scade  il: </Text>
                    <Text style={styles.textDateStyle}>{insertionDateAsString}</Text>
            </View>
        </View>
        <View  style={styles.buttonContainer}>
             <DeleteItem handleDelete={handleDelete}/>
        </View>
       </View>
    )
}