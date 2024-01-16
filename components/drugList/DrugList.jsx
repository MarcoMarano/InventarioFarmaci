import { FlatList, View , ActivityIndicator} from 'react-native';
import { useCallback, useState } from 'react';
import DrugCard from './DrugCard';
import useFetch from '../../hook/useFetch';

export default DrugList = () =>{
    const {data , isLoading, reFetch }= useFetch();
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        reFetch();
        setRefreshing(false)
    }, []);
    

    return(
        <View>
            {isLoading ?(<ActivityIndicator size="large" />):(
                <FlatList 
                    data={data}
                    renderItem = {({item}) => (<DrugCard drug={item} />)}
                    onRefresh={onRefresh}
                    refreshing={refreshing}                  
                />
            )}
        </View>
    );
}



