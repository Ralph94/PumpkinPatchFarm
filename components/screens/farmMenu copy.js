import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Animated, Image, Dimensions } from "react-native";
import pumpkinPatch from "../../components/images/pp.png";
import { Context } from "../globalContext/globalContext.js";
import containers from "../styles/containers";
import fonts from "../styles/fonts";
import buttons from "../styles/buttons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from '@ant-design/icons';

    


function FarmMenu({ navigation, route, props }) { // raffp735@gmail.com 


    const { width, height } = Dimensions.get("window");
    const ITEM_WIDTH = width * 0.76;
    const ITEM_HEIGHT = ITEM_WIDTH * 1.47;
    
    

    const images = [
        "https://images.unsplash.com/photo-1566220036246-08bc2fc902a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
        "https://images.unsplash.com/photo-1602457471441-e7099c989338?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1603947214027-2c4c36cc4dfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "https://images.unsplash.com/photo-1506918565526-a15fdf909f8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1506917728037-b6af01a7d403?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",

    ];

    const data = images.map((image, index) => ({
        key: String(index),
        photo: image,
    }));

    
    console.log("App Is Running At 100%")

    return (
        
         <View style={styles.container}>
            <Image source={pumpkinPatch} style={styles.bg} />
            <Text>Pumpkin Patch Farm</Text>
            <FlatList
                data={data}
                keyExtractor={item => item.key}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ width}}>
                            <Image source={{ uri: item.photo }} style={{
                                width: ITEM_WIDTH,
                                height: ITEM_HEIGHT,
                                resizeMode: "cover",
                            }}
                            />
                        </View>
                    )
                }}
            />
            
            </View>
           
    )
}





export default FarmMenu;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    bg: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        resizeMode: 'cover',
    },


});


