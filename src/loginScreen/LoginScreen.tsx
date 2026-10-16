import { Image, Text } from "react-native"
import SafeAreaComponent from "../../Components/SafeAreaComponent"

const LoginScreen=()=>{
    return(
        <SafeAreaComponent>
             <Image
                    source={require('../../assets/png/logo.png')}
                />
        </SafeAreaComponent>
    )
}
export default LoginScreen