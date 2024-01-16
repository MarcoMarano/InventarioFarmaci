import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {COLORS } from '../../constants'
import {HomePage , AddNewButton , 
       AddNewItem ,
       DrugDetail, EditDetailButton, 
       NotificationCenter, EditPage} from '..';

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


                <Stack.Screen
                    name='EditPage'
                    component={EditPage}
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