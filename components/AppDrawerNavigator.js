import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu'
import {AppTabNavigator} from './AppTabNavigator'

export const AppDrawerNavigator=createDrawerNavigator({
Home:{screen:AppTabNavigator},

},
{contentComponent:CustomSideBarMenu},
{initialRouteName:"Home"}

)