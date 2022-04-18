import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StyleSheet, View } from "react-native"
import ExpandableMenu from "../Components/Menus/ExpandableMenu";

interface Props {
    navigation: BottomTabNavigationProp<ParamListBase>
}

const MarkerOptions: React.FC<Props> = ({navigation}) => {

    return (
        <View style={styles.wrapper}>
            <ExpandableMenu onCategorySelect={() => navigation.navigate(
                '_Map', { marker: {lattitude: 0, longitude: 0}}
            )}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

export default MarkerOptions;
