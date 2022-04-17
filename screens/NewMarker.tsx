import { StyleSheet, Text, View } from "react-native"

const NewMarker: React.FC = () => {

    return (
        <View style={styles.wrapper}>
            <Text>New Marker</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
})

export default NewMarker;