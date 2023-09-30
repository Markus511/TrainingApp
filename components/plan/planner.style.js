import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT, SIZES } from "../../constants";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  plannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  createContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: COLORS.lightWhite,
  },
  createText: {
    fontSize: SIZES.medium,
  },
  btnImage: {
    marginTop: SIZES.medium,
    height: '40%',
    width: '40%',
  },
 
});

export default styles;