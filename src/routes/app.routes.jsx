import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';

import { Icon } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { AddPlant } from '../screens/AddPlant';
import { PerfilPlant } from '../screens/PerfilPlant';
import { Stores } from '../screens/Stores';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { sizes, colors } = useTheme();

  const iconSize = sizes[3];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarStyle: {
          backgroundColor: colors.gray[800],
          borderTopWidth: 0,
          height: 'auto',
          paddingBottom: sizes[8],
          paddingTop: sizes[8],
        },
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon as={FontAwesome} name="home" size={iconSize} color={color} />
          ),
        }}
      ></Screen>
      <Screen
        name="addplant"
        component={AddPlant}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon as={FontAwesome} name="leaf" size={iconSize} color={color} />
          ),
        }}
      ></Screen>
      <Screen
        name="stores"
        component={Stores}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon as={FontAwesome} name="shopping-cart" size={iconSize} color={color} />
          ),
        }}
      ></Screen>
      <Screen
        name="perfilplant"
        component={PerfilPlant}
        options={{
          tabBarButton: () => null,
        }}
      ></Screen>
    </Navigator>
  );
}
