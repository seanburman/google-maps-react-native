import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Colors } from "../../assets/Theme";

const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props: DrawerContentComponentProps) => {

    const handlePress = (screen: string) => {
        props.navigation.navigate(screen)
        props.navigation.closeDrawer()
    }

    return (
        <DrawerContentScrollView {...props} style={styles.drawerWrapper}>
                    <Pressable style={styles.button} onPress={() => handlePress('Profile')}>
                        <View style={styles.buttonWrapper}>
                            <Ionicons name="home" size={24} color={Colors.menuItems} style={styles.buttonIcon}/>
                            <Text style={styles.text}>Profile</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Map')}>
                        <View style={styles.buttonWrapper}>
                            <FontAwesome name="map" size={24} color={Colors.menuItems} style={styles.buttonIcon}/>
                            <Text style={styles.text}>Map</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Map')}>
                        <View style={styles.buttonWrapper}>
                        <Ionicons name="settings-sharp" size={24} color={Colors.menuItems} style={styles.buttonIcon}/>
                            <Text style={styles.text}>Settings</Text>
                        </View>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Map')}>
                        <View style={styles.buttonWrapper}>
                            <MaterialIcons name="logout" size={24} color={Colors.menuItems} style={styles.buttonIcon}/>
                            <Text style={styles.text}>Log Out</Text>
                        </View>
                    </Pressable>
            {/* <DrawerItemList {...props} /> */}
        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
    drawerWrapper: {
        backgroundColor: Colors.primary,
    },
    buttonWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.primaryLight,
        borderRadius: 8,
        padding: 16
    },
    button: {
        paddingLeft: 4,
        paddingRight: 4,
        paddingVertical: 2,
        display: 'flex'
    },
    buttonIcon: {
        marginRight: 20
    },
    text: {
        fontSize: 18,
        color: 'white'
    }

})