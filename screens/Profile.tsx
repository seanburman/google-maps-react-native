import { StyleSheet, Text, View } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapComponent from "./Map";

const Tab = createBottomTabNavigator();

const Test: React.FC = () => {
    return (
        <View>
            <Text>Ok</Text>
        </View>
    )
}

const Profile :React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Profile