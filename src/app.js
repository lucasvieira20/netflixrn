import React, { Component } from 'react';
import {
    Image,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    View
} from 'react-native';

import SideMenu from 'react-native-side-menu';

import List from './componentes/List';
import Slider from './componentes/Slider';
import Header from './componentes/Header';
import Menu from './componentes/Menu';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    updateMenu(isOpen) {
        this.setState({ isOpen });
    }

    render() {
        return (
            <View style={[{ flex: 1 }, styles.container]}>
                <SideMenu
                    menu={<Menu />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                >
                    <ScrollView style={styles.cotainer}>
                        <Header toggle={this.toggle.bind(this)} />
                        <Slider />
                        <List />
                    </ScrollView>
                </SideMenu>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    }
});

export default App;