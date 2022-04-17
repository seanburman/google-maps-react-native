import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapComponent from '../Components/Map/MapComponent';
import MapMenu from '../Components/Map/MapMenu';
import MarkerOptions from './MarkerOptions';

interface Props extends DrawerContentComponentProps {}

const Explore: React.FC<Props> = (drawerProps: Props) =>{

  const Tab = createBottomTabNavigator();

  const Test: React.FC = () => {
    return (
      <>
        {Okay}
      </>
    )
}

  const Okay = <Text>Test</Text>
  return (
        <Tab.Navigator 
          tabBar={(tabProps: BottomTabBarProps) => <MapMenu tabNav={tabProps} drawerNav={drawerProps}/>} 
          initialRouteName={'_Map'} 
          screenOptions={{
            tabBarStyle: { 
              height: 100
            },
          }}
        >
          <Tab.Screen name="MarkerOptions" component={MarkerOptions} options={{headerShown: false}}/>
          <Tab.Screen name="_Map" component={MapComponent} options={{headerShown: false}}/>
        </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default Explore;