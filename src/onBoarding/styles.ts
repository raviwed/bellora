
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pureIngredient: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 20,
  },

  logoImage: {
    width: 140,
    height: 70,
    resizeMode: "contain",
  },

  pureTxt: {
    fontSize: 40,
    fontFamily:"BelloraHeading-Bold",
    color: "#765047",
  },

  madejaggery: {
    alignItems: "center",
    gap: 6,
  },

  jaggeryImage: {
  width: 300,
  height: 300,
  borderRadius: 150,
  overflow: "hidden",
  alignSelf: "center",
  resizeMode: "cover",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 12,
    marginBottom: 12,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D8C8C0",
  },

  activeDot: {
    width: 24,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#765047",
  },

  nextBtn: {
    width: "100%",
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#765047",
  },

  nextbtnTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
  },

  titleContainer: {
  gap: 4,
  },

subtitleTxt: {
  fontSize: 40,
  color: "#765047",
 fontFamily:"BelloraHeading-Bold",
},
descriptionTxt:{
    fontFamily:"BelloraDescription-Regular",
    color:"#765047",
}
});