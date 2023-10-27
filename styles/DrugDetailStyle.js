import { COLORS, FONT, SIZES, SHADOWS} from "../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: COLORS.gray3,
    },
    textInfoContainer:{
       height:80,
       justifyContent: "space-between",
       marginHorizontal:30,
       marginBottom: 30,
       marginTop:30,
    },
    dataInfoContainer:{
        flex:1,
        height:250,
        marginHorizontal:30,
        marginVertical:10,
        marginTop:120,
    },
    paragraph:{
        flexDirection:"row",
        marginVertical: 10,
        justifyContent:"space-between",
    },
    textStyle:{
        fontFamily:FONT.medium,
        fontSize: SIZES.xLarge,
    },
    nameStyle:{
        fontFamily:FONT.medium,
        fontSize: SIZES.xxLarge,
        marginVertical: 10,
    },
    textDateStyle:{
      fontFamily:FONT.medium,
      fontSize: SIZES.large,
    },  

});
export default styles;