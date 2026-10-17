import { useRef, useState } from "react";
import { FlatList, Image, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

import SafeAreaComponent from "../../Components/SafeAreaComponent";
import CommonButton from "../../Components/CommonBtn";
import BottomSheetComponent from "../../Components/BottomSheetComponent";
import Cart from '../../assets/svg/Cart.svg';
import Notification from "../../assets/svg/Notification.svg";
import Search from "../../assets/svg/Search.svg";
import { cardStyles, sheetStyles, styles } from "./styles";
import Carousel from "../../Components/Coursel";
import { BelloraColors } from "../../assets/constants/enums";

export type CarouselImage = {
    id: string;
    source: ImageSourcePropType;
};

type ProductItem = {
    id: string;
    source: ImageSourcePropType;
    name: string;
    price: number;
};

const ITEM_WIDTH = 80;
const ITEM_GAP = 20;

const menuItems: CarouselImage[] = [
    { id: "All", source: require('../../assets/png/biscut.png') },
    { id: "Choco Chip", source: require('../../assets/png/chocochip.png') },
    { id: "Coconut", source: require('../../assets/png/coconutbiscut.png') },
    { id: "Oats", source: require('../../assets/png/otasBiscut.png') },
    { id: "Jowar", source: require('../../assets/png/Jowar.png') },
];

const jaggeryItem: ProductItem[] = [
    {
        id: "jaggeryoats",
        source: require("../../assets/png/jaggeryoats.png"),
        name: "Jaggery Oats",
        price: 160,
    },
    {
        id: "darkchocochip1",
        source: require("../../assets/png/drakchocochip.png"),
        name: "Dark Choco Chip",
        price: 180,
    },
    {
        id: "darkchocochip2",
        source: require("../../assets/png/drakchocochip.png"),
        name: "Dark Choco Chip",
        price: 180,
    },
];

const CourselImages: CarouselImage[] = [
    { id: 'jaggery1', source: require('../../assets/png/jaggery1.png') },
    { id: 'jaggery2', source: require('../../assets/png/jaggery2.png') },
    { id: 'jaggery3', source: require('../../assets/png/jaggery3.png') },
    { id: 'jaggery4', source: require('../../assets/png/jaggery4.png') },
    { id: 'jaggery5', source: require('../../assets/png/jaggery5.png') },
];

const HomeScreen = () => {
    const sheetRef = useRef<BottomSheetModal>(null);
    const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
    const [quantity, setQuantity] = useState(1);

    // Called when "+" is tapped on a card
    const handleAddPress = (item: ProductItem) => {
        setSelectedProduct(item);
        setQuantity(1);
        sheetRef.current?.present();   // <-- opens the sheet
    };

    const handleAddToCart = () => {
        // add { ...selectedProduct, quantity } to your cart state / API here
        sheetRef.current?.dismiss();
    };

    const header = (
        <View>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/png/logo.png')} />
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

            <View style={styles.searchbox}>
                <Search height={25} width={25} />
                <TextInput
                    placeholder="search cookies flavours..."
                    style={{ width: "90%" }}
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
                nestedScrollEnabled
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.menuBox}>
                        <Image
                            source={item.source}
                            style={styles.menuImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.menutxt} numberOfLines={1}>{item.id}</Text>
                    </View>
                )}
            />

            <View style={styles.bestSellerContainer}>
                <Text style={styles.bestSeller}>Best Seller</Text>
                <Text style={styles.viewTxt}>View ALL</Text>
            </View>
        </View>
    );

    return (
        <SafeAreaComponent>
            <FlatList
                style={styles.screen}
                data={jaggeryItem}
                numColumns={2}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={header}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={cardStyles.row}
                contentContainerStyle={cardStyles.listContent}
                renderItem={({ item }) => (
                    <View style={cardStyles.card}>
                        <Image
                            source={item.source}
                            style={cardStyles.cardImage}
                            resizeMode="cover"
                        />
                        <View style={cardStyles.cardBody}>
                            <Text style={cardStyles.cardName} numberOfLines={1}>
                                {item.name}
                            </Text>
                            <View style={cardStyles.priceRow}>
                                <Text style={cardStyles.price}>₹{item.price}</Text>
                                <TouchableOpacity
                                    onPress={() => handleAddPress(item)}
                                    style={cardStyles.addBtn}
                                    activeOpacity={0.8}
                                >
                                    <Text style={cardStyles.addTxt}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />

            {/* ref is required, otherwise present() does nothing */}
            <BottomSheetComponent ref={sheetRef} title="Add to Cart">
                {selectedProduct && (
                    <>
                        <View style={sheetStyles.productRow}>
                            <Image
                                source={selectedProduct.source}
                                style={sheetStyles.productImg}
                                resizeMode="cover"
                            />
                            <View style={sheetStyles.productInfo}>
                                <Text style={sheetStyles.productName}>{selectedProduct.name}</Text>
                                <Text style={sheetStyles.productPrice}>₹{selectedProduct.price}</Text>
                            </View>
                        </View>

                        <View style={sheetStyles.qtyRow}>
                            <Text style={sheetStyles.qtyLabel}>Quantity</Text>
                            <View style={sheetStyles.qtyBox}>
                                <TouchableOpacity
                                    style={sheetStyles.qtyBtn}
                                    onPress={() => setQuantity((q) => Math.max(1, q - 1))}
                                    disabled={quantity === 1}
                                >
                                    <Text style={[sheetStyles.qtyBtnTxt, quantity === 1 && sheetStyles.qtyDisabled]}>−</Text>
                                </TouchableOpacity>
                                <Text style={sheetStyles.qtyValue}>{quantity}</Text>
                                <TouchableOpacity
                                    style={sheetStyles.qtyBtn}
                                    onPress={() => setQuantity((q) => q + 1)}
                                >
                                    <Text style={sheetStyles.qtyBtnTxt}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <CommonButton
                            title={`Add to Cart  •  ₹${selectedProduct.price * quantity}`}
                            onPress={handleAddToCart}
                        />
                    </>
                )}
            </BottomSheetComponent>
        </SafeAreaComponent>
    );
};

export default HomeScreen;