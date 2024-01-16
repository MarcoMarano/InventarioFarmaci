import { SafeAreaView } from 'react-native';
import styles from '../../styles/HomePageStyle';
import DrugList from '../drugList/DrugList';
import NotificationCenter from './NotificationHeader';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { useState, useContext } from 'react';


export default function HomePage(){
    const [permissions, setPermisisons] = useState([]); 
    
    return(
        <SafeAreaView style={styles.homePageContainer}>
           <NotificationCenter />
           <DrugList/>
        </SafeAreaView>
    )
}