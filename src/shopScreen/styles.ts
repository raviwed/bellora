import { StyleSheet } from "react-native";
import { BelloraColors } from "../../assets/constants/enums";

// Montserrat is used in the design. Change to your own font names,
// or remove fontFamily to use the system font.
export const FONTS = {
  semiBold: 'Montserrat-SemiBold',
  regular: 'Montserrat-Regular',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BelloraColors.cream,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 18,
    color: BelloraColors.titleBrown,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    height: 87,
    backgroundColor: BelloraColors.white,
    borderWidth: 1,
    borderColor: BelloraColors.softBorder,
    borderRadius: 14,
    overflow: 'hidden',
  },
  cardText: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  cardTitle: {
    fontFamily: FONTS.semiBold,
    fontSize: 15,
    color: BelloraColors.titleBrown,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 12.5,
    color: BelloraColors.textSubtle,
  },
  cardImage: {
    width: 102,
    height: '100%',
  },
});