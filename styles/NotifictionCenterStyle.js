import { COLORS, FONT, SIZES, SHADOWS} from "../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    textBox:{
        borderWidth: 1,
        width:398,
        marginLeft:6,
        marginBottom:13,
        marginRight:10,
        borderRadius:20,
        padding:5,
    },
    textNameContainer:{
        flex: 0.5,
        marginTop:5,
        marginLeft:15,
       
    },
    textDateContainer:{
        flex: 0.5,
        marginTop:15,
        marginLeft:15,
       
    },
    drugName:{
        fontFamily: FONT.medium,
        fontSize: SIZES.xLarge,
    },
    expirationDate:{
        fontFamily: FONT.medium,
        fontSize: SIZES.xLarge,
        flexWrap: 'wrap',
    },

});

export default styles;