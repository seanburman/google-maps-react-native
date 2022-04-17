import { StyleSheet, View } from "react-native"
import ExpandableMenu from "../Components/Menus/ExpandableMenu";

const MarkerOptions: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <ExpandableMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
});

export default MarkerOptions;
