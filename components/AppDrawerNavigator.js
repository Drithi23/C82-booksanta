import { createDrawerNavigator } from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import SettingScreen from '../screens/SettingScreen';
import MyDonationScreen from '../screens/MyDonationScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home: {screen: AppTabNavigator},
  "My Donations": {screen: MyDonationScreen},
  Settings: {screen: SettingScreen}
},
{
  contentComponent: CustomSideBarMenu,
}, {
  initialRouteName: 'Home'
})