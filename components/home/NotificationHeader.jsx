import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/NotificationHeaderStyle"
import { icons } from "../../constants";
import {useNavigation } from '@react-navigation/native';

export default NotificationHeader = () =>{
    const navigation = useNavigation();
    const handlePress = ()=>{ navigation.navigate('NotificationPage');}

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.notificationText}>Notifiche</Text>
            </View>
            <View style={styles.imageContainer}>
                 <TouchableOpacity onPress={handlePress}>
                 <Image
                    source={icons.notification}
                    resizeMode='contain'
                    style={styles.notificationButton}
                 />
                 </TouchableOpacity>
                </View>
        </View>
    );
}