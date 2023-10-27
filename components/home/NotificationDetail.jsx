import { View, Text } from "react-native";
import styles from "../../styles/NotifictionCenterStyle";

export default NotificationDetail = ({detail}) =>{
    return(
        <View style={styles.container}>
             <View style={styles.textBox}>
                <View style={styles.textNameContainer}>
                        <Text style={styles.drugName}>
                            {detail.drugName}
                        </Text>
                    </View>
                    <View style={styles.textDateContainer}> 
                        {
                            detail.daysToExpire ? (
                                <Text style={styles.expirationDate}>
                                    Il farmaco scade tra : {detail.daysToExpire} giorni
                                </Text>
                            ):
                            (
                                <Text style={styles.expirationDate}>
                                    Il farmaco e' scaduto  da : {detail.daySinceExpired} giorni
                                </Text>
                            )
                        }
                    </View>
             </View>
        </View>
    );
}