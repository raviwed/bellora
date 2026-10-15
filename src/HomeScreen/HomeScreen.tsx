import { Image, ImageSourcePropType, Text, TextInput, TouchableOpacity, View } from "react-native"
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
const CourselImages: CarouselImage[]=[ { id: 'jaggery1', source: require('../../assets/png/jaggery1.png'), }, { id: 'jaggery2', source: require('../../assets/png/jaggery2.png'), }, { id: 'jaggery3', source: require('../../assets/png/jaggery3.png'), }, { id: 'jaggery4', source: require('../../assets/png/jaggery4.png'), }, { id: 'jaggery5', source: require('../../assets/png/jaggery5.png'), }, ]
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
                    style={{ width: "90%",}}
                    placeholderTextColor={BelloraColors.placeholderColor}
                />
            </View>
            <Carousel images={CourselImages} containerStyle={styles.containerBox}  />
            
        </SafeAreaComponent>
    )
}
export default HomeScreen