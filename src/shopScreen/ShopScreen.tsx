import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SafeAreaComponent from '../../Components/SafeAreaComponent';
import {  styles } from './styles';
import Search from "../../assets/svg/Search.svg"
import { BelloraScreens } from '../../assets/constants/enums';
/* ---------- Types & data ---------- */
type Category = {
  id: string;
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
};

// Replace the require() paths with your real cookie images
const CATEGORIES: Category[] = [
  {
    id: 'all',
    title: 'All Products',
    subtitle: 'View all cookies',
    image: require('../../assets/png/drakchocochip.png'),
  },
  {
    id: 'choco-chip',
    title: 'Choco Chip',
    subtitle: 'Crunchy & chocolatey',
     image: require('../../assets/png/drakchocochip.png'),
  },
  {
    id: 'coconut',
    title: 'Coconut',
    subtitle: 'Tropical goodness',
    image: require('../../assets/png/drakchocochip.png'),
  },
  {
    id: 'oats',
    title: 'Oats',
    subtitle: 'Healthy & hearty',
    image: require('../../assets/png/drakchocochip.png'),
  },
  {
    id: 'jowar',
    title: 'Jowar',
    subtitle: 'Traditional taste',
    image: require('../../assets/png/drakchocochip.png'),
  },
];

type CategoryCardProps = {
  item: Category;
  onPress: (item: Category) => void;
};

const CategoryCard = ({ item, onPress }: CategoryCardProps) => (
  <TouchableOpacity
    activeOpacity={0.85}
    style={styles.card}
    onPress={() => onPress(item)}
  >
    <View style={styles.cardText}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
    </View>
    <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
  </TouchableOpacity>
);

const ShopScreen = () => {
  const navigation = useNavigation<any>();

  // Temporary: every product opens order tracking until the real flow is decided
  const handleCategoryPress = (_item: Category) => {
    navigation.navigate(BelloraScreens.orderTracking);
  };

  const handleSearchPress = () => {
    // navigation.navigate('Search');
  };

  return (
    <SafeAreaComponent>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Categories</Text>
          <TouchableOpacity
            // hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            onPress={handleSearchPress}
          >
            <Search width={30} height={30} />
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        >
          {CATEGORIES.map(item => (
            <CategoryCard
              key={item.id}
              item={item}
              onPress={handleCategoryPress}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaComponent>
  );
};

export default ShopScreen;