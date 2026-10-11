import { Image, Text, TextInput, TouchableOpacity, View } from "react-native"
import SafeAreaComponent from "../../Components/SafeAreaComponent"
import Cart from '../../assets/svg/Cart.svg';
import Notification from "../../assets/svg/Notification.svg"
import Search from "../../assets/svg/Search.svg"
import { styles } from "./styles";
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
                />
            </View>

        </SafeAreaComponent>
    )
}
export default HomeScreen