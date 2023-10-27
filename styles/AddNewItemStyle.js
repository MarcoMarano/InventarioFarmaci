import { COLORS, FONT, SIZES, SHADOWS} from "../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    newPageContainer:{
        flex:1,
        backgroundColor: COLORS.gray3,
    },
    formContainer:{
        flex:1,
        marginHorizontal:25,
        marginVertical:20,
    },
    textContainer:{
        height: 150,
        marginBottom:80,
    },
    dateContainer:{
        height: 150,
    },
    insDateContainer:{
        flexDirection:"row",
        justifyContent:"space-evenly",
    },
    expDateContainer:{
        flexDirection: "row",
        justifyContent:"space-evenly",
    },
    textStyle:{
        fontSize:SIZES.xLarge,
        fontFamily:FONT.medium,
        marginBottom: 5,
        justifyContent:"center",
    },
    textDateStyle:{
        fontSize:SIZES.large,
        fontFamily:FONT.regular,
        margin:25,
    },
    textInputStyle:{
        marginTop:10,
        height:45,
        borderWidth:.5,
        borderRadius:10,
        borderColor:COLORS.gray2,
        fontSize:SIZES.large,
        fontFamily:FONT.regular,
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 60,
    },
    imageStyle:{
        width:25,
        height:25,
    }  
});

export default styles;