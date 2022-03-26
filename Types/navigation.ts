import { createDrawerNavigator } from "@react-navigation/drawer";

type RootStackParamList = {
    Profile: undefined;
    Map: undefined;
}

const Drawer = createDrawerNavigator<RootStackParamList>();

export {
    RootStackParamList,
    Drawer
}