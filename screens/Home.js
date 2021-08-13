/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { COLORS, images, icons } from '../contants';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Swiper from 'react-native-swiper';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
    return (
        <View style={styles.Container}>
            <LinearGradient colors={['#fed734', '#fedd52', '#D8D8D8']} style={styles.Header}>
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
                        <View style={{ flexDirection: 'row', marginTop: 5 }}>
                            <Image
                                source={{uri: 'https://soyagarden.com/content/uploads/2019/10/ic_dau-vang_53px@3x.png'}}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                }}
                            />
                            <Text style={{fontSize: 15, marginLeft: 5 }}>Đậu vàng </Text>
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
                            <FontAwesome name="credit-card" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Nạp đậu</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="bike-fast" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Giao hàng</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="barcode-scan" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Tích S-Point</Text>
                    </View>
                    <View style={styles.Card}>
                        <View style={styles.Icons}>
                            <Material name="ticket-confirmation-outline" size={27} color="#dc8113" />
                        </View>
                        <Text style={styles.CartText}>Voucher</Text>
                    </View>
                </View>
            </LinearGradient>
            <View style={styles.Content}>
                <ScrollView>
                    <Swiper flex={1} backgroundColor={'#D8D8D8'} style={styles.wrapper} showsButtons={false}  autoplay={true}>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2021/04/banner-web.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2020/01/web-2-1-2020-1024x460.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2019/09/Soyal-Garden21721-e1568393821340.jpg',
                            }}
                            />
                        </View>
                        <View style={styles.slide1}>
                            <Image
                            style={styles.SlideImg}
                            source={{
                                uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315.jpg',
                            }}
                            />
                        </View>
                    </Swiper>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Gợi ý cho bạn</Text>
                            <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                        </View>
                        <Swiper flex={1} style={styles.wrapperList} showsButtons={false}>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/11/DSC_9683.jpg',
                                }}
                                />
                                <Text style={styles.Name}>Voucher/Khuyến mãi</Text>
                                <Text style={styles.Price}>Voucher/Khuyến mãi</Text>
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/11/DSC_9613.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/09/DSC_7889.jpg',
                                }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Voucher/Khuyến mãi</Text>
                            <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                        </View>
                        <Swiper flex={1} style={styles.wrapperList} showsButtons={false}>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2021/04/banner-web.jpg',
                                }}
                                />
                                <Text style={styles.Name}>Voucher/Khuyến mãi</Text>
                                <Text style={styles.Price}>Voucher/Khuyến mãi</Text>
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/01/web-2-1-2020-1024x460.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2019/09/Soyal-Garden21721-e1568393821340.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315.jpg',
                                }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.List}>
                        <View style={styles.ListTitle}>
                            <Text style={styles.ListText}>Tin tức</Text>
                            <Entypo style={{paddingTop: 10}} name="chevron-small-right" size={30} color="gray" />
                        </View>
                        <Swiper flex={1} style={styles.wrapperList} showsButtons={false}>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2021/04/banner-web.jpg',
                                }}
                                />
                                <Text style={styles.Name}>Voucher/Khuyến mãi</Text>
                                <Text style={styles.Price}>Voucher/Khuyến mãi</Text>
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/01/web-2-1-2020-1024x460.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.SlideL}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2019/09/Soyal-Garden21721-e1568393821340.jpg',
                                }}
                                />
                            </View>
                            <View style={styles.slide1}>
                                <Image
                                style={styles.SlideImgList}
                                source={{
                                    uri: 'https://soyagarden.com/content/uploads/2020/03/3bd7b9c6e1041a5a4315.jpg',
                                }}
                                />
                            </View>
                        </Swiper>
                    </View>
                </ScrollView>
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
    },
    wrapper: {
        padding: 10,
        height: 200,
    },
    SlideImg: {
        height: 180,
        width: '95%' ,
        borderRadius: 10,
    },
    wrapperList: {
        padding: 10,
        height: 250,
    },
    SlideL: {
        height: 250,
    },
    SlideImgList: {
        height: 180,
        width: '95%' ,
        borderRadius: 10,
    },
    List: {
        flex: 1,
        borderBottomWidth: 4,
        borderBottomColor: '#D8D8D8',
    },
    ListTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ListText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
    Tabs: {
        flex: 1,
        backgroundColor: 'green',
    },
});

export default Home;
