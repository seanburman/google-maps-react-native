import { StyleSheet, Text, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons';

interface Props {
    icon?: string
}
const Loading: React.FC<Props> = ({children, icon}) => {
    
    const icon_s = {
        
    }

    const icons = new Map([
        ['map', <FontAwesome name="map" size={60} color="green" style={styles.icon}/>],
        ['butt', <Text>Butt</Text>]
    ])

    return (
        <View style={styles.wrapper}>
            {children}
            {icon && icons.get(icon)}
            <Text style={styles.text}>Loading</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginBottom: 20
    },
    text: {
        fontSize: 16
    }
})

export default Loading;