import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../../styles/NotifictionCenterStyle";
import { useState, useCallback } from "react";
import NotificationDetail from "./NotificationDetail";
import useFetchNotification from "../../hook/useFetchNotification";

export default NotificationCenter = () =>{
    const {data , isLoading, reFetch } = useFetchNotification(); 
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        reFetch();
        setRefreshing(false)
    }, []);


    return (
        <View style={styles.container}> 
            <FlatList 
                data={data}
                renderItem = {({item}) => (<NotificationDetail detail={item} />)}
                onRefresh={onRefresh}
                refreshing={refreshing}
            />
        </View>
    );
}