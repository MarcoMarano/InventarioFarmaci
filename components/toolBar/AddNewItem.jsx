import { SafeAreaView, View, TextInput, TouchableOpacity, Text, Image, Platform } from "react-native";
import {useNavigation} from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from "../../styles/AddNewItemStyle";
import { useState } from "react";
import useWrite from "../../hook/useWrite";
import {SaveButton , ClearFieldButton} from "..";

const AddNewItem = () =>{
    const [drugName, setDrugName] = useState(" ");
    const [drugDescription, setdrugDescription] = useState(" ");
    const [drugInsertionDate, setDrugInsertionDate] = useState(new Date());
    const [drugExpirationDate, setDrugExpirationDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [showDatePickerForIns, setshowDatePickerForIns] = useState(false);
    const [showDatePickerForExp, setshowDatePickerForExp] = useState(false);
    const navigation = useNavigation(); 

    //############# BUTTON SECTION ######################//
        const goToHome = () => { navigation.navigate('Home');};
        const clearFields = () =>{ 
            setDrugName(" "); 
            setdrugDescription(" ");
        }
        const handleSave = async () =>{
            if(drugName !="" || drugDescription != ""){
                await useWrite(drugName, drugDescription, drugInsertionDate, drugExpirationDate);
                goToHome();
            }else{
                console.log("the Name or the Description is empty ");
                alert("i campi nome o desrizione sono vuoti");
            }
        };
    //############# BUTTON SECTION ######################//

    //############# DATEPICKER SECTION ######################//
        const onChangeInsertionDate = (event, selectedDate) => {
            const currentDate = selectedDate;
            setshowDatePickerForIns(false);
            setDrugInsertionDate(currentDate);
        };  
        const onChangeExpirationDate = (event, selectedDate) => {
            const currentDate = selectedDate;
            setshowDatePickerForExp(false);
            setDrugExpirationDate(currentDate);
        };
        const showMode_ins = (currentMode) => {
            setshowDatePickerForIns(true);
            setMode(currentMode);
        };
        const showMode_exp = (currentMode) => {
            setshowDatePickerForExp(true);
            setMode(currentMode);
        };
    //############# DATEPICKER SECTION ######################//

    return (
        <SafeAreaView style={styles.newPageContainer}>
            <View style={styles.formContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.textStyle}>Nome:</Text>
                    <TextInput 
                        style={styles.textInputStyle}
                        value={drugName}
                        onChangeText={text => setDrugName(text)}
                        readOnly={false}
                    />
                    <Text style={styles.textStyle}>Descrizione:</Text>
                    <TextInput
                        style={styles.textInputStyle}
                        value={drugDescription}
                        onChangeText={text => setdrugDescription(text)}
                        readOnly={false}
                    />
                </View>
                <View style={styles.dateContainer}>
                    <View style={styles.insDateContainer}>
                        <Text style={styles.textDateStyle}>Inserito il:</Text>
                        <Text style={styles.textDateStyle}>{drugInsertionDate.toLocaleDateString('it-IT')}</Text>
                        <DateTimePicker
                                testID="insertDate"
                                value={drugInsertionDate}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeInsertionDate}
                                display="calendar"
                                dateFormat="dd-mm-yyyy"
                            />
                    </View>
                    <View style={styles.expDateContainer}>
                        <Text style={styles.textDateStyle}>Scade il:</Text>
                        <Text style={styles.textDateStyle}>{drugExpirationDate.toLocaleDateString('it-IT')}</Text>
                        <DateTimePicker
                                testID="expirationDate"
                                value={drugExpirationDate}
                                mode={mode}
                                is24Hour={true}
                                onChange={onChangeExpirationDate}
                                display="calendar"
                                dateFormat="dd-mm-yyyy"
                            /> 
                    </View>

                    <View style={styles.buttonContainer}>
                            <ClearFieldButton handlePress={clearFields}/>
                            <SaveButton handleSave={handleSave}/>
                           
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default AddNewItem;
