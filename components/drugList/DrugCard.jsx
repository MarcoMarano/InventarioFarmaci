import { View, Text, Pressable } from "react-native";
import styles from "../../styles/DrugCardStyle";
import {useNavigation } from '@react-navigation/native';

export default DrugCard = ({drug}) =>{
    const navigation = useNavigation();
    const handleDetailPress = () =>{
        navigation.navigate('DrugDetail', {item: drug});
    };
    const dateAsStringIt = new Date(drug["drugExpirationDate"]).toLocaleDateString('it-IT'); //this convert date from db format  into a readble way
    return(
        <Pressable onPress={handleDetailPress} style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.name}>{drug.drugName}</Text>
                <Text style={styles.date}>{dateAsStringIt}</Text>
            </View>
        </Pressable>
    );
}