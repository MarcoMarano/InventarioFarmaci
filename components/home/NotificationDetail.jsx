import { View, Text } from "react-native";
import styles from "../../styles/NotifictionCenterStyle";
import { useEffect, useState } from "react";

const Notification = (detail)=>{
    const [message, setMessage] = useState('');
    useEffect(()=>{
        if(detail["detail"]['daysToExpire'] > 1)
            setMessage('Scade tra: '+ detail["detail"]['daysToExpire'] + ' giorni');
        else if(detail["detail"]['daysToExpire'] == 1)
            setMessage('Scade tra: '+ detail["detail"]['daysToExpire'] + ' giorno'); 
        else if(detail["detail"]['daysToExpire'] == 0 && detail["detail"]['daysSinceExpired'] == 0)
            setMessage('Scade oggi');
        else if(detail["detail"]['daysSinceExpired'] > 1)
            setMessage('Scaduto da: '+ detail["detail"]['daysSinceExpired'] + ' giorni');
        else
            setMessage('Scaduto da: '+ detail["detail"]['daysSinceExpired'] + ' giorno');
               
    });

    return ( <View style={styles.textDateContainer}>
                <Text style={styles.expirationDate}>{message}</Text>
             </View>
          );

}

export default NotificationDetail = ({detail}) =>{
    return(
        <View style={styles.container}>
             <View style={styles.textBox}>
                <View style={styles.textNameContainer}>
                    <Text style={styles.drugName}> {detail.drugName}</Text>
                </View>
                 <Notification detail={detail}/>
             </View>
        </View>
    );
}