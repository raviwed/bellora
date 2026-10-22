import React, { useState } from "react"
import { Image, StatusBar, Text, TouchableOpacity, View } from "react-native"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import SafeAreaComponent from "../../Components/SafeAreaComponent"
import { styles} from "./styles"
import { BackIcon, CheckCircleIcon, HeartIcon, LeafIcon, MinusIcon, PlusIcon, SearchIcon, ShieldIcon, StarIcon } from "../../assets/svg/singlePageIcon"
/* ---------- Data ---------- */
const FEATURES = [
    { id: "maida", label: "No Maida", Icon: LeafIcon },
    { id: "sugar", label: "No Refined Sugar", Icon: ShieldIcon },
    { id: "jaggery", label: "Made with Jaggery", Icon: CheckCircleIcon },
]

/* ---------- Screen ---------- */
const SingleProductPage = () => {
    const insets = useSafeAreaInsets()
    const [quantity, setQuantity] = useState(1)

    const decrease = () => setQuantity(q => Math.max(1, q - 1))
    const increase = () => setQuantity(q => q + 1)

    return (
        <View style={styles.root}>
            <StatusBar barStyle="dark-content" />

            {/* Hero image, drawn under the status bar */}
            <Image
                source={require("../../assets/png/drakchocochip.png")}
                style={styles.image}
                resizeMode="cover"
            />

            {/* Floating header buttons over the image */}
            <View style={[styles.headerRow, { top: insets.top + 8 }]}>
                <TouchableOpacity style={styles.circleBtn} activeOpacity={0.8}>
                    <BackIcon />
                </TouchableOpacity>
                <View style={styles.headerRight}>
                    <TouchableOpacity style={styles.circleBtn} activeOpacity={0.8}>
                        <SearchIcon />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.circleBtn} activeOpacity={0.8}>
                        <HeartIcon />
                    </TouchableOpacity>
                </View>
            </View>

            <SafeAreaComponent>
                <View style={styles.content}>
                    <View>
                        {/* Title + stock badge */}
                        <View style={styles.brandStatus}>
                            <Text style={styles.title}>Choco Chip Cookie</Text>
                            <View style={styles.inStockValue}>
                                <Text style={styles.inStockTxt}>In Stock</Text>
                            </View>
                        </View>

                        {/* Rating */}
                        <View style={styles.ratingRow}>
                            <View style={styles.stars}>
                                {[0, 1, 2, 3, 4].map(i => (
                                    <StarIcon key={i} />
                                ))}
                            </View>
                            <Text style={styles.ratingTxt}>4.8 (124 reviews)</Text>
                        </View>

                        {/* Price */}
                        <View style={styles.priceRow}>
                            <Text style={styles.price}>₹160</Text>
                            <Text style={styles.oldPrice}>₹180</Text>
                        </View>

                        {/* Feature badges */}
                        <View style={styles.featuresRow}>
                            {FEATURES.map(({ id, label, Icon: FeatureIcon }) => (
                                <View key={id} style={styles.featureItem}>
                                    <View style={styles.featureCircle}>
                                        <FeatureIcon size={18} />
                                    </View>
                                    <Text style={styles.featureTxt}>{label}</Text>
                                </View>
                            ))}
                        </View>

                        {/* Description */}
                        <Text style={styles.description}>
                            Rich choco chips with the goodness of jaggery. Baked fresh in small batches
                            with whole wheat and no preservatives.
                        </Text>
                    </View>

                    {/* Bottom bar */}
                    <View style={styles.footer}>
                        <View style={styles.qtyBox}>
                            <TouchableOpacity onPress={decrease} hitSlop={8}>
                                <MinusIcon />
                            </TouchableOpacity>
                            <Text style={styles.qtyTxt}>{quantity}</Text>
                            <TouchableOpacity onPress={increase} hitSlop={8}>
                                <PlusIcon />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.addBtn} activeOpacity={0.85}>
                            <Text style={styles.addBtnTxt}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaComponent>
        </View>
    )
}

export default SingleProductPage