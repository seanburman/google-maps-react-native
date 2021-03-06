import { Pressable, StyleSheet, View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer";
import Animated from "react-native-reanimated";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';  
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from "../../assets/Theme";
import * as Speech from 'expo-speech';
import { _goToCurrentLocation } from "../../redux/location/locationSlice";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from '@expo/vector-icons'; 

interface Props {
    drawerNav: DrawerContentComponentProps,
    tabNav: BottomTabBarProps
}
const MapMenu: React.FC<Props> = ({drawerNav, tabNav}) => {

    const handlePress = () => {
        Speech.speak('You can even use text to speech for improved accessibility.')
    }

    return (
        <Animated.View style={styles.wrapper}>
                <TouchableOpacity onPress={() => handlePress()}>
                        <View style={styles.iconButton}>
                        <MaterialCommunityIcons name="bag-personal" size={40} color="#FF6E1F" />
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => tabNav.navigation.navigate('Map', {screen: 'MarkerOptions'})}>
                        <View style={styles.iconButton}>
                            <Fontisto name="map-marker-alt" size={40} color="#FF0A33"/>
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => tabNav.navigation.navigate('Map', {screen: 'MarkerOptions'})}>
                        <View style={styles.iconButton}>
                            <FontAwesome5 name="plus" size={36} color="black" />
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => tabNav.navigation.navigate('Map', {screen: '_Map'})}>
                        <View style={styles.iconButton}>
                        <FontAwesome name="map" size={32} color="green" />
                        </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => drawerNav.navigation.openDrawer()}>
                        <View style={styles.iconButton}>
                            <Ionicons name="md-menu" size={40} color="black" />
                        </View>  
                </TouchableOpacity>
        </Animated.View>
    )
}

const styles=StyleSheet.create({
    wrapper: {
        height: 80,
        width: 'auto',
        paddingBottom: 10,
        alignItems: 'flex-end',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: Colors.primaryLight,
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowOffset: {
            width: 0,
            height: -1
        },
    },
    buttonWrapper: {
        display: 'flex',
        backgroundColor: 'red',
    },
    iconButton: {
        padding: 10,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: 'white',
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    blue: {
        backgroundColor: '#0ACDFF'
    },
    orange: {
        backgroundColor: '#ffc247'
    },
    green: {
        backgroundColor: '#17B890'
    },
    white: {
        backgroundColor: 'white'
    },
    red: {
        backgroundColor: '#A4031F'
    },
})

export default MapMenu;
