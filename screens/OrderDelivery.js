/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View, Text, ScrollView, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, images, icons, FONTS } from '../contants';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

// const DATA = [
//     {
//         id: '1',
//         name: 'Hot Soya Milk',
//         price: '39.500 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1675.jpg',
//     },
//     {
//         id: '2',
//         name: 'Hot Chocolate Latte',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA1703-copy-683x1024.jpg',
//     },
//     {
//         id: '3',
//         name: 'Hot Black Tea',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA0040-683x1024.jpg',
//     },
//     {
//         id: '4',
//         name: 'Ribbed Combo Sweater',
//         price: '35.000 đ',
//         image: 'https://soyagarden.com/content/uploads/2019/12/28122019_SOYA4933-683x1024.jpg',
//     },
//     {
//         id: '5',
//         name: ' 40.000đ',
//         price: '30 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2020/12/z2253425214787_26a3753be9ab7a8555d37cf0678e3b60-768x1026.jpg',
//     },
//     {
//         id: '6',
//         name: ' 30.000đ',
//         price: '25 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2020/01/li-xi-1024x577.jpg',
//     },
//     {
//         id: '7',
//         name: ' 20.000đ',
//         price: '20 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2019/11/9fc6e8d81f97e6c9bf86.jpg',
//     },
//     {
//         id: '8',
//         name: ' 10.000đ',
//         price: '10 S-Point',
//         image: 'https://soyagarden.com/content/uploads/2019/11/73504788_3195986220476346_6528997133469614080_o.jpg',
//     },
// ];

const categoryData = [
        {
            id: 1,
            nametype: 'Rice',
            icon: icons.rice_bowl,
        },
        {
            id: 2,
            nametype: 'Noodles',
            icon: icons.noodle,
        },
        {
            id: 3,
            nametype: 'Hot Dogs',
            icon: icons.hotdog,
        },
        {
            id: 4,
            nametype: 'Salads',
            icon: icons.salad,
        },
        {
            id: 5,
            nametype: 'Burgers',
            icon: icons.hamburger,
        },
        {
            id: 6,
            nametype: 'Pizza',
            icon: icons.pizza,
        },
        {
            id: 7,
            nametype: 'Snacks',
            icon: icons.fries,
        },
        {
            id: 8,
            nametype: 'Sushi',
            icon: icons.sushi,
        },
        {
            id: 9,
            nametype: 'Desserts',
            icon: icons.donut,
        },
        {
            id: 10,
            nametype: 'Drinks',
            icon: icons.drink,
        },
    ];

    // price rating
const affordable = 1;
const fairPrice = 2;
const expensive = 3;

const restaurantData = [
        {
            id: 1,
            name: 'ByProgrammers Burger',
            rating: 4.8,
            categories: [5, 7],
            priceRating: affordable,
            photo: images.burger_restaurant_1,
            duration: '30 - 45 min',
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: 'Amy',
            },
            menu: [
                {
                    menuId: 1,
                    name: 'Crispy Chicken Burger',
                    photo: images.crispy_chicken_burger,
                    description: 'Burger with crispy chicken, cheese and lettuce',
                    calories: 200,
                    price: 10,
                },
                {
                    menuId: 2,
                    name: 'Crispy Chicken Burger with Honey Mustard',
                    photo: images.honey_mustard_chicken_burger,
                    description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
                    calories: 250,
                    price: 15,
                },
                {
                    menuId: 3,
                    name: 'Crispy Baked French Fries',
                    photo: images.baked_fries,
                    description: 'Crispy Baked French Fries',
                    calories: 194,
                    price: 8,
                },
            ],
        },
        {
            id: 2,
            name: 'ByProgrammers Pizza',
            rating: 4.8,
            categories: [2, 4, 6],
            priceRating: expensive,
            photo: images.pizza_restaurant,
            duration: '15 - 20 min',
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: 'Jackson',
            },
            menu: [
                {
                    menuId: 4,
                    name: 'Hawaiian Pizza',
                    photo: images.hawaiian_pizza,
                    description: 'Canadian bacon, homemade pizza crust, pizza sauce',
                    calories: 250,
                    price: 15,
                },
                {
                    menuId: 5,
                    name: 'Tomato & Basil Pizza',
                    photo: images.pizza,
                    description: 'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
                    calories: 250,
                    price: 20,
                },
                {
                    menuId: 6,
                    name: 'Tomato Pasta',
                    photo: images.tomato_pasta,
                    description: 'Pasta with fresh tomatoes',
                    calories: 100,
                    price: 10,
                },
                {
                    menuId: 7,
                    name: 'Mediterranean Chopped Salad ',
                    photo: images.salad,
                    description: 'Finely chopped lettuce, tomatoes, cucumbers',
                    calories: 100,
                    price: 10,
                },
            ],
        },
        {
            id: 3,
            name: 'ByProgrammers Hotdogs',
            rating: 4.8,
            categories: [3],
            priceRating: expensive,
            photo: images.hot_dog_restaurant,
            duration: '20 - 25 min',
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: 'James',
            },
            menu: [
                {
                    menuId: 8,
                    name: 'Chicago Style Hot Dog',
                    photo: images.chicago_hot_dog,
                    description: 'Fresh tomatoes, all beef hot dogs',
                    calories: 100,
                    price: 20,
                },
            ],
        },
        {
            id: 4,
            name: 'ByProgrammers Sushi',
            rating: 4.8,
            categories: [8],
            priceRating: expensive,
            photo: images.japanese_restaurant,
            duration: '10 - 15 min',
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: 'Ahmad',
            },
            menu: [
                {
                    menuId: 9,
                    name: 'Sushi sets',
                    photo: images.sushi,
                    description: 'Fresh salmon, sushi rice, fresh juicy avocado',
                    calories: 100,
                    price: 50,
                },
            ],
        },
        {
            id: 5,
            name: 'ByProgrammers Cuisine',
            rating: 4.8,
            categories: [1, 2],
            priceRating: affordable,
            photo: images.noodle_shop,
            duration: '15 - 20 min',
            location: {
                latitude: 1.558050496260768,
                longitude: 110.34743759630511,
            },
            courier: {
                avatar: images.avatar_4,
                name: 'Muthu',
            },
            menu: [
                {
                    menuId: 10,
                    name: 'Kolo Mee',
                    photo: images.kolo_mee,
                    description: 'Noodles with char siu',
                    calories: 200,
                    price: 5,
                },
                {
                    menuId: 11,
                    name: 'Sarawak Laksa',
                    photo: images.sarawak_laksa,
                    description: 'Vermicelli noodles, cooked prawns',
                    calories: 300,
                    price: 8,
                },
                {
                    menuId: 12,
                    name: 'Nasi Lemak',
                    photo: images.nasi_lemak,
                    description: 'A traditional Malay rice dish',
                    calories: 300,
                    price: 8,
                },
                {
                    menuId: 13,
                    name: 'Nasi Briyani with Mutton',
                    photo: images.nasi_briyani_mutton,
                    description: 'A traditional Indian rice dish with mutton',
                    calories: 300,
                    price: 8,
                },

            ],
        },
        {

            id: 6,
            name: 'ByProgrammers Dessets',
            rating: 4.9,
            categories: [9, 10],
            priceRating: affordable,
            photo: images.kek_lapis_shop,
            duration: '35 - 40 min',
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: 'Jessie',
            },
            menu: [
                {
                    menuId: 12,
                    name: 'Teh C Peng',
                    photo: images.teh_c_peng,
                    description: 'Three Layer Teh C Peng',
                    calories: 100,
                    price: 2,
                },
                {
                    menuId: 13,
                    name: 'ABC Ice Kacang',
                    photo: images.ice_kacang,
                    description: 'Shaved Ice with red beans',
                    calories: 100,
                    price: 3,
                },
                {
                    menuId: 14,
                    name: 'Kek Lapis',
                    photo: images.kek_lapis,
                    description: 'Layer cakes',
                    calories: 300,
                    price: 20,
                },
            ],

        },


    ];


