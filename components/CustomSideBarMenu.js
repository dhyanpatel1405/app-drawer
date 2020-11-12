import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { View, StyleSheet, Text, FlatList,TouchableOpacity } from 'react-native';

export default class CustomSideBarMenu extends React.Component {
  render() {
    return (
      <View>
          
        <DrawerItems{...this.props} 
        
        
        />

      </View>
     
    )
  }
}
