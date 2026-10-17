import WishListCenterIcon from "../../assets/svg/WishListCenterIcon.svg"
import NoItemUI from "../../Components/NoItemsUI"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../navigation/types"
const WishListScreen = () => {
  const navigation=useNavigation<NavigationProp<RootStackParamList>>()
    const goToShop=()=>{

    }
    return (
         <NoItemUI
            headerTitle="My Wishlist"
            onBackPress={() => navigation.goBack()}
            icon={<WishListCenterIcon />}
            title="No items in wishlist"
            description={["Save your favourite cookies", "for later"]}
            buttonTitle="Explore Products"
            onButtonPress={() => {
                // navigation.navigate(BelloraScreens.shop)
            }}
        />
    )
}
export default WishListScreen