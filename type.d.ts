import { NavigationProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AppNativeParamsList = {
    LoginScreen: undefined;
    ProfileScreen: undefined;
    DataScreen:{
        name: string
        img: string
    }
}
export type Props = NativeStackScreenProps<AppNativeParamsList> 

export type LoginProps = Props['navigation']

export type DataProps = NativeStackScreenProps<AppNativeParamsList, 'DataScreen'>