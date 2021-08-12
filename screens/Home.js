/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, images, icons } from '../contants';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                <View style={styles.User}>
                    <View style={styles.Avt}>
                        <Image
                        source={images.avatar_5}
                        resizeMode="contain"
                        style={{
                            width: 45,
                            height: 45,
                        }}
                    />
                    </View>
                    <View style={styles.Info}>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Minh Gol</Text>
                        <View style={{ flexDirection: 'row', marginTop: 5, }}>
                            <Image
                                source={icons.hamburger}
                                resizeMode="contain"
                                style={{
                                    width: 18,
                                    height: 18,
                                }}
                            />
                            <Text style={{fontSize: 15, marginLeft: 5 }}>Đậu vàng</Text>
                        </View>
                    </View>
                    <View style={styles.Peanut}>
                        <Image
                            source={icons.fire}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                            }}
                        />
                        <Text style={{fontSize: 18, marginLeft: 5, fontWeight: 'bold', lineHeight: 22 }}>0</Text>
                    </View>
                </View>
                <View style={styles.Options}>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Image
                                source={icons.fire}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                        <Text style={styles.CartText}>Nạp đậu</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Image
                                source={icons.fire}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                        <Text style={styles.CartText}>Giao hàng</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Image
                                source={icons.fire}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                        <Text style={styles.CartText}>Tích S-Point</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Image
                                source={icons.fire}
                                resizeMode="contain"
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                            />
                        </View>
                        <Text style={styles.CartText}>Voucher</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Content}>
                <Text>ádfs</Text>
                <Icon name="rocket" size={30} color="#900" />
            </View>
            <View style={styles.Tabs}>
                <Text>ádfs</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Header: {
        flex: 3,
        backgroundColor: '#fcce0e',
        padding: 10,
    },
    User: {
        flex: 1.7,
        flexDirection: 'row',
        padding: 10,
    },
    Avt: {
        height: 55,
        width: 55,
        padding: 4,
        borderRadius: 55 / 2,
        backgroundColor: COLORS.darkgray,
        alignItems: 'center',
    },
    Info: {
        flex: 1,
        marginLeft: 15,
    },
    Peanut: {
        height: 40,
        width: 60,
        padding: 10,
        borderRadius: 25,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    Options: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    Card: {
        padding: 15,
        alignItems: 'center',
    },
    Icons: {
        width: 50,
        height: 50,
        padding: 10,
        borderRadius: 50 / 2,
        alignItems: 'center',
        backgroundColor: '#bceea2',
    },
    CartText: {
        textAlign: 'center',
        paddingTop: 5,
    },
    Content: {
        flex: 8,
        backgroundColor: 'red',
    },
    Tabs: {
        flex: 1,
        backgroundColor: 'green',
    },
});

export default Home;
