import React, { Component } from 'react';

import {
    Text,
    Dimensions,
    View,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        color: 'white'
    },

    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: "#191919"
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 59,
        borderColor: '#000',
        borderBottomWidth: 2,
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    avatar: {
        width: 60,
        borderRadius:50,
        height: 60,
        marginRight: 20
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: '#b3b3b3',
        fontSize: 15
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderColor: '#000',
        borderBottomWidth: 2
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    scrollContainer: {
        width: width / 2 + 59
    },
    rightIcon: {
        paddingRight: 20
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'red',
        paddingVertical: 15,
        paddingLeft: 25,
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5
    }

}

class Menu extends Component {
    render() {
        return (
            <View style={styles.menu}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatarImage}>
                        <Image
                            style={styles.avatar}
                            source={require('../images/user.png')}
                        />
                        <Text style={styles.text}>Lucas</Text>
                    </View>
                    <Icon
                        name="exchange"
                        color="#fff"
                        size={25}
                    />
                </View>
                <ScrollView style={styles.scrollContainer}>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <Icon
                                style={styles.iconWithText}
                                name="download"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>
                                My Downloads
                            </Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name="angle-right"
                            size={25}
                            color="white"
                        />
                    </View>
                    <View style={styles.textWithIcon}>
                        <View style={styles.withIcon}>
                            <IonIcons
                                style={styles.iconWithText}
                                name="md-checkmark"
                                color="white"
                                size={28}
                            />
                            <Text style={styles.text}>
                                My Lists
                            </Text>
                        </View>
                        <Icon
                            style={styles.rightIcon}
                            name="angle-right"
                            size={25}
                            color="white"
                        />
                    </View>

                    <View style={[styles.itens, styles.itemSelected]}>
                        <Text style={styles.text}>Home</Text>
                    </View>

                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Available for Download</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Netflix Originals</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>TV Shows</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Actions & Adveture</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Drams</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Documentaries</Text>
                    </View>


                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Independent Movies</Text>
                    </View>

                    <View style={styles.noSelectedItems}>
                        <Text style={styles.text}>Comedies</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

export default Menu;