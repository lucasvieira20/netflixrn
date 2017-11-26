import React, {Component} from 'react'
import {
    Text,    
    View,    
    Image,    
    Dimensions
} from 'react-native';

import Swiper from 'react-native-swiper';

export default class extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            imagesSlider: [
                require('../images/1.jpg'),
                require('../images/2.jpg'),
                require('../images/3.jpg')
            ]
        }
    }
    render(){
        const {imagesSlider} = this.state;

        return (
            <View style={{flex:.5 }}>
                <Swiper
                    autoplay
                    height={230}
                >
                {
                    imagesSlider.map((item, i) =>
                     <View style={styles.container} key={i}>
                    <Image style={styles.image} source={item} resizeMode='contain'/>
                </View>)
                }

                </Swiper>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent: 'center'
    },
    image: {
        height: 240
    }
}