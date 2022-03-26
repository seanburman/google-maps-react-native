import { useRef, useState } from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Callout, LatLng, MapEvent, Marker } from "react-native-maps";

interface ImageMarkerProps {
    latitude: number,
    longitude: number,
    image: ImageSourcePropType
}

export const ImageMarker: React.FC<ImageMarkerProps> = ({children}, props: ImageMarkerProps) => {
    const { latitude, longitude, image } = props

    if(!latitude || !longitude) return <></>
    return (
        <Marker 
            coordinate={{ latitude : latitude , longitude : longitude }}
            >
            {children}
        </Marker>
    )
}

interface DragImageMarkerProps {
    callBack: (coords: LatLng) => void
}
export const DragImageMarker: React.FC<DragImageMarkerProps> = ({callBack}) => {

    const [dragCoord, setDragCoord] = useState<LatLng | null>(null)
    const [ width, setWidth ] = useState<number>(20)
    const [ height, setHeight ] = useState<number>(20)

    const handleDrag = () => {
        
        setWidth(50);
        setHeight(50);
    }

    const handleDragEnd = (newCoords: LatLng) => {
        callBack(newCoords)
        setDragCoord(newCoords);
        setWidth(20);
        setHeight(20);
    }

    return (
        <Marker draggable
            coordinate={{latitude: 43.6597783971002, longitude: -79.36856939862406 }}
            onDragEnd={(e) => handleDragEnd(e.nativeEvent.coordinate)}
            onDrag={() => handleDrag()}
        >
            <Image 
                style={{
                width: width,
                height: height
                }}
                source={require('../../assets/book.png')}
            />
        </Marker>
    )
}

interface StyledCalloutProps {
    children: JSX.Element
}

export const StyledCallout: React.FC<StyledCalloutProps> = ({children}) => {
    return (
        <Callout
        style={{
            width: 'auto'
        }}
        >
            {children}
        </Callout>
    )
}
