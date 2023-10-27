import { View , Text} from "react-native"
import styles from "../../styles/DrugDetailStyle"
import { useContext } from "react";
import { NavigationContext } from '@react-navigation/native';

export default DrugDetail = () =>{
    const detail = useContext(NavigationContext).getState().routes[1].params.item;
    return(
       <View style={styles.container}>
        <View style={styles.textInfoContainer}>
           <Text style={styles.nameStyle}>{detail.drugName}</Text>
           <Text style={styles.nameStyle}>{detail.drugDescription}</Text>
        </View>
        <View style={styles.dataInfoContainer}>
            <View style={styles.paragraph}>
                <Text style={styles.textStyle}>Inserito  il: </Text>
                    <Text style={styles.textDateStyle}>{detail.drugInsertionDate}</Text>
            </View>
            <View style={styles.paragraph}>
                <Text style={styles.textStyle}>Scade  il: </Text>
                    <Text style={styles.textDateStyle}>{detail.drugExpirationDate}</Text>
            </View>
        </View>
       </View>
    )
}