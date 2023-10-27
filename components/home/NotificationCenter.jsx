import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/NotifictionCenterStyle";
import { useState, useCallback } from "react";
import NotificationDetail from "./NotificationDetail";

export default NotificationCenter = () =>{
    // const {data , isLoading, reFetch } = useFetchNotification(); //TODO implements useFetchNotification()
    // const [refreshing, setRefreshing] = useState(false);
    // const onRefresh = useCallback(() => {
    //     setRefreshing(true);
    //     reFetch();
    //     setRefreshing(false)
    // }, []);

    const mockData = [
        {
            drugName: "Esempio_1",
            daysToExpire: 3,
            daySinceExpired: 0,
        },
        {
            drugName: "Esempio_2",
            daysToExpire: 0,
            daySinceExpired: 3
        },
    ]

    return (
        <View style={styles.container}> 
            <FlatList 
                data={mockData}
                renderItem = {({item}) => (<NotificationDetail detail={item} />)}
            />
        </View>
    );
}