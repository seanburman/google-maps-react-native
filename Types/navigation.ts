import { createDrawerNavigator } from "@react-navigation/drawer";

type RootStackParamList = {
    Profile: undefined;
    Map: {
        marker?: {
            lattitude: number,
            longitude: number
        }
    };
}

const Drawer = createDrawerNavigator<RootStackParamList>();

export {
    RootStackParamList,
    Drawer
}