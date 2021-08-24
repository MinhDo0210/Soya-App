/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native';
import { COLORS, images, icons } from '../contants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Tabs = ({ navigation }) => {
    return (
    <View style={styles.Tabs}>
        <TouchableOpacity style={styles.TabIcon}>
            <AntDesign name="home" size={30} color={'#68ac44'}/>
            <Text style={{color: '#68ac44'}}>Trang chủ</Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => navigation.navigate('Restaurant')}
            style={styles.TabIcon}
        >
            <Material name="storefront-outline" size={30} color={'gray'}/>
            <Text style={styles.Tabtxt}>Cửa hàng</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
            <Image
        source={icons.drink}
        resizeMode="contain"
        style={{
            width: 30,
            height: 30,
        }}
            />
            <Text style={styles.Tabtxt}>Gọi món</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
            <Feather name="bell" size={30} color={'gray'}/>
            <Text style={styles.Tabtxt}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.TabIcon}>
            <Entypo name="dots-three-horizontal" size={30} color={'gray'}/>
            <Text style={styles.Tabtxt}>Khác</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    Tabs: {
        flex: 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderTopColor: '#D8D8D8',
    },
    TabIcon: {
        width: 100,
        alignItems: 'center',
        paddingTop: 5,
    },
    Tabtxt: {
        color: 'gray',
    },
});

export default Tabs;
