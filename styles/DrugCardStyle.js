import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
    container:{
        margin:5, 
        backgroundColor:COLORS.lightWhite,
        borderRadius:10,
        height:70,   
    },
    textContainer:{
        flexDirection:"row",
        marginHorizontal:20,
        marginVertical:5,
        alignItems:"center",
    },
    name:{
        flex:1,
        fontSize:SIZES.xxLarge,
        fontFamily:FONT.medium
    },
    date:{
        fontSize:SIZES.large,
        fontFamily: FONT.medium,
    },
});

export default styles;