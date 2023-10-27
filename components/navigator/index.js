import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View , Text} from 'react-native';
import {COLORS } from '../../constants'
import {HomePage , AddNewButton , AddNewItem , EditButton , DrugDetail, EditDetailButton, NotificationCenter} from '../';

const Stack = createNativeStackNavigator();
const Navigator = ()=>{
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'>
                <Stack.Screen
                    name="Home"
                    component={HomePage}
                    options={{ 
                        title: '', 
                        headerLargeStyle: {backgroundColor: COLORS.gray3}, 
                        headerShadowVisible: false,
                        headerLeft: ()  =>  <EditButton/>,
                        headerRight: () =>  <AddNewButton/>,
                    }}
                />
                <Stack.Screen
                    name="AddNewItem"
                    component={AddNewItem}
                    options={{ 
                        title: '', 
                        headerLargeStyle: {backgroundColor: COLORS.gray3}, 
                        headerShadowVisible: false,
                    }}
                />

                <Stack.Screen
                    name='DrugDetail'
                    component={DrugDetail}
                    options={{
                        title: '', 
                        headerLargeStyle: {backgroundColor: COLORS.gray3}, 
                        headerShadowVisible: false,
                        headerRight: () => <EditDetailButton/>
                    }}
                />


                <Stack.Screen
                    name='NotificationPage'
                    component={NotificationCenter}
                    options={{ 
                        title: '', 
                        headerLargeStyle: {backgroundColor: COLORS.gray3}, 
                        headerShadowVisible: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator;