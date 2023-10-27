import { COLORS, FONT, SIZES, SHADOWS} from "../constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 70,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems:"center",
    },
    textContainer:{
        marginLeft: 18,
    },
    imageContainer:{
        marginRight: 15,
    },
    notificationButton:{
        width: 40,
        height:40,
    },
    notificationText:{
      fontFamily: FONT.regular,
      fontSize: SIZES.xLarge, 
    }

});

export default styles;