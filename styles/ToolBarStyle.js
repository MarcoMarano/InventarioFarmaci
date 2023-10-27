import { StyleSheet } from "react-native";
import { COLORS,SIZES, FONT } from "../constants";

const styles = StyleSheet.create({
    ToolbarContainer:{
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
        margin:20,
    },
    toolBarButton:{
        height:25,
        width:45,
    },
    toolBarButtonName:{
        fontFamily:FONT.medium,
        fontSize:SIZES.medium,
    }

});

export default styles;