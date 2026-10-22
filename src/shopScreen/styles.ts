import { StyleSheet } from "react-native";

/* ---------- Theme ---------- */
export const COLORS = {
  background: '#FFF6F0',
  card: '#FFFFFF',
  border: '#EBD3BF',
  title: '#4A2C1A',
  subtitle: '#8C7568',
};

// Montserrat is used in the design. Change to your own font names,
// or remove fontFamily to use the system font.
export const FONTS = {
  semiBold: 'Montserrat-SemiBold',
  regular: 'Montserrat-Regular',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
    color: COLORS.title,
  },
  list: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    height: 87,
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
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
    color: COLORS.title,
    marginBottom: 4,
  },
  cardSubtitle: {
    fontFamily: FONTS.regular,
    fontSize: 12.5,
    color: COLORS.subtitle,
  },
  cardImage: {
    width: 102,
    height: '100%',
  },
});