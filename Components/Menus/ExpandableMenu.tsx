import { useEffect } from "react";
import { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, UIManager, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../assets/Theme";

type SubCategory = {
    id: number, 
    val: string
}

type Content = {
    isExpanded: boolean,
    category_name: string,
    subcategory: SubCategory[]
}

const CONTENT: Content[] = [
    {
        isExpanded: false,
        category_name: 'Books',
        subcategory: [
            {id: 1, val: 'Free Libraries'},
        ]
    },
    {
        isExpanded: false,
        category_name: 'Music',
        subcategory: [
            {id: 2, val: 'Outdoor'},
            {id: 3, val: 'Indoor'},
        ]
    },
];

interface ExpandableComponentProps {
    item: Content,
    onClickExpand: () => void,
    onCategorySelect: () => void
}
const ExpandableComponent: React.FC<ExpandableComponentProps> = (props: ExpandableComponentProps) => {
    const {item, onClickExpand, onCategorySelect} = props
    const [layoutHeight, setLayoutHeight] = useState<number | undefined>(0);

    if(Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    useEffect(() => {
        if(item.isExpanded) {
            setLayoutHeight(undefined);
        } else {
            setLayoutHeight(0);
        }
    },[item.isExpanded])

    return (
        <View style={{}}>
            <TouchableOpacity style={styles.item} onPress={onClickExpand}>
                <Text style={styles.itemtext}>
                    {item.category_name}
                </Text>
            </TouchableOpacity>
            <View style={{
                height: layoutHeight,
                overflow: 'hidden'
            }}>
                {
                    item.subcategory.map((item, key) => (
                        <TouchableOpacity 
                            key={key} 
                            style={styles.content}
                            onPress={() => onCategorySelect()}
                        >
                            <Text style={styles.text}>
                                {item.val}
                            </Text>
                            <View style={styles.seperator} />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

interface ExpandableMenuProps {
    onCategorySelect: () => void
}

const ExpandableMenu: React.FC<ExpandableMenuProps> = ({onCategorySelect}) => {
    const [multiSelect, setMultiSelect] = useState(false);
    const [listDataSource, setlistDataSource] = useState<Content[]>(CONTENT);

    const updateLayout = (index: number) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        if(multiSelect) {
            array[index]['isExpanded'] = !array[index]['isExpanded'];
        } else {
            array.map((value, placeindex) => 
                placeindex === index
                ? (array[placeindex]['isExpanded']) = !array[placeindex]['isExpanded']
                : (array[placeindex]['isExpanded']) = false
            )
        }
        setlistDataSource(array)
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.titletext}>
                        Marker Categories
                    </Text>
                    <TouchableOpacity style={styles.headerButton}
                        onPress={() => setMultiSelect(!multiSelect)}
                    >
                        <Text>
                            {
                                multiSelect
                                ? 'Enable Single \n Expand'
                                : 'Enable Multiple \n Expand'
                            }
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    {
                        listDataSource.map((item, key) => (
                            <ExpandableComponent 
                                item={item} 
                                key={item.category_name}
                                onClickExpand={() => updateLayout(key)}
                                onCategorySelect={onCategorySelect}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        padding: 10
    },
    titletext: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold'
    },
    headerButton: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 10
    },
    item: {
        backgroundColor: Colors.primaryLight,
        padding: 20
    },
    itemtext: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.menuItems
    },
    content: {
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 16,
        padding: 10,
    },
    seperator: {
        height: 0.5,
        backgroundColor: '#c8c8c8',
        width: '100%'
    }
});

export default ExpandableMenu;