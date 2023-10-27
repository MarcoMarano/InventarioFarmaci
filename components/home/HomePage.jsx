import { SafeAreaView } from 'react-native';
import styles from '../../styles/HomePageStyle';
import DrugList from '../drugList/DrugList';
import NotificationCenter from './NotificationHeader';



export default function HomePage(){
    return(
        <SafeAreaView style={styles.homePageContainer}>
           <NotificationCenter />
           <DrugList/>
        </SafeAreaView>
    )
}