const OrderDelivery = () => {
    const [categories, setCategories] = useState(categoryData);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [restaurants, setRestaurants] = useState(restaurantData);
    // const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation);

    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id));

        setRestaurants(restaurantList);

        setSelectedCategory(category);
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id);

        if (category.length > 0)
            {return category[0].name;}

        return '';
    }

    const Name = ({ name }) => (
		<View style={{flex: 1}}>
			<Text style={{ width: 150, fontSize: 16, paddingTop: 10, fontWeight: 'bold' }}>{name}</Text>
		</View>
	);
    const NameList = ({ nametype }) => (
		<View>
			<Text style={{ fontSize: 16, paddingTop: 10, fontWeight: 'bold'}}>{nametype}</Text>
		</View>
	);
    const Price = ({ price }) => (
		<View style={{flex: 1, paddingBottom: 10}}>
			<Text style={{ width: 150, fontSize: 14, paddingTop: 5, color: 'gray'}}>{price}</Text>
		</View>
	);
    const renderNew = ({item}) => (
        <View style={{height: 100}}>
            <TouchableOpacity
                style={{
                    height: 80,
                    width: 130,
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                }}
                onPress={() => onSelectCategory(item)}
            >
                <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                />
                <NameList nametype={item.nametype} />
            </TouchableOpacity>
        </View>
    );
    const renderItem = ({item}) => (
        <View style={{ paddingLeft: 15 }}>
            <View style={{height: 130 }}>
                <Image
                style={{
                    width: 175,
                    flex: 1,
                    marginTop: 0,
                    borderRadius: 10,
                }}
                source={item.photo}
            />
            </View>
            <Name name={item.name} />
            <View style={{flexDirection: 'row'}}>
                <Price price={item.price} />
                <AntDesign name="pluscircle" size={23} color={'#fed734'}/>
            </View>
            <View>
                {
                    item.categories.map((categoryId) => {
                        return (
                            <View key={categoryId}>
                                <Text>{getCategoryNameById(categoryId)}</Text>
                            </View>
                        );
                    })
                }
            </View>
        </View>
    );
    return (
        <View style={styles.Content}>
                <View style={styles.List}>
                    <View style={styles.ListTitle}>
                        <Text style={styles.ListText}>Danh mục</Text>
                    </View>
                    <FlatList
                        data={categories}
                        renderItem={renderNew}
                        keyExtractor={item => item.id}
                        horizontal={true}
                    />
                </View>
                <View style={styles.Order}>
                    <View style={styles.OrderTitle}>
                        <Text style={styles.OrderText}>Tất cả các món</Text>
                    </View>
                    <FlatList
                        style={{ marginTop: 10 }}
                        data={restaurants}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                        numColumns={2}
                    />
                </View>
    </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    Header: {
        flex: 2.8,
        padding: 10,
        paddingTop: 0,
    },
    User: {
        flex: 1.5,
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
        flex: 2.5,
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
        paddingTop: 3,
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
    Order: {
        flex: 3.8,
        borderBottomWidth: 4,
        borderBottomColor: '#D8D8D8',
        backgroundColor: 'white',
    },
    OrderTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    OrderText: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10,
    },
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

export default OrderDelivery;
