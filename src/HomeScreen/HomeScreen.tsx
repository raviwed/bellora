import { FlatList, Image, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from "react-native"
import SafeAreaComponent from "../../Components/SafeAreaComponent"
import Cart from '../../assets/svg/Cart.svg';
import Notification from "../../assets/svg/Notification.svg"
import Search from "../../assets/svg/Search.svg"
import { styles } from "./styles";
import Carousel from "../../Components/Coursel";
import { BelloraColors } from "../../assets/constants/enums";

export type CarouselImage = {
    id: string;
    source: ImageSourcePropType;
};
const ITEM_WIDTH = 80;
const ITEM_GAP = 12;


const menuItems: CarouselImage[] = [
    { id: "All", source: require('../../assets/png/biscut.png') },
    { id: "Choco Chip", source: require('../../assets/png/chocochip.png') },
    { id: "Coconut", source: require('../../assets/png/coconutbiscut.png') },
    { id: "Oats", source: require('../../assets/png/otasBiscut.png') },
    { id: "Jowar", source: require('../../assets/png/Jowar.png') },
]
const numColumns=2;
const jaggeryItem = [
    {
        id: "jaggeryoats",
        source: require("../../assets/png/jaggeryoats.png"),
        name: "Jaggery Oats",
        price: 160,
    },
    {
        id: "drakchocochip",
        source: require("../../assets/png/drakchocochip.png"),
        name: "Dark Choco Chip",
        price: 180,
    },
     {
        id: "drakchocochip",
        source: require("../../assets/png/drakchocochip.png"),
        name: "Dark Choco Chip",
        price: 180,
    },
];
const CourselImages: CarouselImage[] = [{ id: 'jaggery1', source: require('../../assets/png/jaggery1.png'), }, { id: 'jaggery2', source: require('../../assets/png/jaggery2.png'), }, { id: 'jaggery3', source: require('../../assets/png/jaggery3.png'), }, { id: 'jaggery4', source: require('../../assets/png/jaggery4.png'), }, { id: 'jaggery5', source: require('../../assets/png/jaggery5.png'), },]
const HomeScreen = () => {
    return (
        <SafeAreaComponent>
            <View style={styles.headerContainer} >
                <Image
                    source={require('../../assets/png/logo.png')}
                />
                <View style={styles.headerIcons}>
                    <TouchableOpacity style={{ marginRight: 10 }}>
                        <Notification height={30} width={30} />
                        <View style={styles.notificationContainer}>
                            <Text style={styles.notifyTxt}>3</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Cart height={30} width={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.searchbox} >
                <Search height={25} width={25} />
                <TextInput
                    placeholder="search cookies flavours..."
                    style={{ width: "90%", }}
                    placeholderTextColor={BelloraColors.placeholderColor}
                />
            </View>
            <Carousel images={CourselImages} containerStyle={styles.containerBox} />
            <FlatList
                data={menuItems}
                horizontal
                style={styles.menuContainer}
                showsHorizontalScrollIndicator={false}
                snapToInterval={ITEM_WIDTH + ITEM_GAP}
                decelerationRate="fast"
                disableIntervalMomentum
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.menuBox}>
                        <Image
                            source={item.source}
                            style={styles.menuImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.menutxt}>{item.id}</Text>
                    </View>
                )}
            />
            <View style={styles.bestSellerContainer} >
                <Text style={styles.bestSeller} >Best Seller</Text>
                <Text style={styles.viewTxt} >View ALL</Text>
            </View>

          <FlatList
           //key={`flatlist-columns-${numColumns}`}
                data={ jaggeryItem}
                horizontal
                // numColumns={numColumns}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[styles.menuBox]}>
                        <Image
                            source={item.source}
                            style={styles.menuImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.menutxt}>{item.name}</Text>
                    </View>
                )}
            />
           
        </SafeAreaComponent>
    )
}
export default HomeScreen