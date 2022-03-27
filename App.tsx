import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { StatusBar, StatusBarStyle, StyleSheet, View } from 'react-native';
import MapComponent from './screens/Map';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { Drawer, RootStackParamList } from './Types';
import CustomDrawerContent from './Components/Drawer/DrawerContent';
import { getHeaderTitle } from '@react-navigation/elements';
import Profile from './screens/Profile';

export default function App() {
  const statusBar: StatusBarStyle = "dark-content"

  const theme = DefaultTheme;
  theme.colors.background = 'transparent';

  const routes = [
    {
      name: 'Profile',
      component: Profile
    },
    {
      name: 'Map',
      component: MapComponent
    },
    {
      name: 'Settings',
      component: MapComponent
    }
  ]

  return (
    <Provider store={store}>
      <>
        <StatusBar
            animated={true}
            barStyle={statusBar}
        />
        <NavigationContainer theme={theme}>
          <Drawer.Navigator 
            initialRouteName="Map"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
            {
              routes.map((route, i) => (
                <Drawer.Screen 
                  key={i}
                  name={route.name as keyof RootStackParamList} 
                  component={route.component} 
                  options={{
                  header: ({ navigation, route, options }) => {
                    const title = getHeaderTitle(options, route.name);
                    return (
                        <View style={styles.header}>
                            {/* <Text style={styles.headerName}>{title}</Text> */}
                            {/* <Pressable onPress={() => navigation.openDrawer()} style={styles.menuButton}>
                            <Ionicons name="md-menu" size={32} color="black" />
                            </Pressable> */}
                        </View>
                    )
                  }
                  }}
                />
            ))
            }
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    height: 1, 
    width: '100%',
    backgroundColor: 'white',
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 3,
      width: 0
    }
  },
  headerName: {
    fontSize: 16,
    color: 'black'
  },
  menuButton: {
    left: 15,
    top: 30,
    zIndex: 100,
    position: 'absolute',
  }
});
